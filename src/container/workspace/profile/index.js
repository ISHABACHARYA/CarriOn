import React, { Component } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import Navbar from '../../../components/Navbar';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {
  render() {
    return (
      <View style={ { flex: 1, backgroundColor: '#FF8A65' } }>
        <StatusBar hidden />
        <Navbar
          label="Profile"
          lIcon="md-arrow-back"
          rIcon={'md-more'}
          lPress={ () => this.props.navigation.goBack(null) }
        />
        <View style={ { flex: 2, alignItems: 'center', justifyContent: 'flex-end' } }>
          <View
            style={ { height: 100, width: 100, borderRadius: 50, shadowOffset: { height: 3, width: 3 }, shadowColor: '#000', elevation: 2, shadowOpacity: .3 } }
          >
            <Image
              source={ require('../../../img/gates.jpeg') }
              resizeMode={ 'contain' }
              style={ { height: 100, width: 100, borderRadius: 50 } }
            />
          </View>
          <Text style={ { fontWeight: 'bold', marginTop: 10, fontSize: 20, color: '#eee' } }>
            Bill Gates
          </Text>
        </View>
        <View style={ { flex: 5, marginHorizontal: 20 } }>
          <View style={ { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } }>
            <Icon
              name={ 'md-call' }
              size={ 25 }
              color={ '#fff' }
              style={ { flex: 2 } }
            />
            <Text style={ { flex: 7, paddingHorizontal: 10, color: '#fff', fontSize: 16, fontWeight: 'bold' } }>
              +977 9860251012
            </Text>
          </View>
          <View style={ { flex: 3, alignItems: 'center', justifyContent: 'flex-start' } }>
            <Icon
              name='md-ribbon'
              size={ 25 }
              color={ '#7E57C2' }
            />
            <View style={ { height: 60, width: 60, borderRadius: 30, borderWidth: 1, borderColor: '#7E57C2', alignItems: 'center', justifyContent: 'center' } }>
              <Text style={ { color: '#7E57C2' } }>
                120
              </Text>
            </View>
            <Text style={ { color: '#7E57C2', paddingTop: 5 } }> Reward Points</Text>
          </View>
        </View>
      </View>
    );
  }
}
