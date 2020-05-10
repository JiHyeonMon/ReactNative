import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';


export default function Loading(){
    return (
    <View style={sytles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={sytles.text}>♬ 날씨를 알아봅시다. ♬</Text>
    </View>
    );
}

const sytles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "flex-end",
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor:"#FDF6AA"
    },
    text:{
        color:"#2c2c2c",
        fontSize:30,
    }
})