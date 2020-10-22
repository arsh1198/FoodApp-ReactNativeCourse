import React, { useState, useEffect } from 'react'
import zomato from '../api/zomato'

export default () => {
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
    searchApi('chicken')
  }, [])

  return [searchApi, results, error]
}
