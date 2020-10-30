import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ReviewsList from '../components/ReviewsList'

const ReviewScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  return (
    <View>
      <ReviewsList id={id} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ReviewScreen
