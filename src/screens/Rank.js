import { View, Text , Image , ScrollView, TouchableOpacity } from 'react-native'
import React ,{useContext , useEffect , useState}from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { supabase } from '../initSupabase';
import ListS from './CourseList';
import data from '../../Unitone/Reading/Data/Data2';
import Sys_modal from './Sys_modalrank';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
// Get data Score from database 
let array = new Array();
let brray= new Array();
let name ='';
const getdata = async (userId)=> {
    let { data: ScoreOfUser, error } = await supabase
    .from('ScoreOfUser')
    .select('Name,ScoreUnit1')
    //.eq('UserID', userId).single()
    console.log(ScoreOfUser)
    return ScoreOfUser;
}
const getdata2 = async (userId)=> {
    let { data: ScoreOfUser, error } = await supabase
    .from('ScoreOfUser')
    .select('ScoreUnit1')
    //.eq('UserID', userId).single()
    console.log(ScoreOfUser)
    return ScoreOfUser;
}
const getdata3 = async (userId)=> {
    let { data: ScoreOfUser, error } = await supabase
    .from('ScoreOfUser')
    .select('*')
    .eq('UserID', userId).single()
    console.log(ScoreOfUser)
    return ScoreOfUser;
}
const RankScreen = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState({});
    const [userData2, setUserData2] = useState({});
    const [userData3, setUserData3] = useState({});
    const auth = useContext(AuthContext);
    const [Xephanguserdata, SetXephanguserdata] = useState({});
    useEffect((() => {
        getdata()
        .then((data) => (setUserData(data)))
        getdata2()
        .then((data) => (setUserData2(data)));
        getdata3(auth.session.user.id)
        .then((data) => (setUserData3(data)));
        name = userData3?.Name;
    }));
    useEffect((()=>{
        handle();
    }),)
    const handle =() =>{
        let A;
        for (let index = 0; index < userData.length; index++) {
            array[index] = userData2[index]?.ScoreUnit1;
            
        }
        // Sắp xếp thứ hạng theo mảng
        for (let index = 0; index < userData.length - 1; index++) {
            for (let jndex = index + 1; jndex < userData.length; jndex++) {
                if(array[index] < array[jndex])
                {
                    A = array[index];
                    array[index] = array[jndex];
                    array[jndex] = A;
                }
            }
        }
        // HANDLE
        for (let index = 0; index < userData.length; index++) {
            for (let jndex = 0; jndex < userData.length ; jndex++) {
                if (array[index] == userData2[jndex]?.ScoreUnit1)
                {
                    brray[index] = jndex;
                }   
            } 
        }
        console.log(userData[brray[0]]?.ScoreUnit1)
    }
  return (
    
    <View style = {{flex:1}}>
        
        <View style={{flex:2, alignItems:'center', justifyContent:'flex-end', paddingHorizontal:20}}>
                
                    
            <View style={{height:'25%', width:'100%', marginTop:10, justifyContent:'space-between', alignItems:'flex-end', flexDirection:'row'}}>
                <TouchableOpacity style={{padding:5, backgroundColor:'#E6E7E9', width:45, borderRadius:10}} onPress={() => navigation.goBack()}>
                            <Icon name='backward' size={30}></Icon>
                        </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../screens/auth/Assets/Icon/info.png')} style={{height:30, width:30}}></Image>
                </TouchableOpacity>
            </View>
            <Image source={require('../screens/auth/Assets/Icon/Rank.png')} style={{height:'40%', width:'80%'}}></Image>
            <Text style={{fontSize:20}}>BXH Gold Of Unit1</Text>
            <View style={{width:'95%', height:50, justifyContent:'space-between',flexDirection:'row',alignItems:'center', paddingHorizontal:20}}>
                <View>
                    <Text>Rank</Text>
                </View>
                <View>
                    <Text>Bậc</Text>
                </View>
                <View style={{}}>
                    <Text>Tên</Text>
                </View>
                <View >
                    <Text>Điểm</Text>
                </View>
            </View>
        </View>
        <View style={{flex:5 , alignItems:'center'}}>
            <ScrollView>
            <View style={{flex:1 , alignItems:'center', padding:20}}>
                <ListS
                img={require('../screens/auth/Assets/Image/Thachdau.png')}
                rank='1'
                bg={name==userData[brray[0]]?.Name ? "#F4F4D6" : null}
                score={userData[brray[0]]?.ScoreUnit1}
                title={userData[brray[0]]?.Name}
                />
                <ListS
                img={require('../screens/auth/Assets/Image/AAA.png')}
                bg={name==userData[brray[1]]?.Name ? "#F4F4D6" : null}
                rank='2'
                score={userData[brray[1]]?.ScoreUnit1}
                title={userData[brray[1]]?.Name}
                />
                <ListS
                img={require('../screens/auth/Assets/Image/Caothumini.png')}
                rank='3'
                bg={name==userData[brray[2]]?.Name ? "#F4F4D6" : null}
                score={userData[brray[2]]?.ScoreUnit1}
                title={userData[brray[2]]?.Name}
                />
                <ListS
                img={require('../screens/auth/Assets/Image/Kimcuong.png')}
                rank='4'
                bg={name==userData[brray[3]]?.Name ? "#F4F4D6" : null}
                score={userData[brray[3]]?.ScoreUnit1}
                title={userData[brray[3]]?.Name}
                />
                <ListS
                img={require('../screens/auth/Assets/Image/Satvun.png')}
                rank='5'
                bg={name==userData[brray[4]]?.Name ? "#F4F4D6" : null}
                score={userData[brray[4]]?.ScoreUnit1}
                title={userData[brray[4]]?.Name}
                />
                <ListS
                img={require('../screens/auth/Assets/Image/Satvun.png')}
                rank='6'
                bg={name==userData[brray[5]]?.Name ? "#F4F4D6" : null}
                score={userData[brray[5]]?.ScoreUnit1}
                title={userData[brray[5]]?.Name}
                />
            </View>
            </ScrollView>
        </View>
    </View>
  )
}
export default RankScreen