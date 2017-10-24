import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { bookitBlue } from '../colors'

export default class ListScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>My bookings</Text>
          <Text>A list of things I've already booked will go here.</Text>
          <Text>It probably makes sense to have a list of upcoming bookings at the top, followed by a list of recent bookings.</Text>
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
