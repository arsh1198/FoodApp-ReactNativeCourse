import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultDetails = ({ result }) => {
  return (
    <View>
      <Image
        source={{ uri: result.restaurant.featured_image }}
        style={styles.image}
      />
      <Text style={styles.name}>{result.restaurant.name}</Text>
      <Text>
        {result.restaurant.user_rating.aggregate_rating} Stars,{' '}
        {result.restaurant.all_reviews_count} Ratings
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default ResultDetails
