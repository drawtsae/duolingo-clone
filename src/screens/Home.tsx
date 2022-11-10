import React, { useState } from "react";
import { View, Linking, TouchableWithoutFeedback } from "react-native";
import { MainTabsParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../initSupabase";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
  SectionImage,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({
  navigation,
}: NativeStackScreenProps<MainTabsParamList, "Home">) {
  const { isDarkmode, setTheme } = useTheme();
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
    console.log(count)
  };



  return (
    <Layout>
      <TopNav
        middleContent="Home"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          
          
        }}
      >
        <Section style={{ marginTop: 20,width: '90%' }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              English Learning App
            </Text>
          </SectionContent>
          <SectionImage source={require('../../assets/images/undraw_Learning_re_32qv.png')} />
        </Section>

        <View style={{ marginTop: 20,width: '90%' }} >
           <Text fontWeight="bold" >
              Categories
            </Text>
        </View>
        <View style={{display: 'flex', flexDirection:"row"}}>
           <TouchableWithoutFeedback onPress={() => navigation.navigate("Units")}>
            <Section style={{ marginTop: 20,marginRight: 10, minWidth:"40%" }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              List Units
            </Text>
          </SectionContent>
          <SectionImage source={require('../../assets/images/undraw_Learning_re_32qv.png')} />
            </Section>
           </TouchableWithoutFeedback>
          
         <TouchableWithoutFeedback onPress={onPress}>
          <Section style={{ marginTop: 20, minWidth:"40%", marginLeft: 10 }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Something else
            </Text>
          </SectionContent>
          <SectionImage source={require('../../assets/images/undraw_Learning_re_32qv.png')} />
        </Section>

         </TouchableWithoutFeedback>
        
        </View>
      </View>
      
      
    </Layout>
  );
}
