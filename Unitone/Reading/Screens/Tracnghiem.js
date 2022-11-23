import React, { useState, useContext, useEffect }  from 'react';
import { View, Text,  TouchableOpacity, Modal, Animated, ScrollView, Image} from 'react-native';
import { COLORS} from '../Constants/theme';
import data from '../Data/Data2';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Supabase and data user
import { supabase } from '../../../src/initSupabase';
import { AuthContext} from '../../../src/provider/AuthProvider';
//update tien do vao bang TienDocpnUnit1
const UpdateTienDo = async (userId, value)=> {
    const { data, error } = await supabase
    .from('TienDocpnUnit1')
    .update({ ReadingAndUnit1: value })
    .eq('UserID', userId)
    console.log("UpdateTienDo " ,data)
}
//TienDoHoanthanh
const UpdateTienDo2 = async (userId, value)=> {
    const { data, error } = await supabase
    .from('TienDoHoanthanh')
    .update({ TiendoUnit1: value })
    .eq('UserID', userId)
    console.log("TienDoHoanthanh" ,data)
}
// Get data Unit1 from database TienDocpnUnit1
const getdata = async (userId)=> {
    let { data: TienDocpnUnit1, error } = await supabase
    .from('TienDocpnUnit1')
    .select('*')
    .eq('UserID', userId).single()
    console.log(TienDocpnUnit1)
    return TienDocpnUnit1;
}
// Get data Unit1 from database TienDoHoanthanh
const getdata2 = async (userId)=> {
    let { data: TienDoHoanthanh, error } = await supabase
    .from('TienDoHoanthanh')
    .select('*')
    .eq('UserID', userId).single()
    console.log(TienDoHoanthanh)
    return TienDoHoanthanh;
    }
    // Update Score
const UpdateScore = async (userId, value)=> {
    const { data, error } = await supabase
    .from('ScoreOfUser')
    .update({ ScoreUnit1 : value })
    .eq('UserID', userId)
}
// Get data Score from database 
const getScore = async (userId)=> {
    let { data: ScoreOfUser, error } = await supabase
    .from('ScoreOfUser')
    .select('*')
    .eq('UserID', userId).single()
    console.log(ScoreOfUser)
    return ScoreOfUser;
    }
    //Main
const ReadingUnit1 = ({navigation}) => {
    const [userData, setUserData] = useState({})
    const [userData2, setUserData2] = useState({})
    const [userScore, setUserScore] = useState({})
    const auth = useContext(AuthContext);
    //useEffect
    useEffect(() => {
        getdata(auth.session?.user.id)
        .then((data) => setUserData(data));
        getdata2(auth.session?.user.id)
        .then((data) => setUserData2(data));
        getScore(auth.session?.user.id)
        .then((data) => setUserScore(data));
    }, auth.session?.user.id);
    //Update
    const [value, Setvalue] = useState('50%');
    const update = async() =>{
        //update vocabulary
        if (userData?.ReadingAndUnit1 == "0%"){
            await UpdateTienDo(auth.session?.user.id, value);
        };
        // update unit 1
        if (userData2?.TiendoUnit1 == "50%"){
            await UpdateTienDo2(auth.session?.user.id, '62.5%');
        }
        if (userScore?.ScoreUnit1 < 30){
            await UpdateScore(auth.session?.user.id,userScore?.ScoreUnit1 + score1);
        }
    }
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false)
    const [showktraButton, setShowktraButton] = useState(true)
    const [showNextButtonErrow, setShowNextButtonErrow] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    //Handle
    const [score1, setScore1] = useState(0)
    const [bug,Setbug] = useState(true);
    const [ktra,setktra] = useState(true);
    const [AA,SetAA] = useState('');
    const [BB,SetBB] = useState('');
    const [CC,SetCC] = useState('');
    const [DD,SetDD] = useState('');
    const [EE,SetEE] = useState('');
    const [AAA,SetAAA] = useState('');
    const [BBB,SetBBB] = useState('');
    const [CCC,SetCCC] = useState('');
    const [DDD,SetDDD] = useState('');
    const [EEE,SetEEE] = useState('');
    const [correctAA, SetcorrectAA] = useState('');
    const [correctBB, SetcorrectBB] = useState('');
    const [correctCC, SetcorrectCC] = useState('');
    const [correctDD, SetcorrectDD] = useState('');
    const [correctEE, SetcorrectEE] = useState('');
    const buttonKtra =() =>
    {
        if(showktraButton)
        {
        return(
            <View >
            <TouchableOpacity 
            onPress={()=>{handleKtra(), handleNext()}}
            style={{height:60,width:130, backgroundColor:'green', borderRadius:20, margin:20, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white', fontSize:20}}>Nộp</Text>
            </TouchableOpacity>
            </View>
        )
        }
        else return (
            <View >
            <TouchableOpacity 
            onPress={()=>{update(), navigation.navigate('ScreenMainUnit1')}}
            style={{height:60,width:130, backgroundColor:'green', borderRadius:20, margin:20, alignItems:'center', justifyContent:'center'}}>
                <Icon name='forward' size={30} style={{opacity:0.5}}></Icon>
            </TouchableOpacity>
            </View>
        )
    }
    const handleKtra =() =>
    {
        if (bug)
        {
        setShowktraButton(false);
        let correct_option0 = allQuestions[0]['correct_option'];
        let correct_option1 = allQuestions[1]['correct_option'];
        let correct_option2 = allQuestions[2]['correct_option'];
        let correct_option3 = allQuestions[3]['correct_option'];
        let correct_option4 = allQuestions[4]['correct_option'];
        SetAAA(AA);
        SetBBB(BB);
        SetCCC(CC);
        SetDDD(DD);
        SetEEE(EE);
        SetcorrectAA(correct_option0);
        SetcorrectBB(correct_option1);
        SetcorrectCC(correct_option2);
        SetcorrectDD(correct_option3);
        SetcorrectEE(correct_option4);   
        let score = 0;
        if(correct_option0 == AA)
            score = score + 1   ;
        if(correct_option1 == BB)
            score = score + 1   ;  
        if(correct_option2 == CC)
            score = score + 1   ;   
        if(correct_option3 == DD)
            score = score + 1   ;   
        if(correct_option4 == EE)
            score = score + 1   ;  
        Setbug(false);
        setScore1(score);
        } 
    }
    const validateAnswer = (SetArray,selectedOption) => {
        if (SetArray == 0)
        {
        SetAA(selectedOption)
        };
        if (SetArray == 1)
        {
        SetBB(selectedOption);
        }
        if (SetArray == 2)
        {
        SetCC(selectedOption);
        }
        if (SetArray == 3)
        {
        SetDD(selectedOption);
        }
        if (SetArray == 4)
        SetEE(selectedOption);
    }   
    const handleNext = () => {
        if (bug)
        {
            setTimeout(() => {
                setShowScoreModal(true)
            }, 1000);
            Setbug(false)
        }
    }
    const tat =()=>{
        setShowScoreModal(false)
    }
    const restartQuiz = () => {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        setShowNextButtonErrow(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const renderQuestion = () => {
        return (
            <ScrollView style={{borderWidth:1, borderRadius:20, padding:10}}>
            <View style={{
                alignItems:'center',
                marginVertical: 10
            }}>
                <Text style ={{fontSize:18}}>Read the passages and choose the best option:</Text>
                
                <Text>{"        "+"Andrea - There are six of us in our family, my parents, me, the twins and my older brother, Ted. Ted is a good ten years older than me and the twins - they are girls - are two years younger than me. We had a good childhood out in the countryside. My parents were always busy with the farm and so we didn't get the help with school work and things like that that children get today. But my parents were very loving, especially my father. I regret not helping more around the farm because now I realise that it must have been very hard for my parents, especially as my grandparents lived so far away."}</Text>
                <Text>{"        "+"Bob - Both my parents were in the theatre and they had made quite a name for themselves on the stage. As a child I remember our house being constantly full of famous people, laughing and talking. My sisters and me would be brought down by our nanny to kiss parents goodnight and then we would be packed off to the nursery. That's as much as we ever really saw of them at that time. It's better now, but it has left a mark on all of us - we ring each other now and again, but that's about all. I think my father understands this, but I am not sure my mother does."}</Text>
                <Text>{"        "+"Camillia - I left home when I was sixteen to live with my grandparents in Sydney. My parents had a farm in the outback and I needed to go to college. It was quite difficult for me to leave my younger brothers and sisters behind as we were quite a tight-knit group, even though the age gap was fairly wide - as you can imagine there was no one else to play with out in the middle of nowhere! When I got fed up I'd give them a ring, and my dad would always put me right - a tower of strength he was. My grandparents were great too - helped me with my homework, took me on trips, things like that I'll never forget that."}</Text>
                <Text>{"        "+"David - I am always telling my kids - your family is always there for you, whatever happens. You might think we don't understand you and all that rubbish, but no one else will look after you the way the family will. Family is important to me. When I was young, I didn't have much of family life. Our kids were quite close in ages so that helped enormously, but we didn't see much of our parents. In fact, we saw more of granny and grandpa, but they were a bit strict. We all got on and we knew that our parents cared for us. But there wasn't much in the way of trips, treats, things that nowadays people take for granted."}</Text>
            </View>
            </ScrollView>
        )
    }
    const renderOptions = () => {
        let a = 0;
        let b = 1;
        let c = 2;
        let d = 3;
        let e = 4;
            return (
                <ScrollView>
                <View style = {{justifyContent:'space-between', padding:5}}>
                    <View style={{
                                
                                width:'100%',
                                borderWidth:1,
                                borderRadius:20,
                                borderColor:'black',
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10}}>
                                    <Text style={{fontSize:20}}> {allQuestions[a]?.questions}</Text>
                    </View>
                    {   
                        allQuestions[a]?.options.map(option => (
                            <TouchableOpacity 
                            onPress={()=> validateAnswer(a,option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option == AA ? (option==correctAA
                                    ? (COLORS.success +'80'):(option == AAA ? COLORS.error +'60' : COLORS.secondary+'20' ))  
                                : option==correctAA
                                ? COLORS.success +'80'
                                : COLORS.secondary+'20',
                                backgroundColor:  option == AA ? (option==correctAA
                                    ? COLORS.success +'40':(option == AAA ? COLORS.error +'30' : COLORS.secondary+'50' ))
                                : option==correctAA
                                ? COLORS.success +'40'
                                : COLORS.secondary+'20',
                                height: 50, 
                                width:'100%',
                                flexDirection:'row',
                                borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10
                            }}
                            >
                                <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style = {{justifyContent:'space-between', padding:5}}>
                <View style={{ 
                                width:'100%',
                                borderWidth:1,
                                borderRadius:20,
                                borderColor:'black',
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10, padding:10}}>
                                    <Text style={{fontSize:20}}>{allQuestions[b]?.questions}</Text>
                    </View>
                    {
                        allQuestions[b]?.options.map(option => (
                            <TouchableOpacity 
                            onPress={()=> validateAnswer(b,option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option == BB ? (option==correctBB
                                    ? COLORS.success +'80':(option == BBB ? COLORS.error +'60' : COLORS.secondary+'20' ))  
                                : option==correctBB
                                ? COLORS.success +'80'
                                : COLORS.secondary+'20',
                                backgroundColor:  option == BB ? (option==correctBB
                                    ? COLORS.success +'40':(option == BBB ? COLORS.error +'30' : COLORS.secondary+'50' ))  
                                : option==correctBB
                                ? COLORS.success +'40'
                                : COLORS.secondary+'20',
                                padding:10,
                                width:'100%',
                                flexDirection:'row',
                                borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10
                            }}
                            >
                                <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style = {{justifyContent:'space-between', padding:5}}>
                <View style={{
                                padding:10,
                                width:'100%',
                                borderWidth:1,
                                borderRadius:20,
                                borderColor:'black',
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10}}>
                                    <Text style={{fontSize:20}}>{allQuestions[c]?.questions}</Text>
                    </View>
                    {
                        allQuestions[c]?.options.map(option => (
                            <TouchableOpacity 
                            onPress={()=> validateAnswer(c,option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option == CC ? (option==correctCC
                                ? COLORS.success +'80':(option == CCC ? COLORS.error +'60' : COLORS.secondary+'20' ))
                                : option==correctCC
                                ? COLORS.success +'80'
                                : COLORS.secondary+'20',
                                backgroundColor:  option == CC ? (option==correctCC
                                ? COLORS.success +'40': (option == CCC ? COLORS.error +'30' : COLORS.secondary+'50'))                         
                                : COLORS.secondary+'20',
                                padding:10, width:'100%',
                                flexDirection:'row',
                                borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10
                            }}
                            >
                                <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style = {{justifyContent:'space-between', padding:5}}>
                <View style={{
                                padding:10,
                                width:'100%',
                                borderWidth:1,
                                borderRadius:20,
                                borderColor:'black',
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10}}>
                                    <Text style={{fontSize:20}}>{allQuestions[d]?.questions}</Text>
                    </View>
                    {
                        allQuestions[d]?.options.map(option => (
                            <TouchableOpacity 
                            onPress={()=> validateAnswer(d,option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option == DD ? (option==correctDD
                                    ? COLORS.success +'80':(option == DDD ? COLORS.error +'60' : COLORS.secondary+'20' ))  
                                : option==correctDD
                                ? COLORS.success +'80'
                                : COLORS.secondary+'20',
                                backgroundColor:  option == DD ? (option==correctDD
                                    ? COLORS.success +'40':(option == DDD ? COLORS.error +'30' : COLORS.secondary+'50' ))  
                                : option==correctDD
                                ? COLORS.success +'40'
                                : COLORS.secondary+'20',
                                padding:10, width:'100%',
                                flexDirection:'row',
                                borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10
                            }}
                            >
                                <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style = {{justifyContent:'space-between', padding:5}}>
                <View style={{
                                padding:10, width:'100%',
                                borderWidth:1,
                                borderRadius:20,
                                borderColor:'black',
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10}}>
                                    <Text style={{fontSize:20}}>{allQuestions[e]?.questions}</Text>
                    </View>
                    {
                        allQuestions[e]?.options.map(option => (
                            <TouchableOpacity 
                            onPress={()=> validateAnswer(e,option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option == EE ? (option==correctEE
                                    ? COLORS.success +'80':(option == EEE ? COLORS.error +'60' : COLORS.secondary+'20' ))  
                                : option==correctEE
                                ? COLORS.success +'80'
                                : COLORS.secondary+'20',
                                backgroundColor:  option == EE ? (option==correctEE
                                    ? COLORS.success +'40':(option == EEE ? COLORS.error +'30' : COLORS.secondary+'50' ))  
                                : option==correctEE
                                ? COLORS.success +'40'
                                : COLORS.secondary+'20',
                                padding:10,width:'100%',
                                flexDirection:'row',
                                borderRadius: 20,
                                alignItems: 'center', justifyContent: 'center',
                                marginVertical: 10
                            }}
                            >
                                <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{width:'100%',alignItems:'center', justifyContent:'center'}}>
                {buttonKtra()}
                </View>
                </ScrollView>
            )
            }
    const renderNextButton = () => {
        if(showNextButton){
            return (             
                <View 
                    style={{
                    marginTop:10,
                    alignItems:'center',
                    height:30,
                    borderRadius:20,
                    justifyContent:'flex-start',
                     }}>
                <TouchableOpacity
                onPress={handleNext}
                style={{
                 width: '60%',height:'100%', backgroundColor: COLORS.success+'60', borderRadius:50, margin:10, alignItems:'flex-end', paddingRight:10
                }}>
                <Icon name='forward' size={30}></Icon>
                </TouchableOpacity>
                </View>
                
            )
            }else{
            return null
        }
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: 'green'
                },{
                    width: progressAnim
                }]}>
                </Animated.View>
            </View>
        )
    }
    return(
        <View
        style={{height:'100%',width:'100%', backgroundColor:'white'}}
        >
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               
               position:'relative'
           }}>
                <View style={{paddingBottom:10}}>
                    <View style={{marginTop:5, flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity style={{padding:5, backgroundColor:'#E6E7E9', width:45, borderRadius:10}} onPress={() => navigation.goBack()}>
                            <Icon name='backward' size={30}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate('Home')}>
                            <Icon name="home" size={40}></Icon>
                        </TouchableOpacity>
                    </View>
            </View>
               {/* ProgressBar */}
               { renderProgressBar() }

               {/* Question */}
               {renderQuestion()}

               {/* Options */}
               {renderOptions()}
               {/* Next Button */}
               {renderNextButton()}
               
               {/* Score Modal */}

               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                    <View
                        style={{height:'100%',width:'100%', backgroundColor:'rgba(00,00,00,.7)'}}>
                    
                   <View style={{
                       flex: 1,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{score1> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score1 > (allQuestions.length/2) ? COLORS.success : COLORS.error
                               }}>{score1}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '80%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Retry</Text>
                           </TouchableOpacity>

                       </View>

                       <TouchableOpacity
                           onPress={tat}
                           style={{
                                marginTop:'10%',
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '30%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Close</Text>
                           </TouchableOpacity>
                   </View>
                   </View>
               </Modal>
           </View>
           </View>     
) 
}
export default ReadingUnit1