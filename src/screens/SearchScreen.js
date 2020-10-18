import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ToastAndroid } from 'react-native'
import zomato from '../api/zomato'
import SearchBar from '../components/SearchBar'

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  const searchApi = async searchQuery => {
    try {
      const response = await zomato.get('/search', {
        params: {
          entity_id: 12,
          entity_type: 'city',
          q: searchQuery
        }
      })
      setResults(response.data.restaurants)
    } catch (e) {
      setError('oops! Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('chicken roll')
  }, [])

  return (
    <View style={styles.ContainerStyle}>
      <SearchBar
        query={query}
        onQueryChanged={() => {
          setQuery(query)
        }}
        onSubmit={searchApi}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We have found {results.length} results</Text>
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
