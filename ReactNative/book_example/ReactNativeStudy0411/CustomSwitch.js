import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, Switch} from 'react-native';

import styles from './styles';

const CustomSwitch = props => (
    <View style={styles.customSwitch}>
        <Text>{PropTypes.label}</Text>
        <Switch {...props} />
    </View>
);

CustomSwitch.propTypes = {
    label : PropTypes.string,
};
export default CustomSwitch;