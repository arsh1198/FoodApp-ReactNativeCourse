import axios from 'axios'

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': 'b50f5e30c3cb2e4939ce79d3e4c267eb'
  }
})
