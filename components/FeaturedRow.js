import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from '@rneui/themed'
import RestaurantCard from './RestaurantCard'
import { client } from '../sanity';

const FeaturedRow = ({ id, title, description }) => {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    client.fetch(`
      *[_type == "featured"] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] ->,
          type -> {
            name
          }
        }
      }`
    ).then(data => {
      setRestaurants(data[0].restaurants)
    })
  }, [])

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
        {restaurants?.map(restaurant => {
          return (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            short_description={restaurant.short_description}
            genre={restaurant.type?.name}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        )})}

      </ScrollView>
    </View>
  )
}

export default FeaturedRow