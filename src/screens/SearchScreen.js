import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import HorizontalList from '../components/HorizontalList'

const Search = () => {
  const [query, setQuery] = useState('')
  const [searchApi, results, error] = useResult()

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.restaurant.price_range === price
    })
  }

  return (
    <View style={styles.ContainerStyle}>
      <SearchBar
        query={query}
        onQueryChanged={text => {
          console.log(text)
          setQuery(text)
        }}
        onSubmit={() => searchApi(query)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <HorizontalList results={filterResultsByPrice(1)} title="first" />
      <HorizontalList results={filterResultsByPrice(2)} title="second" />
      <HorizontalList results={filterResultsByPrice(3)} title="third" />
    </View>
  )
}

const styles = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
    padding: 20
  }
})

export default Search
