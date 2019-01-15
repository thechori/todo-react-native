import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Header from './Header';

export default class App extends React.Component {
  state = {
    tasks: [],
    inputValue: ''
  }

  createTask = () => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, prevState.inputValue],
      inputValue: ''
    }))
  }

  deleteTask = (taskToDelete) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task !== taskToDelete)
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Header numberOfTasks={this.state.tasks.length} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => this.setState({ inputValue: text })}
            placeholder="New task..."
            value={this.state.inputValue}
          />
          <TouchableOpacity style={styles.createButton} onPress={this.createTask}>
            <Text style={styles.createButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          {this.state.tasks.map((task, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>{task}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => this.deleteTask(task)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}

          {this.state.tasks.length === 0 && <Text style={styles.emptyListText}>Yay, no tasks!</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: 'pink'
  },

  // InputContainer
  inputContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    flex: 5
  },
  createButton: {
    backgroundColor: 'green',
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  createButtonText: {
    color: 'white'
  },

  // List
  listContainer: {
    backgroundColor: 'orange',
    padding: 10,
    flex: 1
  },
  listItem: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText: {
    color: '#777',
    flex: 5,
    justifyContent: 'center',
    paddingLeft: 10
  },
  deleteButton: {
    padding: 10,
    backgroundColor: 'red',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteButtonText: {
    color: 'white'
  },
  emptyListText: {
    color: '#777',
    paddingTop: 200,
    textAlign: 'center'
  }
});
