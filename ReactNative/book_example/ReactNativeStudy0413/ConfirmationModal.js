import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Modal} from 'react-native';

import styles from './styles';

const ConfirmationModal = props => (
    <Modal {...props}>
        <View style={styles.madalContainer}>
            <View style={styles.modalInner}>
                <Text style={styles.modalText}>진짜로?</Text>

                <Text style={styles.modalBotton} onPress={props.onPressCancel}>아니</Text>
            </View>
        </View>
    </Modal>
);

ConfirmationModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onPressConfirm: PropTypes.func.isRequired,
    onPressCancel: PropTypes.func.isRequired
};

ConfirmationModal.defaultProps = {
    transparent: true,
    onRequestClose: () => {}
};

export default ConfirmationModal;