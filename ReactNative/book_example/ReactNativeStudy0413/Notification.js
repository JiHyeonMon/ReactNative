import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Modal, Text} from 'react-native';
import {Map} from 'immutable';

import styles from './styles';

class Notification extends Component {
    static propTypes = {
        message: PropTypes.string,
        duration : PropTypes.isRequired
    };

    static defaultProps = {
        duration : 1500
    };

    static getDerivedStateFromProps(props){
        return{
            ...this.getDerivedStateFromProps,
            visible: Map([[null,false], [undefined, false]]).get(
                props.message,
                true
            )
        };
    }

    state = {visible: false};
    timer = null;

    ComponentWillUnmount(){
        clearTimeout(this.timer);
    }

    render(){
        const modalProps = {
            animationType : 'fade',
            transparent: true,
            visible: this.state.visible
        };

        this.timer = Map([
            [null, () => null],
            [undefined, () => null]
        ]).get(this.props.message, () => 
        setTimeout(
            ()=> this.setState({visible:false}),
            this.props.duration
        )
        )();

        return (
            <Modal {...modalProps}>
                <View style={styles.notificationContainer}>
                    <View style = {styles.notificationInner}>
                        <Text>{this.props.message}</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

    Notification.propTypes = {
        message: PropTypes.string,
        duration: PropTypes.number.isRequired
    };

    Notification.defaultProps = {
        duration: 1500
    }


export default Notification;