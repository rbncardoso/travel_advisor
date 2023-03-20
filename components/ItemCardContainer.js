import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const ItemCardContainer = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 shadow-md bg-white
    w-[182px] my-2 space-y-2 px-3 py-2">

      <Image source={{uri: imageSrc}}
      className="w-full h-40 rounded-md object-cover"
      />
      <Text className="text-[#428288] text-[18px] font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default ItemCardContainer