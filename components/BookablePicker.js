// @flow

import * as React from 'react'
// $FlowFixMe: Not sure why it's complaining about a missing module
import { Picker, Text, View, ScrollView } from 'react-native'
import BookableItem from './BookableItem'
import type { Bookable } from '../types'

type Props = {
  selectedBookable: Bookable,
  bookables: Array<Bookable>,
  onValueChange: () => void,
}

const BookablePicker = ({ selectedBookable, bookables, onValueChange }: Props) => (
  <View>
    <ScrollView>
      {bookables.map(bookable => (
        <BookableItem
          bookable={bookable}
          key={`bookable-${bookable.value}`}
          onSelect={onValueChange}
          selectedBookable={selectedBookable}
        />
      ))}
    </ScrollView>
  </View>
)

export default BookablePicker
