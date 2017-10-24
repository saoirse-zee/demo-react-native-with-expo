import React from 'react';
import { TouchableHighlight, Picker, Modal, Button, Text, View, StyleSheet } from 'react-native';
import PickerButton from './PickerButton'
import { bookitBlue } from '../colors'

export default class StudioPicker extends React.Component {
  state = {
    isPickerVisible: false
  }

  render() {
    const { selectedStudio, studios, onValueChange } = this.props
    const { isPickerVisible } = this.state

    return (
      <View>
        <PickerButton
          label="Studio"
          value={selectedStudio}
          onPress={() => { this.setState({ isPickerVisible: true }) }}
        />
        <Modal
          visible={isPickerVisible}
          animationType="fade"
        >
          <Text style={styles.title}>Pick a studio</Text>
          <Picker
            selectedValue={selectedStudio}
            onValueChange={onValueChange}
          >
            {studios.map(studio => (
              <Picker.Item
                key={`studio-${studio.value}`}
                label={studio.label}
                value={studio.value}
              />
            ))}
          </Picker>
          <Button
            title="OK"
            onPress={() => {
              this.setState({ isPickerVisible: false })
            }}
          />
        </Modal>
      </View>
    )
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
