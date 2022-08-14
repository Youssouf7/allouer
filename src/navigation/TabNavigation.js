import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import WishList from "../home/WishList";
import ChatScreen from "../home/ChatScreen";
import ProfileScreen from "../home/ProfileScreen";
import NewRental from "../home/NewRental";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        top: -20,
        backgroundColor: "red",
        borderRadius: 40,
        ...styles.shadow,
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              position: "absolute",
              //   left: 25,
              //   right: 19,
              //   bottom: 5,
              //   elevation: 0,
            },
          ],
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5
                  name="home"
                  size={24}
                  color={focused ? "red" : "black"}
                />
                <Text
                  style={{ color: focused ? "red" : "black", fontSize: 12 }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="WishList"
          component={WishList}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5
                  name="heart"
                  size={24}
                  color={focused ? "red" : "black"}
                />
                <Text
                  style={{ color: focused ? "red" : "black", fontSize: 12 }}
                >
                  WishList
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="New"
          component={NewRental}
          options={{
            tabBarIcon: ({ focused }) => {
              return <FontAwesome name="plus" size={30} color="white" />;
            },
            tabBarButton: (props) => {
              return <CustomButton {...props} />;
            },
          }}
        />

        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5
                  name="comment-alt"
                  size={24}
                  color={focused ? "red" : "black"}
                />
                <Text
                  style={{ color: focused ? "red" : "black", fontSize: 12 }}
                >
                  Chat
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5
                  name="address-card"
                  size={24}
                  color={focused ? "red" : "black"}
                />
                <Text
                  style={{ color: focused ? "red" : "black", fontSize: 12 }}
                >
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});

export default TabNavigation;
