import React from "react";
import { View, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Navbar extends React.Component {
  render() {
    const { lIcon, lPress, label, rIcon, rPress } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          height: 60,
          width: 375,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:'#FF7043'
        }}
      >
        <View
          style={{
            flex:1,
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Icon name={lIcon} size={25} color={"#fff"} onPress={lPress} />
        </View>
        <View
         style={{
            flex:8,
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Text
          style={{fontWeight:'bold',fontSize:20, color:'#fff'}}
          >{label}</Text>
        </View>
        <View
         style={{
            flex:1,
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Icon name={rIcon} size={25} color={"#fff"} onPress={rPress} />
        </View>
      </View>
    );
  }
}
