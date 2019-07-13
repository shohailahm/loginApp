import React, { Component } from 'react';
import { Keyboard, View,Text,TextInput, ScrollView,StyleSheet, ToastAndroid,AsyncStorage } from 'react-native';
import Button from '../../components/button';
import Snackbar from 'react-native-snackbar';
import {connect} from 'react-redux';
import {userActions} from '../../store/actions/loginActions';

class LoginScreen extends Component {
  state = {
    userName: '',
    password: '',
    isLogging: false,
  };
 
  componentDidMount(){
    debugger
  }

  handleGoBack = () => {
    this.props.navigation.goBack();
  }

  handleLogin = async () => {
    Keyboard.dismiss();
    const { userName, password } = this.state;

    if (!password) {
      ToastAndroid.show('Enter Username and Enter Password',ToastAndroid.LONG);
      return;
    }

    this.setState({
      isLogging: true,
    });
  
    try {
        let details={
          name:this.state.userName,
          password:this.state.password
        }
        this.props.dispatch(userActions.checkLogin(details));
    } catch (error) {
      this.setState({
        isLogging: false,
      });
    }
  }

  handleSignup = () => {
   this.props.navigation.navigate("Registration");
  }

  handleChangeuserName = (value: string) => {
    this.setState({
      userName: value,
    });
  }

  handleChangePassword = (value: string) => {
    this.setState({
      password: value,
    });
  }

  


  componentDidUpdate(nextprops){
    if(this.props.isLoggedIn){
      return this.props.navigation.navigate('App');
    }
    if(nextprops.loginres!=this.props.loginres){
      if(this.props.loginres.message){
        Snackbar.show({
         title: 'User Not Found!',
         duration: Snackbar.LENGTH_SHORT,
         backgroundColor:'red',
         color:'#fff'
       });
      }
    }
  }
  

  render() {
    return (
      <ScrollView contentContainerStyle={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
        <View style={{ paddingHorizontal: 16 }}>
          <View style={{ marginTop: 16 }}>
          <TextInput
              placeholder={'Enter Username'}
              placeholderTextColor={'gray'}
              value={this.state.userName}
              onChangeText={this.handleChangeuserName}
              style={styles.input}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              placeholder={'Enter Password'}
              placeholderTextColor={'gray'}
              value={this.state.password}
              onChangeText={this.handleChangePassword}
              style={styles.input}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center',marginTop:16 }}>
            <Button Title={"Submit"} onPress={this.handleLogin}/>
          </View>
   
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end',marginTop:8,paddingRight:16 }}>
            <Text style={{ color:'#000',fontWeight:'bold' }}  onPress={this.handleSignup}>Register</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
input:{
  borderColor:'#000',
  borderWidth:0.5,
  borderRadius:4,
  paddingHorizontal:16
}
})
const mapStateToProps=(state)=>{
  return{
    isLoggedIn:state.login.isLoggedIn,
    loginres:state.login.loginres
  }
 
}
export interface AppProps{
  isLoggedIn?: any;
}
 export default connect(mapStateToProps)(LoginScreen);
//export default connect<{}, {}, AppProps>(mapStateToProps)(LoginScreen as any);