import React from "react";
import { View, Text } from "react-native";
import AppIntro from "react-native-app-intro";

export default class IntroScreen extends React.Component {


  render() {
    return (
      <AppIntro
      onSkipBtnClick={()=>{this.props.navigation.navigate('signin')}}
      onDoneBtnClick={()=>{this.props.navigation.navigate('signin')}}

      >
        <View style={styles.container}>
          <Text> CarriOn -'We carry Your goods and Faith'</Text>
        </View>
        <View style={styles.container}>
          <Text> CarriOn -'Quality Delivery'</Text>
        </View>
        <View style={styles.container}>
          <Text> CarriOn -'A best Friend'</Text>
        </View>
      </AppIntro>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00B0FF"
  }
};
