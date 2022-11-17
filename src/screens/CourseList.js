import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
export default class ListS extends React.Component{
    render(){
        const {img,title, bg, onPress,score, rank} = this.props
        return(
            <TouchableOpacity
                onPress={onPress}
                style={{
                    width:'90%',
                    height:100,
                    flexDirection:"row",
                    backgroundColor:bg,
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    justifyContent:'space-between',
                    alignItems:"center",
                    marginTop:10,
                    borderBottomWidth:1,
                    paddingHorizontal:20,
                }}
            >
                <View style={{backgroundColor:bg,width:'20%'}}>
                    <Text>{rank}</Text>
                </View>
                <View style={{backgroundColor:bg,width:'20%',}}>
                    <Image source={img} style={{height:60, width:"100%"}}></Image>
                </View>
                <View style={{backgroundColor:bg,width:'40%', alignItems:'center'}}>
                    <Text>{title}</Text>
                </View>
                <View style={{backgroundColor:bg,width:'10%'}}>
                    <Text>{score}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}