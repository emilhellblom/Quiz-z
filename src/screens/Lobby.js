import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

export default class Lobby extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            LOBBY
          </Text>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.currentPlayerView}>
            <Text style={styles.currentPlayerLabel}>You</Text>
            <View style={styles.currentPlayerTab}>
              <View style={styles.lobbyCaptain}>
                <Text style={styles.lobbyCaptainIcon}>K</Text>
              </View>
              <View style={styles.currentPlayer}>
                {/* {this.state.editCurrentPlayer && <TextInput/>} */}
                <Text style={styles.currentPlayerText}>#0000000</Text>
              </View>
              <View style={styles.editCurrentPlayer}>
                <Text style={styles.editCurrentPlayerIcon}>E</Text>
              </View>
            </View>
          </View>
          <View style={styles.playersView}>
            <View style={styles.playersCard}>
              <View style={styles.playersHeader}>
                <Text style={styles.playersHeaderText}>MEMBERS</Text>
              </View>
              <View style={styles.playersContent}>
                <View style={styles.playerRow}>
                  <View style={styles.playerName}>
                    <Text style={styles.playerNameText}>#000001</Text>
                  </View>
                  <View style={styles.playerReady}>
                    <Text style={styles.playerReadyIcon}>Ready?</Text>
                  </View>
                </View>
                <View style={styles.playerRow}>
                  <View style={styles.playerName}>
                    <Text style={styles.playerNameText}>#000002</Text>
                  </View>
                  <View style={styles.playerReady}>
                    <Text style={styles.playerReadyIcon}>Ready?</Text>
                  </View>
                </View>
                <View style={styles.playerRow}>
                  <View style={styles.playerName}>
                    <Text style={styles.playerNameText}>#000003</Text>
                  </View>
                  <View style={styles.playerReady}>
                    <Text style={styles.playerReadyIcon}>Ready?</Text>
                  </View>
                </View>
                <View style={styles.playerRow}>
                  <View style={styles.playerInvite}>
                    <TouchableOpacity style={styles.playerInviteButton}>
                      <Text>Invite a player to join!</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.selectionView}>
            <View style={styles.createButtonView}>
              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>Create</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.deleteButtonView}>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
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
  currentPlayerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  currentPlayerTab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  lobbyCaptain: {
    flex: 1,
    alignItems: 'center',
  },
  lobbyCaptainIcon: {
    fontSize: 20
  },
  currentPlayer: {
    flex: 5,
    alignItems: 'center',
  },
  currentPlayerLabel: {
    fontSize: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: 'white',
    width: 40,
    textAlign: 'center',
  },
  currentPlayerText: {
    fontSize: 20
  },
  editCurrentPlayer: {
    flex: 1,
    alignItems: 'center',
  },
  editCurrentPlayerIcon: {
    fontSize: 20
  },
  playersView: {
    flex: 8,
  },
  playersCard: {
    flex: 1,
    margin: 25,
    marginBottom: 0,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  playersHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  playersHeaderText: {
    fontSize: 20
  },
  playersContent: {
    flex: 8,
  },
  playerRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  playerName: {
    flex: 6,
    justifyContent: 'center',
  },
  playerNameText: {
    fontSize: 30,
  },
  playerReady: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerReadyIcon: {

  },
  playerInvite: {
    flex: 1,
  },
  playerInviteButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionView: {
    flex: 4,
  },
  createButtonView: {
    flex: 2,
  },
  createButton: {
    flex: 1,
    margin: 30,
    marginLeft: 45,
    marginRight: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2F7D0',
    borderRadius: 10,
  },
  createButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',

  },
  deleteButtonView: {
    flex: 1,
    justifyContent: 'center',
  },
  deleteButton: {
    marginLeft: 90,
    marginRight: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C97A6C',
    height: 30,
    borderRadius: 8,
  },
  deleteButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})