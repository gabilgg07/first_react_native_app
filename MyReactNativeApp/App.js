// import * as Device from "expo-device";

import { StatusBar } from "expo-status-bar";

import {
  Platform,
  Text,
  View,
  SafeAreaView,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

import { styles } from "./styles";

if (Platform.OS === "ios") {
  // do something for ios
} else if (Platform.OS === "android") {
  // other thing for android
} else if (Platform.OS === "web") {
  // it's on web!
} else {
  // you probably won't end up here unless you support another platform!
}

export default function App() {
  const handleSimpleBtn = () => console.log("Simple Pressed");
  const handleAlertBtn = () => {
    // web-de:
    if (Platform.OS === "web") {
      alert("Alert");
    } else {
      Alert.alert("Alert Button", "Are you over on 18?", [
        { text: "Evet", onPress: () => console.log("Yes, I am.") },
        { text: "Hayr", onPress: () => console.log("No, I am not.") },
      ]);
    }
    console.log("Alert clicked");
  };

  const handlePromptBtn = () => {
    if (Platform.OS === "ios") {
      Alert.prompt("Prompt Button", "Write anythings:", (text) => {
        console.log("Prompt working only on IOS");
        console.log(text);
      });
    } else if (Platform.OS === "web") {
      const text = prompt("Prompt Button", "Bura bir sey yazin ", "nese");
      console.log(text);
    }

    console.log("cliced Prompt btn");
  };

  const handlePressRemoteImg = () => console.log("Pressed Remote Image");
  const handlePressLocalImg = () => console.log("Pressed Local Image");
  const handlePressInSimpleBtn = (e) => {
    e.currentTarget.style.boxShadow = "0 0 50px 5px #000000dd";
  };
  const handlePressOutSimpleBtn = (e) => {
    e.currentTarget.style.boxShadow = "0 0 20px 3px #000000dd";
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>-- Hello, Guest! --</Text>

      <View style={styles.boxwrapper}>
        <View style={styles.boxBtns}>
          <Pressable
            onPress={handleSimpleBtn}
            onPressIn={handlePressInSimpleBtn}
            onPressOut={handlePressOutSimpleBtn}
            style={[styles.btn, styles.btnSuccess]}
          >
            <Text style={styles.btnTxtStyle}>Simple Btn</Text>
          </Pressable>
        </View>
        <View style={styles.boxBtns}>
          <Pressable
            onPress={handleAlertBtn}
            onPressIn={handlePressInSimpleBtn}
            onPressOut={handlePressOutSimpleBtn}
            style={[styles.btn, styles.btnPrimary]}
          >
            <Text style={styles.btnTxtStyle}>Alert Btn</Text>
          </Pressable>
        </View>
        <View style={styles.boxBtns}>
          <Pressable
            onPress={handlePromptBtn}
            onPressIn={handlePressInSimpleBtn}
            onPressOut={handlePressOutSimpleBtn}
            style={[styles.btn, styles.btnDanger]}
          >
            <Text style={styles.btnTxtStyle}>Prompt Btn</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.imgBoxs}>
        <TouchableWithoutFeedback onPress={handlePressRemoteImg}>
          <View style={[styles.imgBox, styles.imgBGC]}>
            <Image
              style={styles.img}
              source={{
                width: 200,
                // height: 320,
                uri: "https://picsum.photos/200/320",
              }}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.imgBox}>
          <TouchableWithoutFeedback onPress={handlePressLocalImg}>
            <Image
              style={styles.img}
              source={require("./assets/adaptive-icon.png")}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
