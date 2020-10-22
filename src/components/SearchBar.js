import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { Octicons } from '@expo/vector-icons'

const SearchBar = ({ query, onQueryChanged, onSubmit }) => {
  return (
    <View style={styles.BackgroundStyle}>
      <Octicons name="search" style={styles.IconStyle} />
      <TextInput
        value={query}
        onChangeText={text => onQueryChanged(text)}
        onEndEditing={onSubmit}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search a Restraunt"
        style={styles.TextInputStyle}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  BackgroundStyle: {
    display: 'flex',
    height: 50,
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    flexDirection: 'row'
  },
  TextInputStyle: {
    flex: 1,
    fontSize: 18
  },
  IconStyle: {
    fontSize: 23,
    alignSelf: 'center',
    marginLeft: 15,
    marginHorizontal: 20
  }
})

export default SearchBar
