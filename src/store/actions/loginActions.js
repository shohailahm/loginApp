import {USERDETAILS,LOGINRES} from '../constants';
import { AsyncStorage, ToastAndroid } from 'react-native';

export const userActions={
    checkLogin,
    AddUser
}


function checkLogin(data){
    return dispatch=>{
      AsyncStorage.getItem('Users')
      .then((res)=>{
          let users=JSON.parse(res);
          if(users && users.length>0){
                let matches= users.filter((item,i)=>{
                return item.name===data.name && item.password==data.password;
           })
           if(matches){
               return dispatch(loginRes({success:true}))
           }
           else{
              return dispatch(loginRes({success:false,message:'user Not Found'}))
           }
          }
      })
    }
}

function loginRes(res){
    return {type:LOGINRES,data:res}
}

function AddUser(details){
    return dispatch=>{
        let usersArr:[]=[];
        AsyncStorage.getItem('Users')
        .then((res)=>{
          let usrs=JSON.parse(res);
          if(usrs){
            usersArr=usrs;
            return usersArr;
          }
        })
        let user={
          name:details.userName,
          password:details.password
        }
        usersArr.push(user);
        AsyncStorage.setItem("Users",JSON.stringify(usersArr))
        return dispatch({type:USERDETAILS,data:{succes:true,message:"Added!"}})

    }    
}
