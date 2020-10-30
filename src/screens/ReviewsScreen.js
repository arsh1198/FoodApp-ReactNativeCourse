import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ReviewsList from '../components/ReviewsList'

const ReviewScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  return (
    <View style={{ backgroundColor: 'white', padding: 20, flex: 1 }}>
      <Text style={styles.Heading}>Reviews</Text>
      <ReviewsList id={id} />
    </View>
  )
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export default ReviewScreen
