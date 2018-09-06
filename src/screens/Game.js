import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import NavigationService from '../Navigator/NavigationService.js';
import {questions} from '../lib/lib';

export default class Game extends Component {
  constructor() {
    super()

    this.state = {
      questionNr: 0,
      answeredQuestions: [],
      i: 0,
      timerCount: null,
    }
  }

  // this.props.navigate.state.params.timer

  componentDidMount() {
    const timerFunc = setInterval(this.counter, 1000)
    this.setState({timerFunc, timerCount: 20})
  }

  nextQuestion = (answer, correctAnswer) => {
    const { questionNr, answeredQuestions, timerCount } = this.state;
    const newAnswer = {answer, correctAnswer}
    if (questionNr < 5) this.setState({questionNr: questionNr + 1, answeredQuestions: [...answeredQuestions, newAnswer]})
    if (questionNr === 5) {
      NavigationService.navigate('Results', { results: { answers: [...answeredQuestions, newAnswer], player: '#000000', timeLeft: timerCount }, amountOfQuestions: questions.length})
    }
  }

  counter = () => {
    const { answeredQuestions } = this.state;
    let i = this.state.timerCount;
    i--
    if (i > 0) {
      return this.setState({timerCount: i})
    } else {
      clearInterval(this.state.timerFunc)
      NavigationService.navigate('Results', { results: { answers: answeredQuestions, player: '#000000', timeLeft: 0 }, amountOfQuestions: questions.length})
    }
  }

  render() {
    const { questionNr } = this.state;
    console.log(this.state.timerCount, 'TIMER')
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>QUIZ'Z</Text>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.timerView}>
            <Text style={styles.timerCountText}>{this.state.timerCount}</Text>
          </View>
          <View style={styles.questionCard}>
            <View style={styles.questionSection}>
              <Text style={styles.questionText}>{questions[questionNr].question}</Text>
            </View>
            <View style={styles.answersSection}>
              {questions[questionNr].options.map((option, i) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => this.nextQuestion(i, questions[questionNr].correctAnswer)}>
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.scoreBoard}>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF7F0'
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
  },
  timerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timerCountText: {
    fontSize: 30,
  },
  questionCard: {
    flex: 6,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  questionSection: {
    flex: 2,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',

  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
  },
  answersSection: {
    flex: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: 'gray'
  },
  optionText: {
    textAlign: 'center',
  },
  scoreBoard: {
    flex: 3,

  },
})