import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity, ImageBackground} from 'react-native';
import CourseList from './CourseList';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import Sys_modal from '../Sys_modal';
// import Supabase and data user
import { supabase } from '../../src/initSupabase';
import { AuthContext} from '../../src/provider/AuthProvider';
// Get data Unit1 from database
const getdata = async (userId)=> {
    let { data: TienDocpnUnit1, error } = await supabase
    .from('TienDocpnUnit1')
    .select('*')
    .eq('UserID', userId).single()
    console.log(TienDocpnUnit1)
    return TienDocpnUnit1;
    }
//Main
const ScreenMainUnit2 =() =>{
    const [userData, setUserData] = useState({})
    const auth = useContext(AuthContext);
    //useEffect
    useEffect(() => {
        getdata(auth.session?.user.id)
        .then((data) => setUserData(data));
    });
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
                style={{width:"100%",height:"100%",backgroundColor:'white'}}>
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
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20,
                    borderRadius:30,
                }}>    
                    <TouchableOpacity
                        onPress={()=> {}}
                        style={{ width:30
                        }}
                    >
                        <Image
                            source={require('../images/spinning-arrows.png')}
                            style={{marginLeft:20,width:30,height:30, marginTop:10}}
                        />
                    </TouchableOpacity>
                    <View style={{
                        paddingHorizontal:10,
                        paddingVertical:3,
                        borderRadius:10,
                        marginTop:30,
                        marginLeft:"70%"
                    }}> 
                            <Image
                                source={require('../images/balloon.png')}
                                style={{height:40,width:40}}
                            />
                    </View>
                </View>
                <View style={{borderTopStartRadius:200,borderTopEndRadius:200, marginTop:15}}>
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
          
                    <View style={{flex:1,paddingVertical:15}}>
                            <CourseList
                                onPress={()=> navigation.navigate("ScreenFistVocabularyUnit1")}
                                img={require('../images/D.png')}
                                title="Vocabulary" 
                                bg="#fdddf3"
                                lessons="20 lessons"
                                percent={userData?.VocabularyUnit1}
                            />
                             {
                                userData?.VocabularyUnit1 != '100%' ? (
                                    <CourseList
                                        onPress={Shows}
                                        img={require('../images/book.png')}
                                        title="Pronunciation and Grammar"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={userData?.PronuciationUnit1}
                                />
                                ): userData?.VocabularyUnit1 == '100%' ? (
                                    <CourseList
                                        onPress={()=> navigation.navigate("FirstScreenPronuciationUnit1")}
                                        img={require('../images/book.png')}
                                        title="Pronunciation and Grammar"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={userData?.PronuciationUnit1}
                                    />        
                                ) : null
                            }
                            {
                                userData?.PronuciationUnit1 != '100%' ? (
                                    <CourseList
                                    onPress={Shows}
                                        img={require('../images/read.png')}
                                        title="Reading"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={userData?.ReadingAndUnit1}
                                />
                                ): userData?.PronuciationUnit1 == '100%' ? (
                                    <CourseList
                                    onPress={()=> navigation.navigate("TracnghiemDucloUnit1")}
                                        img={require('../images/read.png')}
                                        title="reading"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={userData?.ReadingAndUnit1}
                                    />        
                                ) : null
                            }
                            {
                                userData?.ReadingAndUnit1 != '100%' ? (
                                    <CourseList
                                    onPress={Shows}
                                        img={require('../images/solved.png')}
                                        title="Consolidation"
                                        bg='rgba(00,00,00,.4)'
                                        lessons="20 lessons"
                                        percent={userData?.GrammarUnit1}
                                />
                                ): userData?.ReadingAndUnit1 == '100%' ? (
                                    <CourseList
                                        onPress={()=> navigation.navigate("ConsolidationUnit1")}
                                        img={require('../images/solved.png')}
                                        title="Consolidation"
                                        bg="#fef8e3"
                                        lessons="20 lessons"
                                        percent={userData?.GrammarUnit1}
                                    />        
                                ) : null
                            }       
                    </View>           
            </ImageBackground>
        )
    }
export default ScreenMainUnit2