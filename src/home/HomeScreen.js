import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { FlatList, TouchableOpacity, Image } from "react-native";

const HomeScreen = () => {
  const categories = [
    {
      name: "House",
      icon: "house-user",
    },
    {
      name: "Car",
      icon: "car",
    },
    {
      name: "House",
      icon: "house-user",
    },
    {
      name: "Car",
      icon: "car",
    },
    {
      name: "House",
      icon: "house-user",
    },
    {
      name: "Car",
      icon: "car",
    },
  ];

  const houses = [
    {
      name: "Studio Modern",
      location: "Biyem-Assi",
      town: "Yaounde",
      beds: 3,
      bathrooms: 2,
      thumbnail: require("../../assets/house.jpg"),
      price: 60000,
    },
    {
      name: "Studio Modern",
      location: "Nkolbisson",
      town: "Yaounde",
      beds: 4,
      bathrooms: 2,
      thumbnail: require("../../assets/house.jpg"),
      price: 70000,
    },
    {
      name: "Studio Modern",
      location: "Obilli",
      town: "Yaounde",
      beds: 1,
      bathrooms: 1,
      thumbnail: require("../../assets/house.jpg"),
      price: 50000,
    },
  ];

  const [clicked_index, setClickedIndex] = useState(0);
  return (
    <SafeAreaView style={stylesheet.AndroidSafeArea}>
      <View style={stylesheet.home}>
        <View style={stylesheet.header}>
          <View
            style={{
              backgroundColor: "white",
              paddingTop: 25,
              paddingBottom: 25,
              paddingRight: 25,
              paddingLeft: 7,
              marginRight: 15,
              borderTopRightRadius: 40,
              borderBottomRightRadius: 40,
            }}
          >
            <Entypo name="menu" size={30} color="black" />
          </View>
          <View>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>
              Rent Anything: {"\n"}Find Yours
            </Text>
          </View>
        </View>

        <View style={{ marginVertical: 25, paddingLeft: 25 }}>
          <Text style={{ marginVertical: 10, fontWeight: "600" }}>
            Categories
          </Text>
          <FlatList
            // style={{ backgroundColor: "red" }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={(item) => {
              const index = item.index;
              item = item.item;

              return (
                <TouchableOpacity
                  onPress={() => {
                    setClickedIndex(index);
                  }}
                >
                  <View
                    style={[
                      stylesheet.categorie,
                      {
                        backgroundColor:
                          clicked_index == index ? "black" : "white",
                      },
                    ]}
                  >
                    {/* (backgroundColor =
                        clicked_index == index ? "black" : "white"), */}
                    <FontAwesome5
                      name={item.icon}
                      size={24}
                      color={clicked_index == index ? "white" : "black"}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        color: clicked_index == index ? "white" : "black",
                      }}
                    >
                      {item.name}
                    </Text>
                    {/* <Text>{index}</Text> */}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{ paddingLeft: 25 }}>
          <Text style={{ borderBottomWidth: 1, paddingBottom: 4 }}>
            New Offers
          </Text>

          <FlatList
            data={houses}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    marginBottom: 20,
                    backgroundColor: "white",
                    width: "95%",
                    borderRadius: 20,
                    ...stylesheet.shadow,
                  }}
                >
                  <Image
                    style={{ width: "100%", height: 330 }}
                    source={item.thumbnail}
                  />
                  <View style={{ padding: 10 }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "red",
                          fontSize: 18,
                        }}
                      >
                        {"FCFA"} {item.price}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        paddingVertical: 7,
                      }}
                    >
                      <Entypo name="location-pin" size={24} color="black" />
                      <Text>
                        {item.location} , {item.town}{" "}
                      </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <FontAwesome5 name="bed" size={20} color="black" />
                      <Text style={{ marginRight: 28, marginLeft: 5 }}>
                        {item.beds} Beds
                      </Text>
                      <FontAwesome5 name="bath" size={20} color="black" />
                      <Text style={{ marginRight: 28, marginLeft: 5 }}>
                        {item.bathrooms} Baths
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <StatusBar hidden />
      </View>
    </SafeAreaView>
  );
};

const stylesheet = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#eef0f2",
    marginTop: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#eef0f2",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  categorie: {
    alignItems: "center",
    width: 80,
    borderRadius: 10,
    padding: 10,
    marginRight: 25,
  },
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

export default HomeScreen;
