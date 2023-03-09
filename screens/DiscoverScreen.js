import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from '../assets';

const DiscoverScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []); 

  return (
    <SafeAreaView>
      <View className="flex  flex-1 flex-row justify-between items-center px-8">
        <View className="">
          <Text className="text-[40px] font-bold text-[#0B646B]">Discover</Text>
          <Text className="text-[30px] font-semibol text-[#527283]">The beauty today</Text>
        </View>
        <View className="bg-slate-400 w-14 h-14">
          <Image
           className="w-full h-full rounded-md"
           source={Avatar} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DiscoverScreen