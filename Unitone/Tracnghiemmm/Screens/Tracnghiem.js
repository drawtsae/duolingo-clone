import React, { useState, useContext, useEffect }  from 'react'
import { View, Text,  TouchableOpacity, Modal, Animated, ScrollView,ImageBackground} from 'react-native'
import { COLORS} from '../Constants/theme'
import data from '../Data/QuestionData';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Supabase and data user
import { supabase } from '../../../src/initSupabase';
import { AuthContext} from '../../../src/provider/AuthProvider';
//update tien do vao bang TienDocpnUnit1
const UpdateTienDo = async (userId, value)=> {
    const { data, error } = await supabase
    .from('TienDocpnUnit1')
    .update({ VocabularyUnit1: value })
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
const TracnghiemSecondVocabularyUnit1 = ({navigation}) => {
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
    const [value, Setvalue] = useState('100%');
    const update = async() =>{
        //update vocabulary
        if (userData?.VocabularyUnit1 == "50%"|| userData?.VocabularyUnit1 == "0%"){
            await UpdateTienDo(auth.session?.user.id, value);
        };
        // update unit 1
        if (userData2?.TiendoUnit1 == "12.5%" || userData2?.TiendoUnit1 == "0%"){
            await UpdateTienDo2(auth.session?.user.id, '25%');
        }
        if (userScore?.ScoreUnit1 == 0 || userScore?.ScoreUnit1 < 5){
            await UpdateScore(auth.session?.user.id,(userScore?.ScoreUnit1 + score));
        }
    }
    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showNextButtonErrow, setShowNextButtonErrow] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    //Axios
    //Handle
    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
            setShowNextButton(true)
        }
        else{
        // Show Next Button
        setShowNextButtonErrow(true)
        }
    }   
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
            setShowNextButtonErrow(false);
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
                    fontSize: 20
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 3, 
                            borderColor: option==correctOption 
                            ? COLORS.success
                            : option==currentOptionSelected 
                            ? COLORS.error 
                            : COLORS.secondary+'40',
                            backgroundColor: option==correctOption 
                            ? COLORS.success +'30'
                            : option==currentOptionSelected 
                            ? COLORS.error +'30'
                            : COLORS.secondary+'20',
                            height: 60, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 10
                        }}
                        >
                            <Text style={{fontSize: 20, color: 'black'}}>{option}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                option==correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30/2,
                                        backgroundColor: COLORS.error,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="close" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>            
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (             
                <View 
                    animationType="slide"
                    style={{
                    marginTop:10,
                    alignItems:'center',
                    flex:1,
                    borderRadius:20,
                    borderWidth:2,
                    borderColor: COLORS.success ,
                    backgroundColor:COLORS.noteT }}>
            <ScrollView >
                <View style={{padding:10}}>
            {
                    allQuestions[currentQuestionIndex]?.note.map(option => (
                        
                            <Text style={{color:COLORS.success, fontSize:17}}>{option}</Text>
                        
                    ))
            }
            </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity
                onPress={handleNext}
                style={{
                 width: '30%', backgroundColor: COLORS.success, padding: 10, borderRadius:50, margin:10
                }}>
                    <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
                </View>
            )
            }else{
            return null
        }
    }

    const renderNextButtonErrow = () => {
        if(showNextButtonErrow){
            return (             
                <View 
                    animationType="slide"
                    style={{
                    marginTop:10,
                    alignItems:'center',
                    flex:1,
                    borderRadius:20,
                    borderWidth:2,
                    borderColor: COLORS.error ,
                    backgroundColor:COLORS.noteF}}>
            <ScrollView >
                <View style={{padding:10}}>
            {
                    allQuestions[currentQuestionIndex]?.note.map(option => (
                        
                            <Text style={{color:COLORS.success, fontSize:17}}>{option}</Text>
                        
                    ))
            }
            </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity
                onPress={handleNext}
                style={{
                 width: '30%', backgroundColor: COLORS.error, padding: 10, borderRadius:50, margin:10
                }}>
                    <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
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
        <ImageBackground
        source={require('../Assets/Images/Bground.jpg')}
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
               {renderNextButtonErrow()}
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

                       <TouchableOpacity
                           onPress={()=> {navigation.navigate("ScreenMainUnit1"), update()}}
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
           </ImageBackground>     
) 
}
export default TracnghiemSecondVocabularyUnit1