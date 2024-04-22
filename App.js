<<<<<<< HEAD
import { Text, View } from "react-native";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
        <Text>I am bikrity </Text>
      </View>
    );
  }
}
=======
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
>>>>>>> d6a0fc39c1a8b91b0f8a882027cd35b9cb0cae93
