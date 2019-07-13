import React, { PureComponent } from 'react';
import { View,Text } from 'react-native';


export default class Dashboard extends PureComponent{
    render(){
        return(
            <View style={{flex:1}}>
               <Text>Dashboard</Text>
            </View>
        )
    }
}