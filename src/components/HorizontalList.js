import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import ResultDetails from './ResultDetails'

const HorizontalList = ({ title, results, navigation }) => {
  return (
    <View style={{ paddingVertical: 5 }}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={results => results.restaurant.id}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Reviews')}>
              <ResultDetails result={item} />
            </TouchableOpacity>
          )
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

export default withNavigation(HorizontalList)
