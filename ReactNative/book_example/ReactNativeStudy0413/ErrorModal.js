import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Modal} from 'react-native';

import styles from './styles';

const innerViewStyle = [
    styles.modalInner,
    styles.modalInnerError
];

const textStyle = [
    styles.modalText,
    styles.modalTextError
];

const buttonStyle = [
    styles.modalButton,
    styles.modalButtonError
]

const ErrorModal = props => (
    <Modal {...props}>
        <View style={styles.modalContainer}>
            <View style={innerViewStyle}>
                <Text style={textStyle}>실패!</Text>
                <Text style={buttonStyle} onPress={props.onPressConfirm}>고쳐</Text>
                <Text style={buttonStyle} onPress={props.onPressCancel}>무시</Text>
            </View>
        </View>
    </Modal>
);

ErrorModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onPressConfirm: PropTypes.func.isRequired,
    onPressCancel: PropTypes.func.isRequired
};

ErrorModal.defaultProps = {
    transparent: true,
    onRequestClose: () => {},
};

export default ErrorModal;