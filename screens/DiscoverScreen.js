import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Attraction, Avatar, Hotels, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';



const DiscoverScreen = () => {

  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative">
      <View className=" flex-row justify-between items-center px-8">
        <View className="">
          <Text className="text-[40px] font-bold text-[#0B646B]">Discover</Text>
          <Text className="text-[30px] font-semibol text-[#527283]">The beauty today</Text>
        </View>
        <View className="bg-slate-400 w-12 h-12 rounded-md items-center justify-center">
          <Image
            className="w-full h-full rounded-md "
            source={Avatar} />
        </View>
      </View>

      {/**Google Search Section */}
      <View className="flex-row items-center bg-slate-500 mx-4 rounded-xl py-4 shadow-lg">

      </View>
      {/**Menu COntainer */}

      <ScrollView>
        <View className=" flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"attraction"}
            title="Attraction"
            imageSrc={Attraction}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"hotels"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          


        </View>

        <View>
         
          <View className="flex-row flex-1 items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[28px] font-bold">Top Tips</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-1">
              <Text className="text-[#A0C4C7] text-[20px] font-bold">Explore </Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>
          
          <View className="flex-row px-4 mt-8  items-center justify-evenly flex-wrap">
            <ItemCardContainer key={"1"} 
            imageSrc ={"https://q-xx.bstatic.com/xdata/images/hotel/max500/329549130.jpg?k=3f501bb7efcce66606cb0de29bec500a4d7124dfeb975aaf44804d8b030f9077&o="}
             title="Residencial S.to Amaro" 
             location="Tarrafal" />
            <ItemCardContainer key={"2"} 
            imageSrc={"https://media-cdn.tripadvisor.com/media/photo-s/1a/9b/f9/2c/king-fisher-village-restaurant.jpg"} 
            title="King Fisher Village"
            location="Serra Malagueta, Tarrafal"/>
          </View>

        </View>
      </ScrollView>

    </SafeAreaView>
  )
}
export default DiscoverScreen