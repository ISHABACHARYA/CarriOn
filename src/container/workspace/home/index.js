import React from "react";
import { View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import Navbar from "../../../components/Navbar";

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <Navbar
          lIcon="md-options"
          lPress={() => this.props.navigation.navigate("DrawerOpen")}
          label="Home"
        />
        <View style={{flex:1}}>
          <Text>Homeeeeeeee</Text>
        </View>
      </View>
    );
  }
}
