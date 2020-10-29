import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ResultDetails from './ResultDetails'

const HorizontalList = ({ title, results }) => {
  return (
    <View style={{ paddingVertical: 10 }}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={results => results.restaurant.id}
        data={results}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 7
  }
})

export default HorizontalList
