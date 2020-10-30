import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="star" style={{ color: '#f5bc42' }} />
          <AntDesign name="star" style={{ color: '#f5bc42' }} />
          <AntDesign name="star" style={{ color: '#f5bc42' }} />
          <AntDesign name="star" style={{ color: '#f5bc42' }} />
          <AntDesign name="star" style={{ color: '#f5bc42' }} />
          <Text style={{ color: 'grey', fontSize: 12 }}>
            {' '}
            · {result.review.review_time_friendly}
          </Text>
        </View>
        <Text style={styles.Text}>{result.review.review_text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F0EEEE',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 5
  },
  Image: { height: 50, width: 50, borderRadius: 999 },
  UserName: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  Text: { marginTop: 5 }
})

export default ReviewsCard
