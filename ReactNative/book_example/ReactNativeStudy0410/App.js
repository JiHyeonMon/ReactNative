import React, {Component} from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import {fromJS} from 'immutable';

import styles from './styles';

const swuRegion = {
    coordinates: [
        {latitude: 37.624833, longitude: 127.089001},
        {latitude: 37.625793, longitude: 127.093604},
        {latitude: 37.628467, longitude: 127.094584},
        {latitude: 37.631458, longitude: 127.089456},
        {latitude: 37.628439, longitude: 127.088330},
    ],
    strokeColor: 'pink',
    strokeWidth: 4,
};

const sstRegion = {
    coordinates: [
        {latitude: 37.628424, longitude: 127.077634},
        {latitude: 37.630948, longitude: 127.082387},
        {latitude: 37.636498, longitude: 127.080037},
        {latitude: 37.636600, longitude: 127.075992},
        {latitude: 37.634552, longitude: 127.071979},
    ],
    strokeColor: 'black',
    strokeWidth: 4,
};


export default class PlottingOverlays extends Component {
    //swu구역이 우선적 렌더링, swustyles 리스트에 있는 "boldText"가 이를 선택된 것처럼 보여준다.
    state={
        data: fromJS({
            swuStyles: [styles.swuText, styles.boldText],
            sstStyles: [styles.sstText],
            overlays: [swuRegion],
        }),
    }

    get data() {
        return this.state.data;
    }

    set data(data) {
        this.setState({data});
    }

    onClickSwu = () => {
        this.data = this.data.update('swuStyles', i => i.push(styles.boldText)).update('sstStyles', i => i.pop())
        .update('overlays', i => i.set(0, swuRegion));
    }

    onClickSst = () => {
        this.data = this.data.update('sstStyles', i => i.push(styles.boldText)).update('swuStyles', i => i.pop())
        .update('overlays', i => i.set(0, sstRegion));
    }

    render() {
        const{
            swuStyles,
            sstStyles,
            overlays,
        } = this.data.toJS();
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.swuStyles} onPress={this.onClickSwu}>
                        서울여자대학교
                    </Text>

                    {/*텍스트가 클릭됐을 때 스타우트 맵 오버레이를 렌더링*/}
                    <Text style={styles.sstStyles} onPress={this.onClickSst}>
                        서울과학기술대
                    </Text>
                </View>

                <MapView
                    style={styles.mapView}
                    showsPointsOfInterest={false}
                    showsUserLocation
                    followsUserLocation>
                        
                        {overlays.map((v,i) => (
                            <MapView.Polygon
                                key={i}
                                coordinates={v.coordinates}
                                strokeColor={v.strokeColor}
                                strokeWidth={v.strokeWidth}
                            />
                        ))}

                </MapView>

            </View>
        );
    }

}