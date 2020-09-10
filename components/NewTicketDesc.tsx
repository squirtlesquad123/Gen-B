import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { gql, useMutation } from '@apollo/client'



const NewTicketDesc = ({navigation, route}) => {
  const ADD_TASK = gql`
    mutation addTask(senior: Int!,description: String, deadline: String!) {
      addTask(senior: $id, description: $description, deadline: $deadline) {
        id
      }
    }
  `
  const [addTask, { data }] = useMutation(ADD_TASK);
  
  const handleSubmit = () => {
  }
  console.log('params', route.params)
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please describe your request.</Text>
      <TextInput
      multiline
      autoFocus={true}
      style={styles.textBox}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <TouchableOpacity 
        style={styles.submit}
        onPress={() => navigation.navigate('NewTicket')}
        >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewTicketDesc

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 27
  },
  textBox: {
    height: '45%',
    width: '82%',
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 5,
    justifyContent: 'flex-start'
  },
  submit: {
    width: '82%',
    backgroundColor: 'lightgreen',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
    display: 'flex',
    alignItems: 'center',
  },
})
