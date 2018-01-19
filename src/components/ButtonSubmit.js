import React from 'react';
import{
    TouchableOpacity,
    Text,
} from 'react-native';

export default class Button extends React.Component{
    render(){
        var {onPress , label} = this.props;
        return(
            <TouchableOpacity 
            style={{borderWidth:1, borderColor:'#D1C4E9',width:320,height:60, borderRadius:10,marginTop:20,alignItems:'center',justifyContent:'center'}}
            onPress={onPress}
            >
                <Text style={{paddingVertical:10,fontSize:20, fontWeight:'bold',color:'#fff'}}> {label}!</Text>
            </TouchableOpacity>
        )
    }
}