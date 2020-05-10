import React from 'react';
import PropTypes from 'prop-types';
import {View, Modal, ActivityIndicator} from 'react-native';

import styles from './styles';

const Activity = props => (
    <Modal visible = { props.visible} transparent>
        <View style = {styles.modalContianer}>
            <ActivityIndicator size = {props.size}></ActivityIndicator>
        </View>
    </Modal>
);

Activity.propTypes = {
    visible: PropTypes.bool.isRequired,
    size: PropTypes.string.isRequired
};

Activity.defaultProps = {
    visible: false,
    size: 'large'
}

export default Activity;