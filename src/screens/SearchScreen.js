import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import HorizontalList from '../components/HorizontalList'
import { ScrollView } from 'react-native-gesture-handler'

const Search = () => {
  const [query, setQuery] = useState('')
  const [searchApi, , results, , error] = useResult()

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.restaurant.price_range === price
    })
  }

  return (
    <View style={styles.ContainerStyle}>
      <View style={{ marginRight: 20, marginBottom: 15 }}>
        <SearchBar
          query={query}
          onQueryChanged={text => {
            setQuery(text)
          }}
          onSubmit={() => searchApi(query)}
        />
      </View>
      {error ? <Text>{error}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <HorizontalList
          results={filterResultsByPrice(1)}
          title="Pocket Friendly"
        />
        <HorizontalList results={filterResultsByPrice(2)} title="Bit Pricier" />
        <HorizontalList results={filterResultsByPrice(3)} title="Big Spender" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
    paddingVertical: 15,
    paddingStart: 15,
    flex: 1
  },
  HorizontalList: {}
})

export default Search
