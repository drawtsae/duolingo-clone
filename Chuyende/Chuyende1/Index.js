import { View, Text , ImageBackground , Image, TouchableOpacity} from 'react-native'
import React ,{useState} from 'react'
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Sys_modal from './Sys_modal';
const ScreenMainChuyende1 = () => {
  const navigation = useNavigation();
  const [showModal,SetShowModal] = useState(false);
  const [ShowErrowMessage, SetShowErowMessage] = useState ('Gồm 40 câu trắc nghiệm. v.vv');
  const showmodal = () =>{
    SetShowModal(true);
  }
  const onHideModal =() =>{
    SetShowModal(false);
  }
  const onHideModal1 =()=>{
    navigation.navigate('Tracnghiemchuyende1')
    SetShowModal(false)
  }
  //<Sys_modal visiable={showModal} message={ShowErrowMessage} onHide={onHideModal}/>
  //navigation.navigate('Tracnghiemchuyende1')
  return (
    <ImageBackground source={require('../Assets/Background.jpg')} style={{flex:1}}>
        <Sys_modal visiable={showModal} message={ShowErrowMessage} onHide={onHideModal} navigation={onHideModal1}/>
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
        <View style={{flex:2.5 ,alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../Assets/Design.png')} style={{height:'80%', width:'80%'}}></Image>
        </View>
        <View style={{flex:5, alignItems:'center'}}>
            <TouchableOpacity 
            onPress={()=> navigation.navigate('ScreenChuyende1')}
            style={{height:80, width:'85%', backgroundColor:"#C9ADEB", alignItems:'center',justifyContent:'center', marginVertical:20, borderWidth:1, borderRadius:25, flexDirection:'row', paddingHorizontal:10}}>
                <Icon name='book' size={35}></Icon>
                <Text style={{paddingHorizontal:'23%', fontSize:16}}>Theory</Text>
                <Icon name='chevron-right' size={30}></Icon>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=> showmodal()}
            style={{height:80, width:'85%', backgroundColor:"#C9ADEB",alignItems:'center',justifyContent:'center', borderWidth:1, borderRadius:25, flexDirection:'row', paddingHorizontal:10}}>
                <Icon name='book' size={35}></Icon>
                <Text style={{paddingHorizontal:'27%', fontSize:16}}>Examination</Text>
                <Icon name='chevron-right' size={30}></Icon>
            </TouchableOpacity>
            <View style={{width:'100%', height:'60%', alignItems:'center'}}>
            <Image source={require('../Assets/a.png')} style={{height:'80%', width:'100%'}}></Image>
            </View>
        </View>
    </ImageBackground>
  )
}
export default ScreenMainChuyende1