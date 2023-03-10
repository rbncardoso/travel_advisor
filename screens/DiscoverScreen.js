import { View, Text, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Attraction, Avatar, Hotels, Restaurants } from '../assets';
import MenuContainer from '../components/MenuContainer';

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
          <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />


        </View>
      </ScrollView>

    </SafeAreaView>
  )
}
export default DiscoverScreen