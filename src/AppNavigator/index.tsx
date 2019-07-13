
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './Home';
import Messages from './Messages';
import Profile from './Profile';
import Dashboard from './Dashboard';


const AppNavigator = createBottomTabNavigator(
  {
    Home:createStackNavigator({
      Home:{screen:Home,
      navigationOptions: () => ({
      title:'Home',
      headerBackTitle: null
    })
  }
}),
    Dashboard:createStackNavigator({
      Dashboard:{screen:Dashboard,
      navigationOptions: () => ({
      title:'Dashboard',
      headerBackTitle: null
    })
   }
  }),
    Profile:createStackNavigator({
        Profile:{screen:Profile,
        navigationOptions: () => ({
        title:'Profile',
        headerBackTitle: null
    })
   }
 }),
    Messages:createStackNavigator({
      Messages:{screen:Messages,
      navigationOptions: () => ({
      title:'Messages',
      headerBackTitle: null
    })
  }
}),
  },
  {
    initialRouteName: 'Home',
    
  },
);

export default AppNavigator;
