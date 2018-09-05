import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Home from './src/screens/Home';
import Lobby from './src/screens/Lobby';
import CreateQuestions from './src/screens/CreateQuestions';
import Game from './src/screens/Game';
import Results from './src/screens/Results';

import { createStackNavigator } from 'react-navigation';
import NavigationService from './src/Navigator/NavigationService';

const Navigator = createStackNavigator({
  // Home: Home,
  // Lobby: Lobby,
  // CreateQuestions: CreateQuestions
  Game: Game,
  Results: Results
}, {
  headerMode: 'none'
})


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
