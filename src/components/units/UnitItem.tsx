import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { themeColor, useTheme } from "react-native-rapi-ui";

export default ({ unit, onPress }: { unit: Unit; onPress: any }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.imageUnit}
        source={{
          uri: unit.imageUrl,
        }}
      />

      <View style={styles.flex6}>
        <Text style={styles.header}>{unit.name}</Text>
        <Text>{unit.description}</Text>
        <Text>{unit.numOfLesson} lesson</Text>
      </View>
      <Text style={styles.percentage}>{unit.percentage} %</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageUnit: {
    width: 50,
    height: 60,
    flex: 2,
    margin: 5,
  },
  flex6: { flex: 6 },
  header: { fontWeight: "bold", fontSize: 16 },
  percentage: { flex: 1, textAlign: "center" },
});
