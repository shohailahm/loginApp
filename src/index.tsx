import { createSwitchNavigator } from 'react-navigation';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';


export default createSwitchNavigator(
  {
    
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);