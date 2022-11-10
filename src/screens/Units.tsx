import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, View } from "react-native";
import {
  Layout,
  Section,
  SectionContent,
  Text,
  TopNav,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { MainTabsParamList } from "../types/navigation";
import { Unitdata } from "../data/listUnitData";
import UnitItem from "../components/units/UnitItem";

export default function ({
  navigation,
}: NativeStackScreenProps<MainTabsParamList, "Units">) {
  return (
    <Layout>
      <TopNav
        leftContent={
          <Ionicons name="chevron-back" size={20} color={themeColor.black} />
        }
        leftAction={() => navigation.goBack()}
        backgroundColor={"#ffffff00"}
        borderColor={"#ffffff00"}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View style={{ height: 100, width: "90%", marginTop: 10 }}>
          <Section>
            <SectionContent>
              <Text style={{ textAlign: "center" }}>UNITS</Text>
            </SectionContent>
          </Section>
        </View>
        <View style={{ width: "100%" }}>
          <FlatList
            data={Unitdata}
            renderItem={(data) => (
              <UnitItem
                unit={data.item}
                onPress={() => console.log("press in unit ", data.item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </Layout>
  );
}
