import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from "react-native";
import { supabase } from "../../initSupabase";
import { AuthStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import  Icon  from "react-native-vector-icons/FontAwesome";
import Sys_modal from "./Sys_modal/Sys_modal";
export default function ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, "Login">) {
  const { isDarkmode, setTheme } = useTheme();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal,SetShowModal] = useState(false);
  const [ShowErrowMessage, SetShowErowMessage] = useState ('');
  
  async function login() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (!error && !data) {
      setLoading(false);
      SetShowErowMessage("Check your email for the login link!")
      SetShowModal(true)
    }
    if (error) {
      setLoading(false);
      SetShowErowMessage('Please input login information.')
      SetShowModal(true);
      return;
    }
  }
  //modal
  const onHideModal =() =>
    {
        SetShowModal(false);
    };
  return (
    //<KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
    <ImageBackground source={require('../auth/Assets/Image/Background.jpg')} style={{flex:1}}>
          <Sys_modal visiable={showModal} message={ShowErrowMessage} onHide={onHideModal}/>
          <View
            style={{
              flex: 1,
              padding:10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                marginTop:70,
                height: 220,
                width: 220,
              }}
              source={require("../auth/Assets/Image/Design.png")}
            />
          </View>
          <View
            style={{
              paddingTop:20,
              flex: 3,
              paddingHorizontal: 40,
              paddingBottom: 10,
            }}
          >
            <Text
              fontWeight="bold"
              style={{
                fontSize:40,
                alignSelf: "center",
                paddingTop:30,
                opacity:0.5,
              }}
              size="h3"
            >
              Welcome Back!
            </Text>
            <Text
              fontWeight="bold"
              style={{
                fontSize:20,
                alignSelf: "center",
                opacity:1,
              }}
              size="h3"
            >
              Login in to your account
            </Text>
            <Text style={{opacity:0.6, marginTop:10}}>Email or Usernam</Text>
            <TextInput
              containerStyle={{ marginTop: 15 ,borderRadius:200}}
              placeholder="Email or Username"
              value={email}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />

            <Text style={{ marginTop: 10 , opacity:0.6}}>Password</Text>
            <TextInput
              containerStyle={{ marginTop: 15,borderRadius:200}}
              placeholder="Enter your password"
              value={password}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <View style={{justifyContent:'center', width:'100%', alignItems:'center', padding:30}}>
            <TouchableOpacity style={{height:60, width:60, backgroundColor:'white', borderRadius:50, alignItems:'center', justifyContent:"center"}}
              onPress={()=> login()}
              disabled={loading}
              >
              {
                loading ? <Icon name="spinner" size={20}></Icon> : <Icon name="chevron-right" size={20}></Icon>
              }
            </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                justifyContent: "center",
              }}
            >
              <Text size="md">Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  Register here
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ForgetPassword");
                }}
              >
                <Text size="md" fontWeight="bold">
                  Forget password
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  isDarkmode ? setTheme("light") : setTheme("dark");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  {isDarkmode ? "☀️ light theme" : "🌑 dark theme"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>  
      </ImageBackground>
    //</KeyboardAvoidingView>
  );
}
