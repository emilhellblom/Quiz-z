import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class CreateQuestions extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.navigation.state.params.testing)
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{flex: 1, backgroundColor: '#EAF7F0' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            ADD QUESTIONS
          </Text>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.questionCard}>
            <View style={styles.questionSection}>
              <TextInput
                style={styles.questionInput}
                multiline={true}
                placeholder='Enter your question here'
                numberOfLines={10}
                maxLength={208} />
            </View>
            <View style={styles.answerSection}>
              <View style={styles.answerRow}>
                <View style={styles.answerInput}>
                  <TextInput maxLength={22} style={styles.answerInputTag} placeholder='Enter an answer'/>
                </View>
                <View style={styles.answerCheck}>
                  <Text style={styles.answerCheckIcon}>O</Text>
                </View>
              </View>
              <View style={styles.answerRow}>
                <View style={styles.answerInput}>
                  <TextInput maxLength={22} style={styles.answerInputTag} placeholder='Enter an answer'/>
                </View>
                <View style={styles.answerCheck}>
                  <Text style={styles.answerCheckIcon}>O</Text>
                </View>
              </View>
              <View style={styles.answerRow}>
                <View style={styles.answerInput}>
                  <TextInput maxLength={22} style={styles.answerInputTag} placeholder='Enter an answer'/>
                </View>
                <View style={styles.answerCheck}>
                  <Text style={styles.answerCheckIcon}>O</Text>
                </View>
              </View>
              <View style={styles.answerRow}>
                <View style={styles.answerInput}>
                  <TextInput maxLength={22} style={styles.answerInputTag} placeholder='Enter an answer'/>
                </View>
                <View style={styles.answerCheck}>
                  <Text style={styles.answerCheckIcon}>O</Text>
                </View>
              </View>
              <View style={styles.cardEndStyling}></View>
            </View>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.readyButton}>
              <Text style={styles.readyButtonText}>READY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF7F0',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 40,
  },
  mainContent: {
    flex: 8,
  },
  questionCard: {
    flex: 6,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 30,
  },
  questionSection: {
    flex: 1,
  },
  questionInput: {
    flex: 1,
    margin: 20,
    textAlign: 'center',
  },
  answerSection: {
    flex: 1,
  },
  answerRow: {
    borderTopWidth: 2,
    borderColor: '#EAF7F0',
    flex: 1,
    flexDirection: 'row',
  },
  answerInput: {
    flex: 6,
    justifyContent: 'center',
  },
  answerInputTag: {
    
  },
  answerCheck: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerCheckIcon: {

  },
  cardEndStyling: {
    flex: 0.5,
    borderTopWidth: 2,
    borderColor: '#EAF7F0',
  },
  buttonView: {
    flex: 2,
  },
  readyButton: {
    flex: 1,
    margin: 35,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  readyButtonText: {
    fontSize: 30,
  }
})