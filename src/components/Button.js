import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default class Button extends React.Component {
  render() {
    var { onPress, label,backgroundColor,textColor } = this.props;
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#D1C4E9",
          backgroundColor:backgroundColor,
          width: 220,
          height: 50,
          borderRadius: 10,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
          elevation:1,
          shadowColor:'#bcbcbc',
          shadowOffset:{width:2,height:2}
        }}
        onPress={onPress}
      >
        <Text
          style={{
            paddingVertical: 10,
            fontSize: 20,
            fontWeight: "bold",
            color: textColor
          }}
        >
          {" "}
          {label}!
        </Text>
      </TouchableOpacity>
    );
  }
}
