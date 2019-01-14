import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InputBar = (props) => {
  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: 100
  },
  inputField: {
    fontSize: 18,
    color: "red"
  },
  button: {
    backgroundColor: "blue"
  }
});

export default InputBar;
