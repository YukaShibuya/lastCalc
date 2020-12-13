import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,Share,Alert,TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback, Keyboard } from "react-native"; 

export function Sta() {

const [value, setValue] = React.useState("");
const [con, setCon] = React.useState("");
const [req, setReq] = React.useState("");
const [result, setResult] = React.useState("");

const navigation = useNavigation();
const toBack = () => {
  navigation.goBack();
};

const calcResult = () => {
  if (value == null || con == null || req == null) {
    Alert.alert("値を入力してください｡");
  }

  const result = Number(con)*Number(req)/Number(value);
  setResult(String(result));
};

const strResult = result + "ml"

const share = async () => {
  try {
    const shareResult = await Share.share({
      message:strResult
    });
    if (shareResult.action === Share.sharedAction) {
      if (shareResult.activityType) {
        // shared with activity type of result.activityType
      } else {
      }
    } else if (shareResult.action === Share.dismissedAction) {
    }
  } catch (error) {
    alert(error.message);
  }
};

const allClear = () => {
  setValue("");
  setCon("");
  setReq("");
  setResult("");
};



  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.topText}>必要試薬の計算</Text>
        <KeyboardAwareScrollView>
          {/* 必要な値を入れる場所*/}
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Text style={{ fontSize: 25 }}>既知の溶液の濃度</Text>
            <TextInput
              style={styles.valueInput}
              keyboardType="numeric"
              onChangeText={(value) => setValue(value)}
              value={value}
            />
            <Text style={{ fontSize: 25 }}>M</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 25 }}>最終溶液の濃度</Text>
            <TextInput
              style={styles.valueInput}
              keyboardType="numeric"
              onChangeText={(con) => setCon(con)}
              value={con}
            />
            <Text style={{ fontSize: 25 }}>M</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 25 }}>最終溶液の液量</Text>
            <TextInput
              style={styles.valueInput}
              keyboardType="numeric"
              onChangeText={(req) => setReq(req)}
              value={req}
            />
            <Text style={{ fontSize: 25 }}>ml</Text>
          </View>
          {/* ボタンを押すと計算 */}
          <TouchableOpacity onPress={calcResult}>
            <Text
              style={{
                color: "#dda0dd",
                fontSize: 30,
                justifyContent: "center",
              }}
            >
              計算
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {/* 計算した値を表示 */}
            <Text>{result}</Text>
            <Text style={{ fontSize: 25 }}>ml</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={allClear}>
              <Text
                style={{
                  color: "#dda0dd",
                  justifyContent: "center",
                  fontSize: 30,
                  marginRight: 30,
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={share}>
              <Text
                style={{
                  color: "#dda0dd",
                  justifyContent: "center",
                  fontSize: 30,
                }}
              >
                Share
              </Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </KeyboardAwareScrollView>
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
  topText: {
    fontSize: 30,
    marginBottom: 20,
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
