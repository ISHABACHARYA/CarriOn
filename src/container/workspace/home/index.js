import React from "react";
import { View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import Navbar from "../../../components/Navbar";
import MapView from "react-native-maps";

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
        <View
          style={{
            flex: 1,
            height: 400,
            width: 400,
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <MapView
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </View>
      </View>
    );
  }
}
