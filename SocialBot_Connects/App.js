import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatGPT from './src';
import HomeScreen from './src/Home/Home';
import SummaryGenerator from './src/SummaryGenerator/SummaryGenerator';
import Hashtag from './src/HashTagGenerator/Hashtag';
import Startup from './src/startUp/Startup';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Startup' screenOptions={{headerShown:false}}>
    <Stack.Screen name="Startup" component={Startup} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ChatBot" component={ChatGPT} />
      <Stack.Screen name="SummaryGenerator" component={SummaryGenerator} />
      <Stack.Screen name="HashTagGenerator" component={Hashtag} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
