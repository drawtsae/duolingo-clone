import { View, Text , ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import  Icon  from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';
const ScreenHome = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground source={require('../Assets/Image/Background.jpg')} style={{flex:1}}>
        <View style={{flex:2, justifyContent:'flex-end',alignItems:'center', opacity:0.8}}>
            <View style={{width:'100%', justifyContent:'flex-end', marginTopRight:20,marginRight:20, flexDirection:'row', alignItems:"center"}}>
                <Image source={require('../Assets/Image/star.png')} style={{height:30, width:30}}></Image>
                <View style={{height:50,width:50, backgroundColor:'red', justifyContent:'center',alignItems:'center', borderRadius:20,marginLeft:10}}>
                    <Text>diem</Text>
                </View>
            </View>
            <Text style={{paddingBottom:20, fontSize:40, opacity:0.7}}>Home</Text>
        </View>
        <View style={{flex:2.5, alignItems:'center', justifyContent:'center'}}>
            <View style={{height:'80%', width:'85%', borderRadius:30, shadowColor:'black', shadowOffset:{width:3,height:10}, shadowOpacity:0.7, shadowRadius:6, elevation:5, flexDirection:'row'}}>
            <Image source={require('../Assets/Image/BtHi.png')} style={{height:'90%', width:'40%', borderRadius:40}}></Image>
                <Image source={require('../Assets/Image/Hi.png')} style={{height:'100%', width:'60%', borderRadius:40}}></Image>
            </View>
        </View>
        <View style={{flex:3}}>
            <View style={{flex:1}}>
            </View>
            <View style={{flex:2, justifyContent:'center', flexDirection:'row'}}>
                <View style={{height:'90%', width:'20%', margin:7,borderWidth:1, borderRadius:20, alignItems:'center', backgroundColor:"#FDFFD9"}}>
                    <Image source={require('../Assets/Image/teacher.png')} style={{height:'32%', width:'70%', marginTop:5}}/>
                    <Text style={{marginTop:'20%', fontSize:15, fontWeight:'bold'}}>
                        Unit
                    </Text>
                    <Text style={{marginTop:'50%'}}>
                        16 Lesson
                    </Text>
                </View>
                <View style={{height:'90%', width:'20%', margin:7,borderWidth:1, borderRadius:20, alignItems:'center', backgroundColor:"#FDFFD9"}}>
                    <Image source={require('../Assets/Image/d.png')} style={{height:'32%', width:'70%', marginTop:5}}/>
                    <Text style={{marginTop:'20%', fontSize:15}}>
                        Vocabulary
                    </Text>
                    <Text style={{marginTop:'50%'}}>
                        50 Lesson
                    </Text>
                </View>
                <View style={{height:'90%', width:'20%', margin:7,borderWidth:1, borderRadius:20, alignItems:'center', backgroundColor:"#FDFFD9"}}>
                    <Image source={require('../Assets/Image/learning.png')} style={{height:'32%', width:'70%', marginTop:5}}/>
                    <Text style={{marginTop:'20%', fontSize:13}}>
                        Pronuciation
                    </Text>
                    <Text style={{marginTop:'50%'}}>
                        50 Lesson
                    </Text>
                </View>
                <View style={{height:'90%', width:'20%', margin:7,borderWidth:1, borderRadius:20, alignItems:'center', backgroundColor:"#FDFFD9"}}>
                    <Image source={require('../Assets/Image/teacher.png')} style={{height:'32%', width:'70%', marginTop:5}}/>
                    <Text style={{marginTop:'20%', fontSize:15}}>
                        Reading
                    </Text>
                    <Text style={{marginTop:'50%'}}>
                         40 Lesson
                    </Text>
                </View>
            </View>
        </View>
        <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Cources')}
            style={{height:80,width:80, backgroundColor:'pink'+'60', borderRadius:30, justifyContent:'center', alignItems:'center'}
            }>
            <Icon name="chevron-right" size={30}></Icon>
            </TouchableOpacity>
        </View>

    </ImageBackground>
  )
}

export default ScreenHome