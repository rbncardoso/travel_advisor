import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Animatable  from "react-native-animatable";


const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  const anime = "";
  const eas = "";
  const xTime = "";
  return (
    <TouchableOpacity className="items-center justify-center space-y-2 "
      onPress={handlePress}
    >
      <Animatable.View 
      className={`w-24 h-24 shadow-sm rounded-full
      ${type === title.toLowerCase() ? "border-t-2 border-l-2 border-r-2 border-[#00BCC9] border-25"  : ""}`}
       >
        <Image source={imageSrc}
          className="w-full h-full object-contain"
        />
      </Animatable.View>
      <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>

  )
}

export default MenuContainer