import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Tasks</Text>
      {props.numberOfTasks > 0 && <Text style={styles.numberText}>({props.numberOfTasks})</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    backgroundColor: 'blue',
    height: 50,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  titleText: {
    fontSize: 30,
    color: 'white'
  },
  numberText: {
    paddingLeft: 5,
    fontSize: 20,
    color: 'grey'
  }
});

export default Header;
