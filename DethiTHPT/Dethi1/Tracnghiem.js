import React, { useState, useContext, useEffect }  from 'react'
import { View, Text,  TouchableOpacity, Modal, Animated , ScrollView} from 'react-native'
import { COLORS} from '../Constants/theme'
import data from './Data/QuestionData';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Supabase and data user
import { supabase } from '../../src/initSupabase';
import { AuthContext} from '../../src/provider/AuthProvider';
var ABRRAY =new Array();
var BRRAY = new Array();
const getdata = async (userId)=> {
    let { data: ScoreOfUser, error } = await supabase
    .from('ScoreOfUser')
    .select('*')
    .eq('UserID', userId).single()
    console.log(ScoreOfUser)
    return ScoreOfUser;
    }
const UpdateScore = async (userId, value)=> {
    const { data, error } = await supabase
    .from('ScoreOfUser')
    .update({ Scoremajor1 : value })
    .eq('UserID', userId)
}
const Tracnghiemdethi1 = ({navigation}) => {
    //Show optioned
    // Update Score
    const [userData, setUserData] = useState({})
    const auth = useContext(AuthContext);
    //useEffect
    const update = async() =>{
        await UpdateScore(auth.session?.user.id, score);
    }
    var ARRAY = new Array();
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showNextButtonErrow, setShowNextButtonErrow] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [answer1 ,setansewr1] = useState('');
    const [dem, setdem] = useState(0);
    //Thuật toán
    for (let index = 0; index < allQuestions.length; index++) {
        ARRAY[index] = allQuestions[index].correct_option
    }
    let index = dem;
    const AAAAA =(Options,index)=>{
        BRRAY[index] = Options
        setansewr1(Options)
        setShowNextButton(true)
    }
    BRRAY[index] = answer1;
    //Gía trị đáp án đúng
    //Show đáp án đã chon
    const Showdapan =()=>{
        let A=0;
        return (
            allQuestions.map((a) =>(
                <View style={{width:'100%', margin:10, borderWidth:1, padding:10, borderRadius:20,}}>
                     <Text style={{
                    color: 'black',
                    fontSize: 15, paddingTop:10
                }}>{a.question}
                    <Text style={{textDecorationLine:'underline'}}>{a.undeline1}</Text>
                    <Text>{a.question1}</Text>
                    <Text style={{textDecorationLine:'underline'}}>{a.undeline2}</Text>
                    <Text>{a.question2}</Text>
                    <Text style={{textDecorationLine:'underline'}}>{a.undeline3}</Text>
                    <Text>{a.question3}</Text>
                    <Text style={{textDecorationLine:'underline'}}>{a.undeline4}</Text>
                    <Text>{a.question4}</Text>
                </Text>
                     <View>
                    {
                    a.options.map(option=>(
                        <View style={{flexDirection:'row', marginTop:20, alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=> {}}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 1.5, 
                            backgroundColor: option == BRRAY[A] ? (option == ARRAY[A] ?  COLORS.success : COLORS.error   ) : option == ARRAY[A] ? COLORS.success : 'white',
                            height: 25, width:25, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            marginLeft:10,
                        }}
                        >
                        </TouchableOpacity>
                        <Text style={{fontSize: 20, color: 'black', marginLeft:25}} >{option} 
                            <Text style={{textDecorationLine:'underline'}}>
                                {a?.options1} 
                            </Text>
                        </Text>   
                        </View>
                    ))
                    }
                    {
                        a.note.map(note =>(
                            <View style={{marginTop:3}}>
                                <Text>
                                    {note}
                                </Text>
                            </View>
                        ))
                    }
                    <Text>{A++}</Text>
            </View>
                </View>
            ))
        )
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
            let A = 0;
            for (let index = 0; index < allQuestions.length; index++) {
                if(BRRAY[index] == ARRAY[index])
                {
                    A=A+1;
                    console.log(BRRAY[index], ARRAY[index], score); 
                }
            }
            setScore(A);
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
            setShowNextButtonErrow(false);
            setdem(dem+1)
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setdem(0);
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
            <View style={{
                marginVertical: 10
            }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{color: 'black', fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: 'black', fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight:"bold",
                }}>{allQuestions[currentQuestionIndex]?.title}</Text>
                <Text style={{
                    color: 'black',
                    fontSize: 15, paddingTop:10
                }}>{allQuestions[currentQuestionIndex]?.question}
                    <Text style={{textDecorationLine:'underline'}}>{allQuestions[currentQuestionIndex]?.undeline1}</Text>
                    <Text>{allQuestions[currentQuestionIndex]?.question1}</Text>
                    <Text style={{textDecorationLine:'underline'}}>{allQuestions[currentQuestionIndex]?.undeline2}</Text>
                    <Text>{allQuestions[currentQuestionIndex]?.question2}</Text>
                    <Text style={{textDecorationLine:'underline'}}>{allQuestions[currentQuestionIndex]?.undeline3}</Text>
                    <Text>{allQuestions[currentQuestionIndex]?.question3}</Text>
                    <Text style={{textDecorationLine:'underline'}}>{allQuestions[currentQuestionIndex]?.undeline4}</Text>
                    <Text>{allQuestions[currentQuestionIndex]?.question4}</Text>
                </Text>
            </View>
        )
    }
    const renderOptions = () => {
        
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <View style={{flexDirection:'row', marginTop:20, alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=> AAAAA(option,currentQuestionIndex)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 1.5, 
                            backgroundColor: option == BRRAY[currentQuestionIndex] ? COLORS.secondary+'10' : COLORS.error,
                            height: 25, width:25, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            marginLeft:10,
                        }}
                        >
                        </TouchableOpacity>
                        <Text style={{fontSize: 20, color: 'black', marginLeft:25}} >{option} 
                            <Text style={{textDecorationLine:'underline'}}>
                                {allQuestions[currentQuestionIndex]?.options1}
                            </Text>
                        </Text>
                        </View>
                    ))
                }
            </View>
        )
        
    }
    
    const renderNextButton = () => {
        if(showNextButton){
            return (             
                <View style={{alignItems:'flex-end'}}>
                <TouchableOpacity
                onPress={handleNext}
                style={{
                 width: '30%', backgroundColor: COLORS.success+'80', padding: 10, borderRadius:50, margin:10
                }}>
                    <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>Next</Text>
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
                       
                        <ScrollView style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           height: '80%',
                           borderRadius: 20,
                           padding: 20,
                           marginTop: 20,
                           
                       }}>
                        <View style={{flex:1, alignItems: 'center',}}>
                            <Showdapan></Showdapan>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Retry Quiz</Text>
                           </TouchableOpacity>
                           </View>
                           </ScrollView>
                       <TouchableOpacity
                           onPress={()=> {navigation.navigate("Profile"), update ()}}
                           style={{
                                marginTop:'10%',
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Contuniue</Text>
                           </TouchableOpacity>
                   </View>
                   </View>
               </Modal>
           </View>
           </View>     
) 
}
export default Tracnghiemdethi1