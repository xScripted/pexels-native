import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import pexelsLogo from './assets/pexels.jpg';
import { useState } from 'react';

import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen"
          options={{
            headerLeft: () => <Image style={styles.logo} source={pexelsLogo} />,
            headerRight: () => {
              return <Text 
                style={{color: 'white', fontSize: 18}}
                onPress={() => setOpenSearch(!openSearch)}
              > {openSearch ? 'Close' : 'Search'} </Text>
            },
            title: 'Pexels App',
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: '#0D0D0D',
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {(props) => <HomeScreen {...props} openSearch={openSearch} />}
        </Stack.Screen>
        <Stack.Screen 
          name="ImageScreen" 
          component={ImageScreen}
          options={{
            title: 'Pexels App',
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },  
            headerStyle: {
              backgroundColor: '#0D0D0D',
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5,
  },
})

