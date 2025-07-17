import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-xl font-bold">SplitPro Cross-Platform</Text>
      <Text className="text-gray-600 mt-2">Web • iOS • Android</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'SplitPro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
