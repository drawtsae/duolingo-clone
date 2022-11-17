import { View, Text, TouchableOpacity, ImageBackground , ScrollView } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const TuvungUnit1 =() => {
    const navigation = useNavigation();
    const Vocabulary = ()=>
    {
        return(
            <View style={{padding:10}}>
            <Text style={{padding:5, fontSize:15}}>- To join hands = work together : Cùng nhau, chung sức, cùng làm việc</Text>
            <Text style={{padding:5, fontSize:15}}>- Responsibility (n) sự trách nhiệm</Text>
            <Text style={{padding:5, fontSize:15}}>- Responsible for (adj) có trách nghiệm</Text>
            <Text style={{padding:5, fontSize:15}}>- Take the responsibility for +V_ing : nhận trách nhiệm</Text>
            <Text style={{padding:5, fontSize:15}}>- be in a hurry : vội vã</Text>
            <Text style={{padding:5, fontSize:15}}>- Night shift : ca đêm </Text>
            <Text style={{padding:5, fontSize:15}}>- Shift : ca, kíp</Text>
            <Text style={{padding:5, fontSize:15}}>- close-knit (a) quan hệ khăng khít</Text>
            <Text style={{padding:5, fontSize:15}}>- attempt (v) cố gắng để làm gì</Text>
            <Text style={{padding:5, fontSize:15}}>- Mischief (n) sự nghịch ngợm</Text>
            <Text style={{padding:5, fontSize:15}}>- Pressure (n) sức ép, áp lực</Text>
            <Text style={{padding:5, fontSize:15}}>- Under pressure : dưới sức ép, áp lực</Text>
            <Text style={{padding:5, fontSize:15}}>{' - Obedient (adj) >< Disobedient (adj) : Vâng lời >< không vâng lời '}</Text>
            </View>
        )
    }

        return(
    <ImageBackground source={require('../Assets/Images/19366.jpg')}
    style={{height:'100%',width:'100%'}}>
    <View style={{ padding:20}}>
                    <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity style={{padding:5, backgroundColor:'#E6E7E9', width:45, borderRadius:10}} onPress={() => navigation.goBack()}>
                            <Icon name='backward' size={30}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate('Root')}>
                            <Icon name="home" size={40}></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:'10%', justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize:30, fontWeight:'600'}}>
                            Vocabulary
                        </Text>
                    </View>
    </View>
    <ScrollView style={{flex:1}}>
            <Vocabulary></Vocabulary>
    </ScrollView>
        <View style={{
               
            height:'15%',      
            alignItems:'center',
            justifyContent:'center',

        }}>
            <TouchableOpacity 
            onPress={()=> navigation.navigate("Vocabulary")}
            style={{
            backgroundColor:'pink',
            height:'60%',
            width:'70%',
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text> Ready! Let's go</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}
export default TuvungUnit1