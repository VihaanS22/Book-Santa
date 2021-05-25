import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import LottieView from "lottie-react-native";
export default class AppHeader extends React.Component {
  render() {
    return (
      <LottieView
      ref={animation => {
        this.animation = animation;
      }}
      style={{
        width: 400,
        height: 400,
        backgroundColor: '#eee',
      }}
      source={require('./assets/13015-santa-claus.json')}
      // OR find more Lottie files @ https://lottiefiles.com/featured
      // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
    />
    );
  }
}

