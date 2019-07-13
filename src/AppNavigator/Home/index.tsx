import React, { PureComponent } from 'react';
import { View,Text } from 'react-native';
import Button from '../../components/button';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {userActions} from '../../store/actions/loginActions';
 class Home extends PureComponent{


    logout=()=>{
        this.props.dispatch(userActions.logout());
        this.props.navigation.navigate("Auth");
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{paddingHorizontal:16}}>
                 <Text style={{fontSize:18,textAlign:'center',marginBottom:8}}>Greetings!</Text>   
                 <Button Title={"Logout"} onPress={this.logout}/>
                </View>
              
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{

    }
}

export default connect(mapStateToProps)(Home);