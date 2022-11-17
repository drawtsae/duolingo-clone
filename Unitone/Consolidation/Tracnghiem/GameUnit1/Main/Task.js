import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Task = () => {
  return (
    <View style={{width:'100%',height:'14%',paddingHorizontal:'5%',marginVertical:'4%',alignItems:'center', flexDirection:'row',justifyContent:'space-between'}}>
      <View style={Styles.container}>
        <Text>10</Text>
      </View>
      <View style={Styles.container}>
        <Text>10</Text>
      </View>
      <View style={Styles.container}>
        <Text>10</Text>
      </View>
    </View>
  )
}

export default Task;

const Styles = StyleSheet.create({
    container: {
      height:'100%',
      width:'27%',
      borderRadius:10,
      borderWidth:1,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center',
    },
  });