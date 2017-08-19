/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import {RkTheme,RkButton,RkModalImg} from 'react-native-ui-kitten';
const uri1 = 'https://akveo.github.io/react-native-ui-kitten/assets/pics/backgroundMainScreenPhone.png';
const uri2 = 'http://imglf2.nosdn.127.net/img/WlhFRllYaUxNRFJzd1JNUWpRYi9SNXp0Rk9IWElSSlhERmw2YUFNOUwyOXhOMmFHNi9XVXp3PT0.jpg';

RkTheme.setType('RkButton', 'full', {
  width:'90%'
});

// RkTheme.setType('RkButton', 'circle', {
//   borderRadius:100
// });


export default class RnUiKitten extends Component {

  _onPress = e => {
    alert(123);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <RkButton onPress={this._onPress} rkType='danger outline'>Click me!</RkButton>

        <RkModalImg source={{ uri: uri1 }}/>

        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RnUiKitten', () => RnUiKitten);
