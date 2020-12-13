import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";




import {Home} from "./src/HomeScreen";
import { Mol} from "./src/MolScreen";
import{Sta} from "./src/StaScreen";
import{Thired} from "./src/ThiredScreen";
const Stack = createStackNavigator();


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Mol" component={Mol} />
          <Stack.Screen name="Sta" component={Sta} />
          <Stack.Screen name="Thired" component={Thired} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
