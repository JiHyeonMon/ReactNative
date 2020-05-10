import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import loading from './loading';

const First = loading(({navigation})=> (
    <View style={styles.container}>
        <Text
            style={styles.item}
            onPress={()=> navigation.navigatie('Second')}
        >
            Second
        </Text>

        <Text
            style={styles.item}
            onPress={()=> navigation.navigatie('Third')}
        >
            Third
        </Text>

    </View>
));

export default First;