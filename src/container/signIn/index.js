import React from "react";
import { Sae } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { View, Text } from "react-native";
import Button from "../../components/ButtonSubmit";
export default class SignIn extends React.Component {
  state = {
    name: "",
    password: ""
  };

  authUser() {
    if (/*this.state.name == "ishab" && this.state.password == "password"*/ true) {
      this.props.navigation.navigate('home')
    } else {
      alert("wrong credentials !"+this.state.name);
      this.setState({ name: "", password: "" });
    }
  }

  userCredential(value, type) {
    switch (type) {
      case "name": {
        this.setState({ name: value });
        return
      }
      case "password": {
        this.setState({ password: value });
        return
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#7E57C2" }}>
        <View
          style={{
            marginTop: 100,
            paddingVertical: 50,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#D1C4E9", fontSize: 40 }}>
            {" "}
            CarriOn
          </Text>
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <Sae
            labelStyle={{ color: "#fff" }}
            style={{}}
            label={"Email Address"}
            iconClass={FontAwesomeIcon}
            iconName={"pencil"}
            iconColor={"white"}
            // TextInput props
            autoCapitalize={"none"}
            autoCorrect={false}
            onChangeText={(x) => this.userCredential(x, "name")}
            value={this.state.name}
          />
          <Sae
            labelStyle={{ color: "#fff" }}
            style={{ marginTop: 10 }}
            label={"Password"}
            iconClass={FontAwesomeIcon}
            iconName={"lock"}
            iconColor={"white"}
            secureTextEntry
            // TextInput props
            autoCapitalize={"none"}
            autoCorrect={false}
            onChangeText={(x) => this.userCredential(x, "password")}
            value={this.state.password}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20
            }}
          >
            <Button
              onPress={() => this.authUser()}
            />
          </View>
        </View>
      </View>
    );
  }
}
