import { TouchableOpacity, Image, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'

const RestaurantCard = ({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image 
        className="w-36 h-36 rounded-xl"
        source={{
          uri: imgUrl
        }} 
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Icon name="star" type="ionicon" size={22} color="green" />
          <Text className="text-green-700 text-xs">{rating}</Text>
          <Text className="text-gray-500 text-xs">| {genre}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Icon name="location-outline" type="ionicon" size={22} color="gray" />
          <Text className="text text-gray-500">Nearby | {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard