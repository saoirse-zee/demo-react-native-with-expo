// @flow

import * as React from 'react';
import moment from 'moment'
// $FlowFixMe: Not sure why it's complaining about a missing module
import { StyleSheet, View, Text } from 'react-native';
import { bookitBlue } from '../colors'
import BookingList from '../components/BookingList'
import { Booking } from '../types'
import { serverUrl } from '../constants/Server'

type Props = {}

type State = {
  bookings: Array<Booking>,
}

export default class ListScreen extends React.Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  state = {
    bookings: []
  }

  timerID: number = 0

  componentWillMount() {
    fetch(serverUrl)
      .then(res => res.json())
      .then(rawBookings => {
        const bookings = rawBookings.map(b => ({
          studio: b.studio,
          value: b.value,
          start: moment(b.start),
          end: moment(b.end),
          bookable: b.bookable,
        }))
        this.setState({ bookings })
      })
      .catch(err => console.log('oh no', err))
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        fetch(serverUrl)
          .then(res => res.json())
          .then(bookings => this.setState({ bookings }))
          .catch(err => console.log('oh no', err))
      },
      5000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <View style={styles.container}>
        <BookingList
          bookings={this.state.bookings}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
