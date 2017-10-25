// @flow

import * as React from 'react'
import moment from 'moment'
// $FlowFixMe: Not sure why it's complaining about a missing module
import { View, Text, StyleSheet } from 'react-native'
import { bookitBlue } from '../colors'
import { Bookable, Booking } from '../types'

type Props = {
  bookings: Array<Booking>
}

const mapBookings = (booking: Booking, index: number) => {
  return (
  <View
    key={`booking-${index}`}
    style={styles.item}
  >
    <Text style={{ fontSize: 18 }}>{booking.bookable.label} in {booking.studio}</Text>
    <Text style={{ fontSize: 10, color: 'gray' }}>Start: {moment(booking.start).format('dddd MMM DD h:mm a')}</Text>
    <Text style={{ fontSize: 10, color: 'gray' }}>End: {moment(booking.end).format('dddd MMM DD h:mm a')}</Text>
  </View>
)}

const BookingList = ({ bookings }: Props) => (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>My bookings</Text>
        { bookings.map(mapBookings)}
      </View>
    </View>
)

export default BookingList

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
  item: {
    marginBottom: 20,
  }
})
