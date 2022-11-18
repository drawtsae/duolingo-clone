import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "../screens/SecondScreen";
import MainTabs from "./MainTabs";
// Seting
import Account from "../screens/Menu/Account";
// Rank
import ScreenRank from "../screens/ScreenRank";
import RankScreen from "../screens/Rank";
import RankScreenmajor1 from "../screens/Rankmajor";
//Chuyende
import ScreenMainChuyende1 from "../../Chuyende/Chuyende1/Index";
import ScreenChuyende1 from "../../Chuyende/Chuyende1/Chuyende1";
import Tracnghiemchuyende1 from "../../Chuyende/Chuyende1/Tracnghiem";
// List Unit
import ScreenMainUnit1 from "../../Newfolder/screens/Unit1"; // Unit 1
import { MainStackParamList } from "../types/navigation";
import Cources from "../../Newfolder/screens/Cources";
//Unit1
import ScreenFistVocabularyUnit1 from "../../Unitone/Tracnghiemmm/ScreenNewVocabulary/Index"; //Vocabulary
import TracnghiemFirstVocabularyUnit1 from "../../Unitone/Tracnghiemmm/Screens/Vocabularyone"; //TN 1
import TracnghiemSecondVocabularyUnit1 from "../../Unitone/Tracnghiemmm/Screens/Tracnghiem"; //TN 2
import FirstScreenPronuciationUnit1 from "../../Unitone/Tracnghiem2/TracnghiemDuolingo/ScreenNewVocabulary/Index copy"; //Pronuciation
import TracnghiemFirstPronuciationUnit1 from "../../Unitone/Tracnghiem2/TracnghiemDuolingo/Screens/Tracnghiem"; // TN1
import TracnghiemSecondPronuciationUnit1 from "../../Unitone/Tracnghiem2/TracnghiemDuolingo/Screens/Tracnghiem2"; // TN2
import TracnghiemThirtPronuciationUnit1 from "../../Unitone/Tracnghiem2/TracnghiemDuolingo/Screens/Tracnghiem3"; // TN3
import ReadingUnit1 from "../../Unitone/Reading/Screens/Tracnghiem";// Reading
import TracnghiemDucloUnit1 from "../../Unitone/Reading/Screens/Tracnghiem1"; // Reading
import ConsolidationUnit1 from "../../Unitone/Consolidation/Tracnghiem/Screens/Tracnghiem"; //Consolidation
import GameUnit1Memory from "../../Unitone/Consolidation/Tracnghiem/GameUnit1/Screens/Index";
import Login from "../screens/auth/Login";

//
const MainStack = createNativeStackNavigator<MainStackParamList>();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="ScreenMainChuyende1" component={ScreenMainChuyende1} />
      <MainStack.Screen name="ScreenChuyende1" component={ScreenChuyende1} />
      <MainStack.Screen name="Tracnghiemchuyende1" component={Tracnghiemchuyende1} />
      <MainStack.Screen name="Cources" component={Cources} />
      <MainStack.Screen name="Account" component={Account} />
      <MainStack.Screen name="RankScreen" component={RankScreen} />
      <MainStack.Screen name="ScreenMainUnit1" component={ScreenMainUnit1} />
      <MainStack.Screen name="RankScreenmajor1" component={RankScreenmajor1} />
      <MainStack.Screen name="ScreenFistVocabularyUnit1" component={ScreenFistVocabularyUnit1} />
      <MainStack.Screen name="TracnghiemFirstVocabularyUnit1" component={TracnghiemFirstVocabularyUnit1} />
      <MainStack.Screen name="TracnghiemSecondVocabularyUnit1" component={TracnghiemSecondVocabularyUnit1} />
      <MainStack.Screen name="FirstScreenPronuciationUnit1" component={FirstScreenPronuciationUnit1} />
      <MainStack.Screen name="TracnghiemFirstPronuciationUnit1" component={TracnghiemFirstPronuciationUnit1} />
      <MainStack.Screen name="TracnghiemSecondPronuciationUnit1" component={TracnghiemSecondPronuciationUnit1} />
      <MainStack.Screen name="TracnghiemThirtPronuciationUnit1" component={TracnghiemThirtPronuciationUnit1} />
      <MainStack.Screen name="ReadingUnit1" component={ReadingUnit1} />
      <MainStack.Screen name="TracnghiemDucloUnit1" component={TracnghiemDucloUnit1} />
      <MainStack.Screen name="ConsolidationUnit1" component={ConsolidationUnit1} />
      <MainStack.Screen name="GameUnit1Memory" component={GameUnit1Memory} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

export default Main;
