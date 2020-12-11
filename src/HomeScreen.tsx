import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FAB } from "react-native-paper";


export function Home() {

  const navigation = useNavigation();

  const toMol = () => {
  navigation.navigate("Mol"); 
  };
  const toSta = () =>{
    navigation.navigate("Sta");
  };



  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <FAB onPress={toMol} icon="chemistry" label="モル計算" />
      <FAB onPress={toSta} icon="medium-monogram" label="希釈計算" />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});