import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { SafeAreaView } from "react-native-safe-area-context";;


export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView>
        <View >
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}