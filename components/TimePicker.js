import React from 'react';
const moment = require('moment');
import { TouchableHighlight, Modal, Button, DatePickerIOS, Text, TextInput, View, StyleSheet } from 'react-native';
import PickerButton from './PickerButton'
import { bookitBlue } from '../colors'

export default class TimePicker extends React.Component {
  state = {
    date: this.props.date,
    isPickerVisible: false,
  }

  _getDate(date) {
    if (date) {
      return date.toDate()
    }
    return undefined
  }

  render() {
    const { label, onDateChange, minimumDate, maximumDate } = this.props
    const { date } = this.state

    return (
      <View>
        <PickerButton
          label={label}
          value={`${date.format('dddd MMM DD')} at ${date.format('h:mm a')}`}
          onPress={() => { this.setState({ isPickerVisible: true }) }}
        />

        <Modal visible={this.state.isPickerVisible}>
          <Text style={styles.title}>{label} time</Text>
          <DatePickerIOS
            date={this.state.date.toDate()}
            onDateChange={value => {
              onDateChange(moment(value))
              this.setState({ date: moment(value) })
            }}
            minuteInterval={15}
            minimumDate={this._getDate(minimumDate)}
            maximumDate={this._getDate(maximumDate)}
          />
          <Button
            title="OK"
            onPress={ () => {
              this.setState({ isPickerVisible: false })
            }}
            color="#dddddd"
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  title: {
    marginTop: 60,
    marginLeft: 30,
    color: bookitBlue,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
})
