import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ReviewsCard from '../components/ReviewsCard'

const ReviewScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  return (
    <View>
      <ReviewsCard />
      <ReviewsCard />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ReviewScreen
