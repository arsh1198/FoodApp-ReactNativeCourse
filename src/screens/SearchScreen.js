import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import HorizontalList from '../components/HorizontalList'
import { ScrollView } from 'react-native-gesture-handler'

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
      <Text style={{ marginTop: 5 }}>{results.length} results found!</Text>
      <ScrollView>
        <HorizontalList
          style={styles.HorizontalList}
          results={filterResultsByPrice(1)}
          title="Pocket Friendly"
        />
        <HorizontalList
          style={styles.HorizontalList}
          results={filterResultsByPrice(2)}
          title="Bit Pricier"
        />
        <HorizontalList
          style={styles.HorizontalList}
          results={filterResultsByPrice(3)}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ContainerStyle: {
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1
  },
  HorizontalList: {
    padding: 20
  }
})

export default Search
