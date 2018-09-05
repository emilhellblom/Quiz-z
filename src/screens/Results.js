import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchablOpacity
} from 'react-native';

export default class Results extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    console.log(this.props.navigation.state.params)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>RESULTS</Text>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.timeResults}>
            <View style={styles.timeResultsHeader}>
              <Text style={styles.timeResultsHeaderText}>Time left</Text>
            </View>
            <View style={styles.timeResultsBoard}>
              <Text style={styles.timeResultsContent}></Text>
            </View>
          </View>
          <View style={styles.correctResults}>
            <View style={styles.correctResultsHeader}>
              <Text style={styles.correctResultsHeaderText}>Correct Answers</Text>
            </View>
            <View style={styles.correctResultsBoard}>
              <Text style={styles.correctResultsContent}></Text>
            </View>
          </View>
          <View style={styles.totalResults}>
            <View style={styles.totalResultsHeader}>
              <Text style={styles.totalResultsHeaderText}>Total points</Text>
            </View>
            <View style={styles.totalResultsBoard}>
              <Text style={styles.totalResultsContent}></Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 40,
  },
  mainContent: {
    flex: 8,
    alignItems: 'stretch',
  },
  timeResults: {
    flex: 1,  },
  timeResultsHeader: {
    alignSelf: 'center',
    width: 200,
    borderBottomWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  timeResultsHeaderText: {

  },
  timeResultsBoard: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  timeResultsContent: {

  },
  correctResults: {
    flex: 1,
  },
  correctResultsHeader: {
    alignSelf: 'center',
    width: 200,
    borderBottomWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  correctResultsHeaderText: {

  },
  correctResultsBoard: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white',

  },
  correctResultsContent: {

  },
  totalResults: {
    flex: 1,
  },
  totalResultsHeader: {
    alignSelf: 'center',
    width: 200,
    borderBottomWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  totalResultsHeaderText: {

  },
  totalResultsBoard: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white',

  },
  totalResultsContent: {

  },
})