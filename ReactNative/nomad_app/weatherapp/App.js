import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';


const API_KEY ="85406a1628cf343a5531bf3a1f736108";


export default class extends React.Component {
  state={
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const { data: {main : {temp}, weather} } = await axios.get (
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
    this.setState(
      { isLoading:false, 
        condition: weather[0].main, 
        temp
      }
      );
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      //send to API and get weather!

      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("찾을 수 없습니다.", "ㅠㅠ");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

