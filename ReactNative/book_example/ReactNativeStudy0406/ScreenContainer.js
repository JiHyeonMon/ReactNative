import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home'; 
import Settings from './Settings';

const NavigationStack = createStackNavigator({
    Home: { 
        screen: Home,
    },
    Settings: { 
        screen: Settings,
    },
});

const Container = createAppContainer(NavigationStack);

export default Container; 