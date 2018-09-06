import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchablOpacity
} from 'react-native';

export default class Results extends Component {
  
  state = {
    recordedResults: [],
    sortedByTime: []
  }

  componentDidMount() {
    this.addNoPlayer()
  }

  addNoPlayer = () => {
    const { results } = this.props.navigation.state.params
    const newResults = [...this.state.recordedResults, results]
    let players = [...newResults];
    if (newResults.length < 4) {
      for (i = newResults.length; i < 4; i++) {
        players.push({
          name: 'test',
          answers: [ 
            { answer: 3, correctAnswer: 3 },
            { answer: 0, correctAnswer: 0 },
            { answer: 3, correctAnswer: 3 },
            { answer: 3, correctAnswer: 3 },
            { answer: 1, correctAnswer: 1 },
            { answer: 1, correctAnswer: 1 }
          ]
        })
      }
    }
    const sortedByTime = players.sort((a, b) => b.timeLeft - a.timeLeft)
    const sortedByAnswers = players.sort((a, b) => {
      const aCorrect = this.calcAnswers(a.answers)
      const bCorrect = this.calcAnswers(b.answers)
      return bCorrect - aCorrect
    })
    this.setState({recordedResults: players, sortedByTime, sortedByAnswers})
  }

  calcAnswers = (answers) => {
    if (answers) {
      const correct = answers.map(answer => answer.answer === answer.correctAnswer ? 'correct' : 'incorrect')
      return correct.filter(answer => answer === 'correct').length
    }
  }

  calcPoints = () => {
    const { sortedByTime, sortedByAnswers } = this.state
    const sortedTotal = sortedByTime.map((player, i) => {

    })
  }

  render() {
    const { recordedResults, sortedByTime, sortedByAnswers } = this.state;
    const { amountOfQuestions } = this.props.navigation.state.params
    // console.log(recordedResults)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>RESULTS</Text>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.results}>
            <View style={styles.resultsHeader}>
              <Text style={styles.resultsHeaderText}>Time left</Text>
            </View>
            <View style={styles.resultsBoard}>
              {sortedByTime.map((result, i) => {
                if (result !== 'No Player') {
                  return (
                    <View style={styles.resultsRow}>
                      <View style={styles.resultsPlayerLabel}>
                        <Text style={styles.resultText}>{result.player}</Text>
                      </View>
                      <View style={styles.resultsTimeLabel}>
                        <Text style={styles.resultText}>{result.timeLeft}</Text>
                      </View>
                      <View style={styles.resultsPointsLabel}>
                        {i === 0 && <Text style={styles.resultText}>+10p</Text>}
                        {i === 1 && <Text style={styles.resultText}>+5p</Text>}
                        {i === 2 && <Text style={styles.resultText}>+2p</Text>}
                        {i >= 3 && <Text style={styles.resultText}>+0p</Text>}
                      </View>
                    </View>
                  )
                } else {
                  return (
                    <View style={[styles.resultsRow, {alignItems: 'center', justifyContent: 'center'}]}>
                      <Text style={styles.resultText}>No player</Text>
                    </View>
                  )
                }
              })}
            </View>
          </View>
          <View style={styles.results}>
            <View style={styles.resultsHeader}>
              <Text style={styles.resultsHeaderText}>Correct Answers</Text>
            </View>
            <View style={styles.resultsBoard}>
              {sortedByAnswers.map((result, i) => {
                const points = this.calcAnswers(result.answers)
                if (result !== 'No Player') {
                  return (
                    <View style={styles.resultsRow}>
                      <View style={styles.resultsPlayerLabel}>
                        <Text style={styles.resultText}>{result.player}</Text>
                      </View>
                      <View style={styles.resultsTimeLabel}>
                        <Text style={styles.resultText}>{points}/{amountOfQuestions}</Text>
                      </View>
                      <View style={styles.resultsPointsLabel}>
                        {i === 0 && <Text style={styles.resultText}>+{points * 2}p</Text>}
                        {i === 1 && <Text style={styles.resultText}>+{points * 2}p</Text>}
                        {i === 2 && <Text style={styles.resultText}>+{points * 2}p</Text>}
                        {i >= 3 && <Text style={styles.resultText}>+{points * 2}p</Text>}
                      </View>
                    </View>
                  )
                } else {
                  return (
                    <View style={[styles.resultsRow, {alignItems: 'center', justifyContent: 'center'}]}>
                      <Text style={styles.resultText}>No player</Text>
                    </View>
                  )
                }
              })}
            </View>
          </View>
          <View style={styles.results}>
            <View style={styles.resultsHeader}>
              <Text style={styles.resultsHeaderText}>Total points</Text>
            </View>
            <View style={styles.resultsBoard}>
              {recordedResults.map((result, i) => {
                const points = this.calcPoints()
                if (result !== 'No Player') {
                  return (
                    <View style={styles.resultsRow}>
                      <View style={styles.resultsPlayerLabel}>
                        <Text style={styles.resultText}>{result.player}</Text>
                      </View>
                      <View style={styles.resultsTimeLabel}>
                        <Text style={styles.resultText}>{points}/{amountOfQuestions}</Text>
                      </View>
                      <View style={styles.resultsPointsLabel}>
                        {i === 0 && <Text style={styles.resultText}>+{points * 2}p</Text>}
                        {i === 1 && <Text style={styles.resultText}>+{points * 2}p</Text>}
                        {i === 2 && <Text style={styles.resultText}>+{points * 2}p</Text>}
                        {i >= 3 && <Text style={styles.resultText}>+{points * 2}p</Text>}
                      </View>
                    </View>
                  )
                } else {
                  return (
                    <View style={[styles.resultsRow, {alignItems: 'center', justifyContent: 'center'}]}>
                      <Text style={styles.resultText}>No player</Text>
                    </View>
                  )
                }
              })}
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
  results: {
    flex: 1,  },
  resultsHeader: {
    alignSelf: 'center',
    width: 200,
    borderBottomWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  resultsHeaderText: {

  },
  resultsBoard: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  resultsRow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderColor: 'grey',
  },
  resultsPlayerLabel: {
    flex: 2,
    paddingLeft: 20,
  },
  resultText: {
    fontSize: 16
  },
  resultsTimeLabel: {
    flex: 1,
    alignItems: 'center',

  },
  resultsPointsLabel: {
    flex: 1,
    alignItems: 'center',

  }
})