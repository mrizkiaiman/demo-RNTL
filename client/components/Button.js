import React from 'react';
import { StyleSheet } from 'react-native'
import { Button, Text } from 'native-base';

function Buttons(props) {
  const styles = StyleSheet.create({
    button: {
      width: '100%',
    }
  })

  return (
    <Button testID="test-button" onPress={props.command} rounded style={styles.button, {...props.customStyles}}>
      <Text testID="test-buttonText">{props.name}</Text>
    </Button>
  )
}

export default Buttons