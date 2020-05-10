import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "Haze",
        subtitle: "Just don't go outside",

    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#20002c", "#cbb4d4"],
        title: "우르르쾅쾅! 번개빔-",
        subtitle: "집콕!",
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"]
    },
    Rain: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "비가 주륵주륵....",
        subtitle: "빗소리 들으며 집에 있자.",
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#36D1DC", "#5B86E5"],
        title: "눈송송, 눈이 와~~",
        subtitle: "나랑 눈사람 만들래?~"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"]
    },
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#ff7300", "#fef253"],
        title: "오늘 날씨 화창 ^ 0 ^",
        subtitle: "피크닉 가즈아!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#d7d2cc", "#304352"],
        title: "구름 가득-",
        subtitle: "날이 꾸리꾸리하군",
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"]
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4da0b0", "#d39d38"]
    }

}

export default function Weather({temp, condition}) {
    return (
    <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
    >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainter}>
            <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
            <Text style={styles.temp}>{temp}º</Text>
        </View>
            
        <View style={{...styles.halfContainter, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subTitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
        );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Clear","Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    halfContainter:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:42,
        color:"white"
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10
    },
    subTitle:{
        color:"white",
        fontWeight:"900",
        fontSize:24
    },
    textContainer:{
        padding: 10,
        alignItems:"flex-start"
    }
})