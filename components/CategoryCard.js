import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="realtive mr-2">
      <Image source={{ uri: urlFor(imgUrl).url() }} className="w-20 h-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold bg-gray-400/50 rounded shadow-md p-[1px]">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard