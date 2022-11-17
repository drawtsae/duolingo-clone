import { View, Text , ImageBackground , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const ScreenRank = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('./auth/Assets/Image/Background.jpg')} style={{flex:1}}>
        <View style={{flex:2.5 ,alignItems:'center', justifyContent:'center'}}>
            <Image source={require('./auth/Assets/Image/Design.png')} style={{height:'80%', width:'80%'}}></Image>
        </View>
        <View style={{flex:5, alignItems:'center'}}>
            <TouchableOpacity 
            onPress={()=> navigation.navigate('RankScreen')}
            style={{height:80, width:'85%', backgroundColor:"#C9ADEB", alignItems:'center',justifyContent:'center', marginVertical:20, borderWidth:1, borderRadius:25, flexDirection:'row', paddingHorizontal:10}}>
                <Image source={require('./auth/Assets/Image/ranking.png')} style={{height:35, width:35}}></Image>
                <Text style={{paddingHorizontal:'10%', fontSize:16}}>BXH Rank Of Unit 1</Text>
                <Icon name='chevron-right' size={30}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{height:80, width:'85%', backgroundColor:"#C9ADEB",alignItems:'center',justifyContent:'center', borderWidth:1, borderRadius:25, flexDirection:'row', paddingHorizontal:10}}>
                <Image source={require('./auth/Assets/Image/ranking.png')} style={{height:35, width:35}}></Image>
                <Text style={{paddingHorizontal:'10%', fontSize:16}}>BXH Rank Of Unit 1</Text>
                <Icon name='chevron-right' size={30}></Icon>
            </TouchableOpacity>
            <View style={{width:'100%', height:'60%', alignItems:'center'}}>
            <Image source={require('./auth/Assets/Image/a.png')} style={{height:'80%', width:'100%'}}></Image>
            </View>
        </View>
    </ImageBackground>
  )
}
export default ScreenRank