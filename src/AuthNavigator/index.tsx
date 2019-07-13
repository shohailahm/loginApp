import { createStackNavigator } from 'react-navigation';


import Login from './LoginScreen';
import Registration from './RegistrationScreen';


const AuthNavigator = createStackNavigator(
  {
    Login,
    Registration,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default AuthNavigator;
