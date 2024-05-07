import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Login, Signup } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/colors";

const Tab = createMaterialBottomTabNavigator();
const color = COLORS.secondary;

const Nav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#ffffff", // Color of the active tab
        inactiveTintColor: "#bfbfbf", // Color of the inactive tabs
        style: { backgroundColor: "#00ff00" }, // Background color of the tab bar (green in this case)
      }}
    >
      <Tab.Screen
        name="Home"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={"#39B68D"} size={26} /> // Corrected icon name
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={Signup}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="briefcase-outline" color={"#39B68D"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Signup}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" color={"#39B68D"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Signup}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="notifications-outline"
              color={"#39B68D"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={Signup}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ellipsis-horizontal-outline"
              color={"#39B68D"}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Nav;
