import React, { useState, useEffect } from 'react'
import zomato from '../api/zomato'

export default () => {
  const [results, setResults] = useState([])
  const [reviews, setReviews] = useState([])
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

  const reviewsApi = async id => {
    try {
      const response = await zomato.get('/reviews', {
        params: {
          res_id: id,
          count: 20
        }
      })
      setReviews(response.data.user_reviews)
    } catch (e) {
      setError('oops! Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('chicken')
  }, [])

  return [searchApi, reviewsApi, results, reviews, error]
}
