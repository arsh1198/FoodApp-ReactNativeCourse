import React, { useEffect } from 'react'
import { View, Image, Text, StyleSheet, FlatList } from 'react-native'
import ReviewsCard from './ReviewsCard'
import useResult from '../hooks/useResult'
import Search from '../screens/SearchScreen'

const ReviewsList = ({ id }) => {
  const [, reviewsApi, , reviews, error] = useResult()
  useEffect(() => {
    reviewsApi(id)
  }, [])
  return reviews ? (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={reviews => reviews.review.id}
        data={reviews}
        renderItem={({ item }) => {
          return <ReviewsCard result={item} />
        }}
      />
    </View>
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ReviewsList
