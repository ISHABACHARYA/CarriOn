import React from "react";
import { View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import Navbar from "../../../components/Navbar";
import MapView from "react-native-maps";
import Button from "../../../components/Button";

export default class Home extends React.Component {
   state = {
    originalValue: 'set Pickup Location',
    newValue: 'set Pickup Location',
  };

 /* getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        };
      },
    );
  }*/

  setPickup(){
    if(this.state.newValue == this.state.originalValue){
    alert('pickup Location Added');
    this.setState({
      newValue: 'set Delivery Location'
    })
    }
    else{
      this.setState({
        newValue: 'set Pickup Location'
      })
      this.props.navigation.navigate("deliveryForm");
    }
  };

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
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <MapView
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            region={{
              latitude: 27.6756,
              longitude: 85.3459,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />

          <View style={{ marginBottom: 60 }}>
            <Button
              label={this.state.newValue}
              onPress={() => this.setPickup()}
              backgroundColor={"#FF7043"}
              textColor="#fff"
            />
          </View>
        </View>
      </View>
    );
  }
}
