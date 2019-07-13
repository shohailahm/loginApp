import React,{Component} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';

interface IButtonProps {
    Title: string;
    onPress?: () => any;
    loading?: boolean;
  }

export default class Button extends Component<IButtonProps>{
render(){
    const {Title,onPress,loading}=this.props;
    return(
        <View style={{width:'100%'}}>
            <TouchableOpacity onPress={onPress}>
                <View  style={{alignItems:'center',width:'100%',justifyContent:'center',paddingHorizontal:16,backgroundColor:'#043259',height:48,borderRadius:6,elevation:5}}>
                    <Text style={{color:'#fff'}}>{Title}</Text>
                </View>
            </TouchableOpacity>
        </View>   
       
    )
}
}