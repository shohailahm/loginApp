import React, { PureComponent } from 'react';
import { View,Text } from 'react-native';
import Button from '../../components/button';
import {NavigationActions} from 'react-navigation';

export default class Home extends PureComponent{


    logout=()=>{
        this.props.navigation.navigate("Auth");
    }
    render(){
        return(
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{paddingHorizontal:16}}>
                 <Button Title={"Logout"} onPress={this.logout}/>
                </View>
              
            </View>
        )
    }
}