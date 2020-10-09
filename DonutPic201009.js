import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}


function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}


const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default class Touchables extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }


  render() {
    return (
      <NavigationContainer>
        <MyStack />
        <View style={styles.view1}>
          <Text style={styles.paragraph}>
            Donut Pic !
          </Text>
          <Image style={styles.img1} source={require('./assets/test.jpg')}/>
          <View style={styles.view2}>
            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white" style={styles.picButton}>
              <Text style={styles.btnText}>Pick</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white" style={styles.picButton}>
              <Text style={styles.btnText}>Pick</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white" style={styles.picButton}>
              <Text style={styles.btnText}>Pick</Text>
            </TouchableHighlight>
          </View>
        </View>
      </NavigationContainer>
    );
  }
}
  

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    padding: 8,
  },
  paragraph: {
    flex: 2,
    margin: 24,
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img1: {
    flex: 9,
    width: 400,
    height: 500,
    marginBottom: 20,
  },
  view2: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'stretch',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffffff',
    padding: 8,
  },
  picButton: {
    backgroundColor: '#ffb8b8',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 70,
    marginBottom: 30,
    borderRadius: 50,
  },
  btnText: {
    margin: 24,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  }
});
