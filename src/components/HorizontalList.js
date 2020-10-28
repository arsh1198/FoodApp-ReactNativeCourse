import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ResultDetails from './ResultDetails'

const HorizontalList = ({ title, results }) => {
  return (
    <View>
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
    fontWeight: 'bold'
  }
})

export default HorizontalList
