import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const HorizontalList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={results => results.id}
        data={results}
        renderItem={({ item }) => {
          return <Text>{item.restaurant.name}</Text>
        }}
      />

      <Text>Results: {results.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default HorizontalList
