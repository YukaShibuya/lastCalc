import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";



export function Home() {
  const navigation = useNavigation();

  const toMol = () => {
    navigation.navigate("Mol");
  };
  const toSta = () => {
    navigation.navigate("Sta");
  };
  const toThired = () => {
    navigation.navigate("Thired");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CheatCalc</Text>
      <Button
        style={styles.Button}
        icon="alpha-m-box-outline"
        mode="contained"
        onPress={toMol}
      >
        <Text style={styles.buttonLabel}>モル計算</Text>
      </Button>
      <Button
        style={styles.Button}
        icon="alpha-d-box-outline"
        mode="contained"
        onPress={toSta}
      >
        <Text style={styles.buttonLabel}>希釈計算</Text>
      </Button>
      <Button
        style={styles.Button}
        icon="alpha-s-box-outline"
        mode="contained"
        onPress={toThired}
      >
        <Text style={styles.buttonLabel}>標準偏差</Text>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afeeee",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 40,
    marginBottom:70,
  },

  buttonLabel:{
    fontSize:15,
  },

  Button: {
    justifyContent: "space-around",
    backgroundColor: "#c0c0ff",
    marginBottom:30,
    // borderWidth: 20,
    // borderRadius: 20,
  },
});
