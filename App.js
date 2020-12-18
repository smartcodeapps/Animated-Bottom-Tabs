import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

import LottieView from "lottie-react-native";

function Games() {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue", alignItems: "center" }}>
      <Text style={{ margin: 90, fontSize: 28 }}>This is a Games Screen</Text>
      <LottieView source={require("./assets/Lottie/Games.json")} autoPlay />
    </View>
  );
}

function Apps() {
  return (
    <View style={{ flex: 1, backgroundColor: "tomato", alignItems: "center" }}>
      <Text style={{ margin: 90, fontSize: 28 }}>This is a Apps Screen</Text>
      <LottieView source={require("./assets/Lottie/Apps.json")} autoPlay />
    </View>
  );
}

function Movies() {
  return (
    <View style={{ flex: 1, backgroundColor: "green", alignItems: "center" }}>
      <Text style={{ margin: 90, fontSize: 28 }}>This is a Movies Screen</Text>
      <LottieView source={require("./assets/Lottie/Movie.json")} autoPlay />
    </View>
  );
}

function Books() {
  return (
    <View style={{ flex: 1, backgroundColor: "grey", alignItems: "center" }}>
      <Text style={{ margin: 90, fontSize: 28, color: "black" }}>
        This is a Books Screen
      </Text>
      <LottieView source={require("./assets/Lottie/Book.json")} autoPlay />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let filePath;

            switch (route.name) {
              case "Games":
                filePath = require("./assets/Lottie/Games.json");
                break;
              case "Apps":
                filePath = require("./assets/Lottie/Apps.json");
                break;
              case "Movies":
                filePath = require("./assets/Lottie/Movie.json");
                break;
              case "Books":
                filePath = require("./assets/Lottie/Book.json");
                break;
              default:
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
            }
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <LottieView source={filePath} autoPlay={focused} />;
          },
        })}
      >
        <Tabs.Screen name="Games" component={Games} />
        <Tabs.Screen name="Apps" component={Apps} />
        <Tabs.Screen name="Movies" component={Movies} />
        <Tabs.Screen name="Books" component={Books} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
