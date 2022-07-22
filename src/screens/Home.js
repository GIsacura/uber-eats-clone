import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' // This works for Android and iOS
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItem from '../components/RestaurantItem'

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <Categories />
      <RestaurantItem/>
    </SafeAreaView>
  )
}