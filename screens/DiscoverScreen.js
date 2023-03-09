import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const DiscoverScreen = () => {

  const navigation = useNavigation();

 { /** useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []); */}

  return (
    <SafeAreaView>
      <View>
        <Text>DiscoverScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default DiscoverScreen