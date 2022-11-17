import React, {useState, useContext, useEffect}from "react";
import { View ,TouchableOpacity } from "react-native";
import { MainTabsParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text } from "react-native-rapi-ui";
import  Icon  from "react-native-vector-icons/FontAwesome5";
import Sys_modal from "./auth/Sys_modal/Sys_modal";
import { AuthContext} from '../provider/AuthProvider';
import Account from "./Menu/Account";

export default function ({
  navigation,
}: NativeStackScreenProps<MainTabsParamList, "About">) {
  const [showModal,SetShowModal] = useState(false);
  const [ShowErrowMessage, SetShowErowMessage] = useState ('Chuc nang dang bao tri!');
  const auth = useContext(AuthContext);
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
          </View>
        </View>
        <View style={{flex:3, alignItems:'center'}}>
          <TouchableOpacity 
          onPress={()=> navigation.navigate('Account')}
          style={{marginTop:20,height:60, width:'80%', borderBottomWidth:1,borderStyle:'solid', justifyContent:'space-between', padding:10, flexDirection:'row'}}>
              <View style={{flexDirection:'row'}}>
                <Icon name="user" size={20} color="black"></Icon>
                <Text style={{paddingLeft:15}}>
                  Account
                </Text>
              </View>
              <Icon name="angle-right" size={20}></Icon>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={Shows}
          style={{marginTop:20,height:60, width:'80%', borderBottomWidth:1,borderStyle:'solid', justifyContent:'space-between', padding:10, flexDirection:'row'}}>
              <View style={{flexDirection:'row'}}>
                <Icon name="bell" size={20} color="black"></Icon>
                <Text style={{paddingLeft:15}}>
                  Notifications
                </Text>
              </View>
              <Icon name="angle-right" size={20}></Icon>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={Shows}
          style={{marginTop:20,height:60, width:'80%', borderBottomWidth:1,borderStyle:'solid', justifyContent:'space-between', padding:10, flexDirection:'row'}}>
              <View style={{flexDirection:'row'}}>
                <Icon name="eye" size={20} color="black"></Icon>
                <Text style={{paddingLeft:15}}>
                  Appearance
                </Text>
              </View>
              <Icon name="angle-right" size={20}></Icon>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={Shows}
          style={{marginTop:20,height:60, width:'80%', borderBottomWidth:1,borderStyle:'solid', justifyContent:'space-between', padding:10, flexDirection:'row'}}>
              <View style={{flexDirection:'row'}}>
                <Icon name="lock" size={20} color="black"></Icon>
                <Text style={{paddingLeft:15}}>
                  Privacy & Security
                </Text>
              </View>
              <Icon name="angle-right" size={20}></Icon>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={Shows}
          style={{marginTop:20,height:60, width:'80%', borderBottomWidth:1,borderStyle:'solid', justifyContent:'space-between', padding:10, flexDirection:'row'}}>
              <View style={{flexDirection:'row'}}>
                <Icon name="phone-volume" size={20} color="black"></Icon>
                <Text style={{paddingLeft:15}}>
                  Help And Support
                </Text>
              </View>
              <Icon name="angle-right" size={20}></Icon>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={Shows}
          style={{marginTop:20,height:60, width:'80%', borderBottomWidth:1,borderStyle:'solid', justifyContent:'space-between', padding:10, flexDirection:'row'}}>
              <View style={{flexDirection:'row'}}>
                <Icon name="question" size={20} color="black"></Icon>
                <Text style={{paddingLeft:15}}>
                  About
                </Text>
              </View>
              <Icon name="angle-right" size={20}></Icon>
          </TouchableOpacity>
          
        </View>
        
      </View>
  );
}
