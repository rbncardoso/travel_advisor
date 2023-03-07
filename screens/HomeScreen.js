import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage } from '../assets';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative">
      {/**First Section */}
      <View className="flex flex-row px-6 mt-2 items-center space-x-2  ">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold"> GO </Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>
        <Text className="text-[#3C6072] text-base">
          Greate times create great memorys to live with and remember when u old!
        </Text>
      </View>

      {/** Circle Section */}
      <View className="w-[330px] h-[330px] bg-[#00BCC9] rounded-full absolute bottom-36 left-40"></View>
      <View className="w-[330px] h-[330px] bg-[#E99265] rounded-full absolute -bottom-10 -left-40"></View>

      {/** Image Container */}

        <View className="flex-1 items-center justify-center relative">
          <Image source={HeroImage}
          className="w-full h-full"
          />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen