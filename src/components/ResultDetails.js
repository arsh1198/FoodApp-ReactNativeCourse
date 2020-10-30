import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const ResultDetails = ({ result }) => {
  return (
    <View style={{ marginRight: 10, width: 210 }}>
      <Image
        source={{ uri: result.restaurant.featured_image }}
        style={styles.image}
      />
      <View style={{ marginTop: 5, marginLeft: 2 }}>
        <Text style={styles.name}>{result.restaurant.name}</Text>
        <View style={{ flexDirection: 'row', marginTop: 4 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
            {result.restaurant.user_rating.aggregate_rating}{' '}
            <AntDesign name="star" style={{ color: '#ffde00' }} /> ·{' '}
          </Text>
          <Text style={{ fontSize: 12 }}>
            {result.restaurant.all_reviews_count} Ratings
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 135,
    borderRadius: 10,
    marginTop: 4
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold'
  }
})

export default ResultDetails
