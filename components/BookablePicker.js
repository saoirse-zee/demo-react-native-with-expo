import React from 'react'
import { Picker, Text, View, ScrollView } from 'react-native'
import BookableItem from './BookableItem'

const BookablePicker = ({ selectedBookable, bookables, onValueChange }) => (
  <View>
    <ScrollView>
      {bookables.map(bookable => (
        <BookableItem
          bookable={bookable}
          key={`bookable-${bookable.value}`}
          onSelect={onValueChange}
          selectedValue={selectedBookable}
        />
      ))}
    </ScrollView>
  </View>
)

export default BookablePicker
