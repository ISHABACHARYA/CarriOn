import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";

export default class SideMenu extends React.Component {
  navigateToScreen(route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#7E57C2" }}>
        <ScrollView>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 0.5,
              borderColor: "#fff"
            }}
            onPress={() => this.navigateToScreen("homeref")}
          >
            <Image
              source={require("../img/logo.png")}
              style={{ height: 200, width: 150, borderRadius: 100 }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              borderBottomWidth: 0.5,
              borderColor: "#fff",
              marginTop: 10
            }}
            onPress={() => this.navigateToScreen("profile")}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              My Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              borderBottomWidth: 0.5,
              borderColor: "#fff",
              marginTop: 10
            }}
            onPress={() => this.navigateToScreen("history")}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              Transaction History
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              borderBottomWidth: 0.5,
              borderColor: "#fff",
              marginTop: 10
            }}
            onPress={() => this.navigateToScreen("offers")}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              Offers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              borderBottomWidth: 0.5,
              borderColor: "#fff",
              marginTop: 10
            }}
            onPress={() => this.navigateToScreen("contactUs")}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              Contact Us
            </Text>
          </TouchableOpacity>
          <View style={{ height: 150 }} />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: "cursive",
                color: "#ddd",
                fontSize: 12
              }}
            >
              copyright by CarriOn development team 2018
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
