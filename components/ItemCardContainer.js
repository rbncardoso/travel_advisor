import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const ItemCardContainer = ({imageSrc, title, location}) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2
    shadow-md bg-white w-[170px] my-2 ">
      <Image 
       source={{uri: imageSrc}}
       className="w-full h-40 rounded-md object-cover"
      />
      <Text className="text-[#428288] text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0,14)}` : title}</Text>
    </TouchableOpacity>
  )
}

export default ItemCardContainer