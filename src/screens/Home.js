import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' // This works for Android and iOS
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY = "3QzavjR-7UEJ5mOCJV7DjIx4rizA8EjuggXK8wCtlFzLLzkq5U6sKj0tKnf_S11B1n9bdlGT9nNwwTyoSU4sRlcPPkCBk2e-6APgGAqNSLQ-A_16DBq3Cj-2XLLcYnYx"

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)

  const getRestaurantsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      },
    }

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(data => setRestaurantData(data.businesses))
  }

  useEffect(() => {
    getRestaurantsFromYelp()
  },[])


  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
    </SafeAreaView>
  )
}