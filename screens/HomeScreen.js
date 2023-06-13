import { View, Text, StatusBar, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
// import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/solid'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <View>
      <View className="bg-white" style={{ paddingTop: StatusBar.currentHeight + 5 }}>
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image 
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <View className="flex-row gap-1 items-center">
              <Text className="font-bold text-xl">
                Current Location
              </Text>
              <Icon name="chevron-down-outline" type="ionicon" size={20} color="#00CCBB" />
            </View>
          </View>

          <Icon name="person-outline" type="ionicon" size={35} color="#00CCBB" />
        </View>

        <View className="flex-row items-center space-x-2 mx-4 mb-4">
          <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-3">
            <Icon name="search-outline" type="ionicon" size={20} color="gray" />
            <TextInput className="" placeholder="Restaurants and cuisines" keyboardType='default' />
          </View>
          <Icon name="settings-outline" type="ionicon" size={20} color="#00CCBB" />
        </View>
      </View>

      <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
        
        <Categories />

        <FeaturedRow id="123" title="Featured" description="Paid placements from our partners" />
        <FeaturedRow id="456" title="Tasty Discount" description="Everyone's been enjoying thes juicy discounts" />
        <FeaturedRow id="789" title="Offers near you!" description="Why not support your local restaurant tonight!" />

      </ScrollView>

    </View>
  )
}

export default HomeScreen