import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Icon name="arrow-forward-outline" type="ionicon" size={20} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView 
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id="123"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          description="This is a description"
          rating={4.5}
          genre="Japanese"
          address="123 Fake Street"
          short_description="This is a short description"
          dishes={[]}
          long={0}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow