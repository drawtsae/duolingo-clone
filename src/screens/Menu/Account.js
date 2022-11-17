import React, {useState, useContext, useEffect}from "react";
import { View ,TouchableOpacity } from "react-native";
import { Layout, Text, TextInput } from "react-native-rapi-ui";
import  Icon  from "react-native-vector-icons/FontAwesome5";
import Sys_modal from "../auth/Sys_modal/Sys_modal";
import { AuthContext} from '../../provider/AuthProvider';
import { supabase } from '../../../src/initSupabase';
import { useNavigation } from '@react-navigation/native';
//updateName
const UpdateTienDo = async (userId, value)=> {
    const { data, error } = await supabase
    .from('ScoreOfUser')
    .update({ Name: value })
    .eq('UserID', userId)
}
const getdata = async (userId)=> {
    let { data: ScoreOfUser, error } = await supabase
    .from('ScoreOfUser')
    .select('Name')
    .eq('UserID', userId).single()
    console.log(ScoreOfUser)
    return ScoreOfUser;
}
const Account = () => {
    const navigation = useNavigation();
  const [userData, setUserData] = useState({})
  const [showModal,SetShowModal] = useState(false);
  const [ShowErrowMessage, SetShowErowMessage] = useState ('Chuc nang dang bao tri!');
  const [value, setvalue] = useState('');
  const auth = useContext(AuthContext);
  //useEffect
  useEffect(() => {
    getdata(auth.session?.user.id)
    .then((data) => setUserData(data));
},);
//Update
async function update() {
        await UpdateTienDo(auth.session?.user.id, value);
}
  const Shows =()=>{
    SetShowModal(true);
  }
  const onHideModal= ()=>{
    SetShowModal(false)
  }

  return (
    <View
        style={{
          flex: 1,
        }}
      >
        <Sys_modal visiable={showModal} message={ShowErrowMessage} onHide={onHideModal}/>
        <View style={{marginTop:20, flexDirection:'row', justifyContent:'space-between', padding:10}}>
                        <TouchableOpacity style={{padding:5, backgroundColor:'#E6E7E9', width:45, borderRadius:10}} onPress={() => navigation.goBack()}>
                            <Icon name='backward' size={30}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate('Home')}>
                            <Icon name="home" size={40}></Icon>
                        </TouchableOpacity>
                    </View>
        <View style={{flex:1.5 , justifyContent:'center', alignItems:"center", flexDirection:'row'}}>
          <Icon name="user" size={60}></Icon>
          <View style={{width:'70%', justifyContent:'center', padding:17}}>
            <Text style={{fontSize:12}}>
                UserID : {auth.session?.user.id}
            </Text>
            <Text style={{fontSize:12}}>
                Created : {auth.session?.user.created_at}
            </Text>
            <Text>
                Email : {auth.session?.user.email}
            </Text>
            <Text>
                Name : {userData?.Name}
            </Text>
          </View>
        </View>
        <View style={{flex:3}}>
           <View style={{height:70, width:'60%', alignItems:"center", flexDirection:'row'}}>
                <Text style={{marginRight:10, marginLeft:30}}>
                    Name : 
                </Text>
                <TextInput 
                value={value}
                placeholder={userData?.Name}
                onChangeText={(text)=> setvalue(text)}
                >

                </TextInput>
           </View>
          
        </View>
        <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}> 
            <TouchableOpacity 
            onPress={()=>update()}
            style={{height:50, width:150, backgroundColor:'pink', justifyContent:'center', alignItems:'center', borderRadius:120}}>
                <Text> Update</Text>
            </TouchableOpacity>
        </View>
        
      </View>
  )
}

export default Account