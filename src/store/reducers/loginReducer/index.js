import {USERDETAILS,LOGINRES} from '../../constants'
import { ToastAndroid } from 'react-native';
const initialState = {
  isLoggedIn:false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USERDETAILS:
         return{...state,resUser:action.data};
        case LOGINRES:
         return {...state,loginres:action.data,isLoggedIn:action.data.success};
        case "LOGOUT":
          return{state:initialState}
         default:
            return state;
    }
};