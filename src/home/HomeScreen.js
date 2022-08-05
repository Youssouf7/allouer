import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { FlatList, TouchableOpacity } from "react-native";

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

        <View>
          <Text>New Offers</Text>
        </View>
        <Text>HomeScreen</Text>
        <StatusBar hidden />
      </View>
    </SafeAreaView>
  );
};

const stylesheet = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#eef0f2",
    marginTop: 60,
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
});

export default HomeScreen;
