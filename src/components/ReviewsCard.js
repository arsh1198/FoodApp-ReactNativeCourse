import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ReviewsCard = ({ result }) => {
  return (
    <View style={styles.Container}>
      <View style={{}}>
        <Image
          style={styles.Image}
          source={{ uri: result.review.user.profile_image }}
        ></Image>
      </View>
      <View style={{ flex: 1, marginLeft: 15 }}>
        <Text style={styles.UserName}>{result.review.user.name}</Text>
        <Text style={styles.Text}>
          Hello my name is John Doe, And this is jsut a sample Review. Loved the
          Food! lol
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F0EEEE',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 15
  },
  Image: { height: 50, width: 50, borderRadius: 999 },
  UserName: { fontWeight: 'bold', marginBottom: 2 },
  Text: { fontSize: 12 }
})

export default ReviewsCard
