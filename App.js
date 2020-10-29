import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import Zomato from './src/api/zomato'
import ReviewScreen from './src/screens/ReviewsScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Reviews: ReviewScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restraunt Search'
    }
  }
)

export default createAppContainer(navigator)
