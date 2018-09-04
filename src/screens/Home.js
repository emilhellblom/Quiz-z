import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class Home extends Component {
  constructor() {
    super() 
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeTop}>
          <TouchableOpacity style={styles.menuView}>
            <View style={styles.menu}>
              <Text style={styles.menuIcon}>H</Text>
            </View>
            <View style={styles.notification}>
              <Text style={styles.notificationIcon}>1</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.welcomeLabel}>
            <Text style={styles.welcomeText}>WELCOME</Text>
            <Text style={styles.welcomeText}>#000000000000</Text>
          </View>
        </View>
        <View style={styles.homeBottom}>
          <View style={styles.startLobbyButtonView}>
            <TouchableOpacity style={styles.startLobbyButton}>
              <Text style={styles.startLobbyButtonText}>Start new lobby!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.FAQButtonView}>
            <TouchableOpacity style={styles.FAQButton}>
              <Text style={styles.FAQButtonText}>How does it work?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 10,
  },
  homeTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  menuView: {
    flex: 1,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  menuIcon: {
    fontSize: 25
  },
  notification: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 12,
    width: 12,
    borderRadius: 12
  },
  notificationIcon: {
    fontSize: 10,
    color: 'white'
  },
  welcomeLabel: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
  },
  homeBottom: {
    flex: 1,
  },
  startLobbyButtonView: {
    height: 80,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,

  },
  startLobbyButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  startLobbyButtonText: {
    fontSize: 30,
  },
  FAQButtonView: {
    height: 40,
    paddingLeft: 80,
    paddingRight: 80,
    marginTop: 20,
    justifyContent: 'center',

  },
  FAQButton: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },
  FAQButtonText: {
    fontSize: 16,
  },
})