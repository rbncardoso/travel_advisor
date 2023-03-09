import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { SafeAreaView } from "react-native-safe-area-context";;
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
 

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Discover' component={DiscoverScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}