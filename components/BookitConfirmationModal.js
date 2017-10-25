import React from 'react'
import { Modal, View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { bookitBlue } from '../colors'

const BookitConfirmationModal = ({ visible, booking, onOkayPress, success }) => {
  const successMessage = (
    <View>
      <Text style={styles.title}>You booked it!</Text>
      <Text>You have the {booking.bookable.label} in {booking.studio} from {booking.start.format('dddd MMM DD h:mm a')} to {booking.end.format('dddd MMM DD h:mm a')}.</Text>
      <View style={styles.cancelButton}>
        <TouchableHighlight onPress={() => {console.log('Implement me.')}}>
          <Text style={styles.cancelButtonText}>Oops. Cancel that.</Text>
        </TouchableHighlight>
      </View>
    </View>
  )

  const failureMessage = (
    <View>
      <Text style={styles.title}>Hrm.</Text>
      <Text>Something's not right.</Text>
    </View>
  )

  return (
    <Modal
      visible={visible}
      animationType="fade"
     >
      <View style={styles.modal}>
        { success ? successMessage : failureMessage }
        <View style={styles.button}>
          <TouchableHighlight onPress={onOkayPress}>
            <Text style={styles.buttonText}>Okay</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

export default BookitConfirmationModal

const styles = StyleSheet.create({
  button: {
    padding: 20,
    alignItems: 'center',
    marginTop: 50
  },
  buttonText: {
    fontSize: 24,
    color: bookitBlue
  },
  cancelButton: {
    padding: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'rgb(245, 17, 174)'
  },
  modal: {
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30,
  },
  title: {
    color: bookitBlue,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
})
