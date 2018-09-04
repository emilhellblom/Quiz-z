/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';
import Lobby from './src/screens/Lobby';
import CreateQuestions from './src/screens/CreateQuestions';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CreateQuestions />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});
