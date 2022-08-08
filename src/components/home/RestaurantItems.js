import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url: "https://economictimes.indiatimes.com/industry/services/hotels-/-restaurants/delhis-restaurants-pubs-bars-in-commercial-establishments-down-shutters-temporarily/articleshow/88859068.cms",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
]

export default function RestaurantItems({restaurantData}) {
  return (
    <TouchableOpacity activeOpacity={1} style={{
      marginBottom: 30
    }}>
      {restaurantData.map((restaurant, index) => (
        <View key={index} style={{
          marginTop: 10,
          padding: 15,
          backgroundColor: "#fff"
        }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
        </View>
      ))}
    </TouchableOpacity>
  )
}

const RestaurantImage = ({image}) => {
  return (
    <>
      <Image
      source={{uri: image}}
      style={{
        width: "100%",
        height: 180
      }}
      />
      <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color="#fff"/>
      </TouchableOpacity>
    </>
  )
}

const RestaurantInfo = ({name, rating}) => {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10
    }}>
      <View>
        <Text style={{
          fontSize: 15,
          fontWeight: "bold"
        }}>{name}</Text>
        <Text style={{
          fontSize: 13,
          color: "gray"
        }}>30-45 min</Text>
      </View>
      <View style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
      }}>
        <Text>{rating}</Text>
      </View>
    </View>
  )
}