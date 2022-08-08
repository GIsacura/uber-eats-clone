import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons";

export default function SearchBar({ cityHandler }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      {/* <GooglePlacesAutocomplete
        query={{ key: "" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandler(city.split("").join(""));
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            onPress={() => {
              cityHandler();
            }}
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "#fff",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{
                marginRight: 6,
              }}
            />
            <Text>Search</Text>
          </View>
        )}
      /> */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
          paddingVertical: 10,
        }}
      >
        <View style={{ marginLeft: 10, marginRight: 5 }}>
          <Ionicons name="location-sharp" size={24} />
        </View>
        <TextInput
          value={inputValue}
          onChangeText={(city) => {
            setInputValue(city);
            console.log(inputValue);
          }}
          placeholder="Search"
          style={{
            width: "65%",
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (!inputValue) {
              cityHandler("Chicago");
            } else {
              cityHandler(inputValue);
            }
            console.log(inputValue);
          }}
          style={{
            flexDirection: "row",
            marginRight: 8,
            backgroundColor: "#fff",
            padding: 9,
            borderRadius: 30,
            alignItems: "center",
          }}
        >
          <AntDesign
            name="clockcircle"
            size={11}
            style={{
              marginRight: 6,
            }}
          />
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
