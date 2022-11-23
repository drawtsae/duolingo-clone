import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView, ImageBackground} from 'react-native';
import CourseList from './CourseList';
import { supabase } from '../../src/initSupabase';
import { useNavigation } from '@react-navigation/native';
import { AuthContext} from '../../src/provider/AuthProvider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sys_modal from '../Sys_modal';
// Get data Unit1 from database
const getdata = async (userId)=> {
let { data: TienDoHoanthanh, error } = await supabase
.from('TienDoHoanthanh')
.select('*')
.eq('UserID', userId).single()
console.log(TienDoHoanthanh)
return TienDoHoanthanh;
}
//update tien do vao bang
const UpdateTienDo = async (userId, gia_tri_tien_do_1)=> {
    const { data, error } = await supabase
    .from('TienDoHoanthanh')
    .update({ TiendoProgramUnit1: gia_tri_tien_do_1 })
    .eq('UserID', userId)
    console.log("UpdateTienDo " ,data)
    }
//insert vao bang
const insertData = async (userId, tiendo1,tiendo2)=> {
    const { data, error } = await supabase
  .from('TienDoHoanthanh')
  .insert([
    { UserID: userId, other_column: 'otherValue' },
  ])
  console.log("insertData",data)
    }

const Cources =() =>{
    const [userData, setUserData] = useState({})
    const auth = useContext(AuthContext);
    //useEffect
    useEffect(() => {
        getdata(auth.session?.user.id)
        .then((data) => setUserData(data));
    }, auth.session?.user.id);
    //useEffect( async () => {
    //    await UpdateTienDo(auth.session?.user.id, 10)
    //}, auth.session?.user.id);
        const navigation = useNavigation();
        const [showModal,SetShowModal] = useState(false);
        const [ShowErrowMessage, SetShowErowMessage] = useState ('Vui long hoan thanh bai truoc');
        const Shows =()=>{
            SetShowModal(true);
        }
        const onHideModal= ()=>{
            SetShowModal(false)
        }
        return(
            <ImageBackground  source={require('../images/Background.jpg')}
                style={{width:"100%",height:"100%",backgroundColor:'white'}}
            >
                <Sys_modal visiable={showModal} message={ShowErrowMessage} onHide={onHideModal}/>
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
                <View style={{
                    marginTop:30,
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20,
                    borderRadius:30,
                }}>
                    <TouchableOpacity
                        onPress={()=> {}}
                        style={{ width:'100%', justifyContent:'center', alignItems:'center'
                        }}
                    >
                        <Image
                                source={require('../images/bcn.png')}
                                style={{height:200,width:200}}
                            />
                        
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop:15}}>
                
                <Text style={{
                    color:"black",
                    fontSize:40,
                    width:200,
                    alignSelf:"center",
                    textAlign:"center",
                    paddingVertical:10,
                    }}>
                    Unit Cources {Number}
                </Text>
                </View>

                    <ScrollView >          
                    <View style={{paddingVertical:15}}>
                            <CourseList
                                onPress={()=> navigation.navigate("ScreenMainUnit1")}
                                img={require('../images/lesson.png')}
                                title="Unit 1" 
                                bg="#fdddf3"
                                lessons="4 lessons"
                                percent={userData?.TiendoUnit1}
                            />
                             {
                                userData?.TiendoUnit1 != '100%' ? (
                                    <CourseList
                                        onPress={Shows}
                                        img={require('../images/dc.png')}
                                        title="Unit 2"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit2}
                                />
                                ): userData?.TiendoUnit1 == '100%' ? (
                                    <CourseList
                                        img={require('../images/dc.png')}
                                        title="Unit 2 "
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit2}
                                    />        
                                ) : null
                            }
                            {
                                userData?.TiendoUnit2 != '100%' ? (
                                    <CourseList
                                        onPress={Shows}
                                        img={require('../images/dc.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit3}
                                />
                                ): userData?.TiendoUnit2 == '100%' ? (
                                    <CourseList
                                        img={require('../images/dc.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit3}
                                    />        
                                ) : null
                            }
                            {
                                userData?.TiendoUnit3 != '100%' ? (
                                    <CourseList
                                        onPress={Shows}
                                        img={require('../images/dc.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit4}
                                />
                                ): userData?.TiendoUnit3 == '100%' ? (
                                    <CourseList
                                        img={require('../images/dc.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit4}
                                    />        
                                ) : null
                            }
                            {
                                userData?.TiendoUnit4 != '100%' ? (
                                    <CourseList
                                        onPress={Shows}
                                        img={require('../images/dc.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit5}
                                />
                                ): userData?.TiendoUnit4 == '100%' ? (
                                    <CourseList
                                        
                                        img={require('../images/dc.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit5}
                                    />        
                                ) : null
                            }
                            {
                                userData?.TiendoUnit5 != '100%' ? (
                                    <CourseList
                                    onPress={Shows}
                                        img={require('../images/dc.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit6}
                                />
                                ): userData?.TiendoUnit5 == '100%' ? (
                                    <CourseList
                                        img={require('../images/dc.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit6}
                                    />        
                                ) : null
                            }
                            {
                                userData?.TiendoUnit5 != '100%' ? (
                                    <CourseList
                                        onPress={Shows}
                                        img={require('../images/dc.png')}
                                        title="UI Motion Design in After Effects"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit6}
                                />
                                ): userData?.TiendoUnit5 == '100%' ? (
                                    <CourseList
                                        img={require('../images/dc.png')}
                                        title="Sketch shortcuts and tricks"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={userData?.TiendoUnit6}
                                    />        
                                ) : null
                            }
                    </View>
                    </ScrollView> 
                    
            </ImageBackground >
        )
    }
export default Cources