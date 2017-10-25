import * as React from 'react';
import Moment from 'moment'
import { TouchableHighlight, Text, View, StyleSheet, Modal, Button } from 'react-native';
import StudioPicker from './StudioPicker';
import TimePicker from './TimePicker';
import BookablePicker from './BookablePicker';
import BookitConfirmationModal from './BookitConfirmationModal';
import { MonoText } from './StyledText';
import { bookables, studios } from '../sampleData'
import { bookitBlue } from '../colors'
import { serverUrl } from '../constants/Server'

export default class BookingForm extends React.Component {
  state = {
    studio: 'london',
    start: Moment(),
    end: Moment().add(1, 'hour'),
    bookable: bookables[0], // Init with first item selected.
    isModalVisible: false
  }

  _bookit(data, onSuccess, onFailure) {
    fetch(serverUrl,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(function(res) {
      console.log(res)
      onSuccess()
    })
    .catch(function(res) {
      console.log(res)
      onFailure()
    })
  }

  render() {
    const booking = {
      studio: this.state.studio,
      start: this.state.start,
      end: this.state.end,
      bookable: this.state.bookable,
    }
    console.log(booking);

    return (
      <View style={styles.container}>
        <BookitConfirmationModal
          visible={this.state.isModalVisible}
          onOkayPress={() => this.setState({ isModalVisible: false })}
          booking={booking}
          success={this.state.bookingSucceeded}
        />
        <View style={styles.content}>
         <Text style={styles.title}>Book a room</Text>
         <StudioPicker
           selectedStudio={this.state.studio}
           studios={studios}
           onValueChange={value => { this.setState({ studio: value })}}
         />
         <TimePicker
           label="Start"
           date={this.state.start}
           onDateChange={value => {
             this.setState({ start: value })
           }}
           maximumDate={this.state.end}
         />
         <TimePicker
           label="End"
           date={this.state.end}
           onDateChange={value => {
             this.setState({ end: value })
           }}
           minimumDate={this.state.start}
         />
         <BookablePicker
           selectedBookable={this.state.bookable}
           bookables={bookables}
           onValueChange={value => {
             this.setState({ bookable: value })
           }}
         />
       </View>

       <View style={styles.button}>
         <TouchableHighlight
           onPress={() => {
             const onSuccess = () => this.setState({ isModalVisible: true, bookingSucceeded: true })
             const onFailure = () => this.setState({ isModalVisible: true, bookingSucceeded: false })
             this._bookit(booking, onSuccess, onFailure)
           }}>
             <Text style={styles.buttonText}>Bookit</Text>
           </TouchableHighlight>
       </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
  button: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: bookitBlue,
    marginTop: 50
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
})
