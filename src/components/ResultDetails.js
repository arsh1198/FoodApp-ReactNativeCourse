import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultDetails = ({ result }) => {
  return (
    <View style={{ marginRight: 10, width: 210 }}>
      <Image
        source={{ uri: result.restaurant.featured_image }}
        style={styles.image}
      />
      <View style={{ marginTop: 5 }}>
        <Text style={styles.name}>{result.restaurant.name}</Text>
        <Text>
          {result.restaurant.user_rating.aggregate_rating} Stars,{' '}
          {result.restaurant.all_reviews_count} Ratings
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    borderRadius: 4
  },
  name: {
    fontWeight: 'bold'
  }
})

export default ResultDetails
