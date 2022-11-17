import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const ScreenChuyende1 = () => {
    const navigation = useNavigation();
  return (
    
      <View style={{flex:1}}>
            <View style = {{height:'15%', width:'100%'}}>
                <View style={{padding:20, marginTop:10}}>
                    <View style={{marginTop:5, flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity style={{padding:5, backgroundColor:'#E6E7E9', width:45, borderRadius:10}} onPress={() => navigation.goBack()}>
                            <Icon name='backward' size={30}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate("Home")}>
                            <Icon name="home" size={40}></Icon>
                        </TouchableOpacity>
                    </View>
                    </View>
            </View>
            <View style = {{height:'8%', width:'100%' , backgroundColor:'white', alignItems:'center', justifyContent:'flex-start',padding:10}}>
                <Text style={{fontSize:20, fontWeight:'700'}}>setIsOptionsDisabled</Text>
            </View>
            <ScrollView>
            </ScrollView>
        </View>
      
  )
}
export default ScreenChuyende1