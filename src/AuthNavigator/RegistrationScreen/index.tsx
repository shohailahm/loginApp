import React, { Component } from 'react';
import { Keyboard, View,Text,TextInput,StyleSheet, ToastAndroid, AsyncStorage } from 'react-native';
import Button from '../../components/button';
import Snackbar from 'react-native-snackbar';
import {connect} from 'react-redux';
import {userActions} from '../../store/actions/loginActions';

interface IState {
userName:String,
password:String,
confirmPassword:String,
loading:Boolean
}

const initState = () => ({
  userName:'',
  password:'',
  confirmPassword:'',
  loading:false
});

class Registration extends Component<IState> {
  state: IState = initState();

  handleSave = async () => {
    Keyboard.dismiss();
    if(!this.state.userName||!this.state.password||!this.state.confirmPassword){
      ToastAndroid.show("All Feilds are required",ToastAndroid.SHORT);
      return;
    }
    if(this.state.password!==this.state.confirmPassword){
      ToastAndroid.show("Password doesn't match!",ToastAndroid.SHORT);
      return;
    }
    let details={
      name:this.state.userName,
      password:this.state.password,
    }
    this.props.dispatch(userActions.AddUser(details));

    return Snackbar.show({
      title: 'User Added!',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor:'#043259',
      color:'#fff'
    });
  }

  handleSignIn = () => {
    this.props.navigation.navigate('Login');
  }
  

  render() {
    return (
      <View style={{flex:1,justifyContent:'center'}}>
      <View style={{ paddingHorizontal: 16}}>
      
        <View style={{ marginTop: 16 }}>
          <TextInput
              placeholder={'Enter Username'}
              placeholderTextColor={'gray'}
              value={this.state.userName}
              onChangeText={(text)=>this.setState({userName:text})}
              style={styles.input}
            />
          </View>

        <View style={{ marginTop: 16 }}>
          <TextInput
            placeholder={'Enter Password'}
            value={this.state.password}
            onChangeText={this.handleChangePassword}
            style={styles.input}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <TextInput
              placeholder={'Confirm Password'}
              placeholderTextColor={'gray'}
              value={this.state.confirmPassword}
              onChangeText={(text)=>this.setState({confirmPassword:text})}
              style={styles.input}
            />
         </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center',marginTop:16 }}>
          <Button Title="Register" onPress={this.handleSave}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end',marginTop:8,paddingRight:16 }}>
            <Text style={{ color:'#000',fontWeight:'bold' }}  onPress={this.handleSignIn}>Sign-In</Text>
        </View>
      </View>
    </View>

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
  });

  const mapStateToProps=(state:any)=>{
    return{
      resUser:state.login.resUser
    }
  }

export default connect(mapStateToProps)(Registration);
