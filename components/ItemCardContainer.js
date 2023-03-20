import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const ItemCardContainer = ({imageSrc, title, location}) => {
  return (
    <TouchableOpacity>
      <Image 
       source={{uri: imageSrc}}
      />
    </TouchableOpacity>
  )
}

export default ItemCardContainer