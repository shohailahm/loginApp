import React, { PureComponent } from 'react';
import { View,Text } from 'react-native';


export default class Messages extends PureComponent{
    render(){
        return(
            <View style={{flex:1}}>
               <Text>Messages</Text>
            </View>
        )
    }
}