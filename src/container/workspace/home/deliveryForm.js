import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Hoshi } from "react-native-textinput-effects";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";

export default class DeliveryForm extends Component {
  render() {
    return (
      <View>
        <Navbar
          label="Delivery Form"
          lIcon="md-arrow-back"
          lPress={() => this.props.navigation.goBack(null)}
        />
        <Hoshi label={"Sender Contact"} borderColor={"#7E57C2"} />
        <Hoshi label={"Receiver Contact"} borderColor={"#7E57C2"} />
        <View style={{ height: 100 }} />

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            label="Confirm "
            backgroundColor={"#7E57C2"}
            textColor={"#fff"}
            onPress={() =>
              alert("delivery Done! you ll be shortly connected by our System")
            }
          />
        </View>
      </View>
    );
  }
}
