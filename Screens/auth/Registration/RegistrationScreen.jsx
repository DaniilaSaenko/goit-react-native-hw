import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard, 
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./RegistrationScreen.styles"
import { AuthBtn, LinkBtn } from "../../../components/common";

const initialState = {
  username: "",
  email: "",
  password: "",

};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [state, setState] = useState(initialState);
  const [focused, setFocused] = useState("");
  

  const handleKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log("Form data:", state);
    setState(initialState)
  };

  const [dimensions] = useState(Dimensions.get("window").width - 0 * 2);

  const handlePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };



  return (
    <TouchableWithoutFeedback  onPress={handleKeyboard}>
      <View style={styles.container}>
        <ImageBackground source={require("../../../assets/images/photoBG.png")} style={styles.image}>
          <KeyboardAvoidingView
            style={styles.wrapper}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? -100 : 0,
                width: dimensions,
              }}
            >
              <View style={styles.avatarContainer}>
                <View style={styles.containerAv}>
                  <Image source={null} style={styles.imageAv} />
                </View>
                <TouchableOpacity
                  style={styles.icon}
                >
                  <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
                </TouchableOpacity>
              </View>              
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Регистрация</Text>
              </View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: focused === "login" ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Логин"
                  placeholderTextColor="#BDBDBD"
                  textAlign={"left"}
                  value={state.username}
                  onFocus={() => {
                  setIsShowKeyboard(true)
                  setFocused("login")}
                }
                onBlur={() => {
                setFocused("");
                }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, username: value }))
                  }
                />
                <TextInput
                style={{
                  ...styles.input,
                  borderColor: focused === "email" ? "#FF6C00" : "#E8E8E8",
                }}
                  placeholder="Адрес электронной почты"
                  placeholderTextColor="#BDBDBD"
                  textAlign={"left"}
                  value={state.email}
                  onFocus={() => {
                  setIsShowKeyboard(true)
                  setFocused("email")}
                }
                  onBlur={() => {setFocused("")}}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
                <View style={styles.inputPasswordWrap}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: focused === "password" ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="Пароль"
                  value={state.password}
                  placeholderTextColor="#BDBDBD"
                  textAlign={"left"}
                  secureTextEntry={!passwordVisible}
                   onFocus={() => {
                  setIsShowKeyboard(true)
                  setFocused("password")}
                }
                  onBlur={() => {setFocused("")}}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  onPress={handlePasswordVisibility}
                  style={styles.passwordShow}
                >
                  <Text style={styles.showHidePasswordButtonText}>
                    {passwordVisible ? "Скрыть" : "Показать"}
                  </Text>
                </TouchableOpacity>
                </View>
                <AuthBtn text='Зарегистрироваться' style={{ marginTop: 27 }} onPress={handleKeyboard} />
                <LinkBtn text='Уже есть аккаунт? Войти' />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

