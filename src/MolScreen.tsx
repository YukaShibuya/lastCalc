import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput} from 'react-native';

export function Mol() {


  const [value, setValue] = React.useState("");
  const [con, setCon] = React.useState("");
  const [req, setReq] = React.useState("");
  const [result, setResult] = React.useState("");

  const navigation = useNavigation();
  const toBack = () => {
    navigation.goBack();
  }


const calcResult = () => {
  const result = Number(value) * Number(con) * Number(req)
  setResult(String(result))

}

const allClear = () => {
  setValue("");
  setCon("");
  setReq("");
  setResult("");
}
  


return (
  <View style={styles.container}>
    <Text>必要試薬の計算</Text>

    {/* 必要な値を入れる場所*/}
    <View style={{ justifyContent: "center", flexDirection: "row" }}>
      <Text>分子量/式量</Text>
      <TextInput
        style={styles.valueInput}
        keyboardType="numeric"
        onChangeText={(value) => setValue(value)}
        value={value}
      />
      <Text>g/mol</Text>
    </View>

    <View style={{ flexDirection: "row" }}>
      <Text>濃度</Text>
      <TextInput
        style={styles.valueInput}
        keyboardType="numeric"
        onChangeText={(con) => setCon(con)}
        value={con}
      />
      <Text>mM</Text>
    </View>

    <View style={{ flexDirection: "row" }}>
      <Text>必要液量</Text>
      <TextInput
        style={styles.valueInput}
        keyboardType="numeric"
        onChangeText={(req) => setReq(req)}
        value={req}
      />
      <Text>ml</Text>
    </View>

    {/* ボタンを押すと計算 */}
    <Button title="計算" onPress={calcResult} />

    <View style={{ flexDirection: "row" }}>
      {/* 計算した値を表示 */}
      <Text>{result}</Text>
      <Text>mg</Text>
    </View>
    {/* AllClearButton */}
    <Button title="Reset" onPress={allClear} />

    {/* <Button onPress={toBack} title="戻る" /> */}
    <StatusBar style="auto" />
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  valueInput: {
    backgroundColor: "#fff",
    borderWidth: 2,
    fontSize: 20,
    width: 100,
    padding: 3,
    marginRight: 5,
  },
});
