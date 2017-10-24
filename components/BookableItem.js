import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { bookitBlue } from '../colors'

const BookableItem = ({ bookable, selectedValue, onSelect }) => (
  <TouchableHighlight
    onPress={() => onSelect(bookable.value)}
    underlayColor="#eeeeee"
  >
    <View style={{
      flex: 1,
      flexDirection: 'row',
      marginBottom: 5,
    }}>
      <View style={{
        backgroundColor: bookable.value === selectedValue ? bookitBlue : 'white',
        width: 5,
        marginRight: 5,
      }}></View>

      <View>
        <Text style={{ fontSize: 18 }}>{bookable.label}</Text>
        <Text style={{ fontSize: 10, color: 'gray' }}>{bookable.description}</Text>
      </View>
    </View>
  </TouchableHighlight>
)

export default BookableItem
