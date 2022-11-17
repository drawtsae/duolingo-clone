import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text , ImageBackground } from 'react-native';
import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";
import Login from "../screens/auth/Login";
import Home from "../screens/Home";
import About from "../screens/About";
import Profile from "../screens/Profile";
import RankScreen from "../screens/Rank";
import ScreenRank from "../screens/ScreenRank";
// Test
import ReadingUnit1 from "../../Unitone/Reading/Screens/Tracnghiem";
import { MainTabsParamList } from "../types/navigation";
// Test
import ChuyendeScreen from "../screens/Chuyende";
import Cources from "../../Newfolder/screens/Cources";
import ScreenHome from "../../Home/Screen/ScreenHome";
const Tabs = createBottomTabNavigator<MainTabsParamList>();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <ImageBackground source={require('../screens/auth/Assets/Image/Background.jpg')}style={{flex:1}}>
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={ScreenHome}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ChuyendeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Rank"
        component={ScreenRank}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Rank" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Setting" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"ios-information-circle"} />
          ),
        }}
      />
    </Tabs.Navigator>
    </ImageBackground>
  );
};

export default MainTabs;
