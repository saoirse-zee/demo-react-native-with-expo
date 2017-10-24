import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { bookitBlue } from '../colors'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>My profile</Text>
          <Text>My user info will go here. In practice, this may just be a link allowing the user to logout.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  content: {
    margin: 30,
  },
  title: {
    color: bookitBlue,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
})
