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
const getdata = async (userId)=> {
    let { data: ScoreOfUser, error } = await supabase
    .from('ScoreOfUser')
    .select('Name,Scoremajor1')
    //.eq('UserID', userId).single()
    return ScoreOfUser;
}
const getdata3 = async (userId)=> {
    let { data: ScoreOfUser, error } = await supabase
    .from('ScoreOfUser')
    .select('*')
    .eq('UserID', userId).single()
    return ScoreOfUser;
}
const RankScreenmajor1 = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState([]);
    const [userData3, setUserData3] = useState({});
    const auth = useContext(AuthContext);
    useEffect(()=> {
        getdata()
        .then((data) =>{
            data.sort((a,b) => a.Scoremajor1 < b.Scoremajor1 ?1 :-1);
            setUserData(data)
        } )
        //getdata2()
        //.then((data) => (setUserData2(data)));
        getdata3(auth.session.user.id)
        .then((data) => (setUserData3(data)));
        //name = userData3?.Name;
        //handle();
        console.log("load rank screen")
    },userData3?.Scoremajor1)

    const getImage =(num) =>{
        switch (num) {
            case 1:
                return require('../screens/auth/Assets/Image/Thachdau.png');
                break;
            case 2:
                return require('../screens/auth/Assets/Image/AAA.png');
                break;
            case 3:
                return require('../screens/auth/Assets/Image/Caothumini.png');
                break;
            case 4:
                return require('../screens/auth/Assets/Image/Kimcuong.png');
                break;
            default:
                return require('../screens/auth/Assets/Image/Satvun.png');
                break;
        }
    } 

  return (  
    <View style = {{flex:1}}>
        
        <View style={{flex:2, alignItems:'center', justifyContent:'flex-end', paddingHorizontal:20}}>
                
                    
            <View style={{height:'25%', width:'100%', marginTop:10, justifyContent:'space-between', alignItems:'flex-end', flexDirection:'row'}}>
                <TouchableOpacity style={{padding:5, backgroundColor:'#E6E7E9', width:45, borderRadius:10}} onPress={() => navigation.goBack()}>
                            <Icon name='backward' size={30}></Icon>
                        </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('../screens/auth/Assets/Icon/sync.png')} style={{height:30, width:30}}></Image>
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
              {userData.map((value,index) => 
              <ListS
              key={index}
              img={getImage(index + 1)}
              rank={index + 1}
              bg={userData3.Name==value?.Name ? "#F4F4D6" : null}
              score={value?.Scoremajor1}
                title={value?.Name}
              />)}

            </View>
            </ScrollView>
        </View>
    </View>
  )
}
export default RankScreenmajor1