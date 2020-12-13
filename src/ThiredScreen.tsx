import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Share,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback, Keyboard } from "react-native"; 

export function Thired() {
  const [value, setValue] = React.useState("");
  const [standardDeviation, setStandardDeviation] = React.useState(0);
  const [array, setArray] = React.useState<number[]>([]);

  const navigation = useNavigation();
  const toBack = () => {
    navigation.goBack();
  };

  const append = () => {
    // console.log(typeof value)
    if (value != "") {
      const newValue: number = Number(value);
      setArray(array.concat(newValue));
      setValue("");
    } else {
      Alert.alert("値を入力してください｡");
    }
    
  };

  const standard = () => {
    if (array.length == 0) return
    const average =
      array.reduce(
        (previous, currentValue) => previous + currentValue // 要素をすべて足す
      ) / array.length; // 平均を求める
    const newStandardDeviation = Math.sqrt(
      // 分散の平方根を求める
      array
        .map((currentValue) => {
          let difference = currentValue - average; // 平均値との差を求める
          return difference ** 2; // 差を2乘する
        })
        .reduce(
          (previous, currentValue) => previous + currentValue // 差の2乗をすべて足す
        ) / array.length // 差の2乗の平均が分散
    );
    // setStandardに表示する
    setStandardDeviation(newStandardDeviation);
    console.log(newStandardDeviation); // 標準偏差
  };

  const Reset = () => {
    setArray([]);
    setStandardDeviation(0);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* <KeyboardAwareScrollView> */}
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.valueInput}
            keyboardType="numeric"
            onChangeText={(value) => setValue(value)}
            value={value}
          />
          <TouchableOpacity
            onPress={() => {
              append();
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              追加
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              standard();
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              標準偏差を計算
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
          }}
        >
          {standardDeviation}
        </Text>

        <Pressable onPress={Reset}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 20,
            }}
          >
            Reset
          </Text>
        </Pressable>
        <Text>{array}</Text>
        <StatusBar style="auto" />
        {/* </KeyboardAwareScrollView> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afeeee",
    alignItems: "center",
    justifyContent: "center",
  },
  valueInput: {
    backgroundColor: "#f5f5f5",
    borderWidth: 2,
    fontSize: 20,
    width: 100,
    padding: 3,
    marginRight: 5,
    marginBottom: 20,
  },
});
