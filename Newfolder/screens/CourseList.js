import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
export default class CourseList extends React.Component{
    render(){
        const {img,title, bg, onPress,percent, lessons} = this.props
        return(
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection:"row",
                    backgroundColor:bg,
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:10
                }}
            >
                    <Image
                        source={img}
                        style={{width:40,height:40, borderRadius:10}}
                    />

                    <View>
                         <Text style={{
                             color:"#345c74",
                             
                             fontSize:13,
                             paddingHorizontal:20,
                             width:170
                         }}>{title}</Text>
                         <Text style={{
                             color:"#f58084",
                             
                             fontSize:12,
                             paddingHorizontal:20
                         }}>
                             {lessons}
                         </Text>
                    </View>
                    <Text style={{
                        color:"#345c74",
                       
                        fontSize:13,
                        paddingLeft:10,
                        paddingRight:10
                    }}>
                        {percent}
                    </Text>
                    <View style={{paddingLeft:30}}>
                    <Icon name="angle-right" size={20}></Icon>
                    </View>
            </TouchableOpacity>
        )
    }
}