import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-native';

const actions = new Map([[true, Alert.alert], [false, ()=>{}]])

class ConfirmationAlert extends Component {
    state = {
        visible: false,
        title: '',
        message: '',
        buttons: []
    };

    static getDerivedStateFromProps(props) {
        return props;
    };

    render(){
        actions.get(this.state.visible)(
            this.state.title,
            this.state.message, 
            this.state.buttons
        );
        return null;
    }
    
}

ConfirmationAlert.propTypes = {
    visible : PropTypes.bool.isRequired,
    title: PropTypes.string,
    message: PropTypes.string,
    buttons: PropTypes.array
};

export default ConfirmationAlert;