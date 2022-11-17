import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, TextInput , Keyboard} from 'react-native'
import { COLORS, SIZES } from '../Constants/theme'
import data from '../Data/QuestionData'
const WriteDuolingoUnit1 = ({navigation}) => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [showtask, setShowtask] = useState(false)
    const [showCheck, setShowCheck] = useState(true)
    const [correct, setcorrect] = useState(null)
    const [showNextButtonErrow, setShowNextButtonErrow] = useState(false)
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setShowNextButton(false);
            setShowCheck(true)
            setShowNextButtonErrow(false)
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
        setShowCheck(true);
        setShowNextButton(false);
        setShowNextButtonErrow(false)
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
                    <Text style={{color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    color: COLORS.white,
                    fontSize: 30
                }}>Write the sentens</Text>
                <Text style={{
                    color: COLORS.white,
                    fontSize: 20
                }}>"{allQuestions[currentQuestionIndex]?.question}"</Text>
            </View>
        )
    }
    const renderOpition = () =>
    {
        return(
            
            <TextInput style ={
                {
                    borderWidth: 3, 
                    borderColor: correct>1
                    ? COLORS.success
                    : correct== 1
                    ? COLORS.error 
                    : COLORS.secondary+'40',
                    marginTop:'10%',
                    height:50,
                    width:'100%',
                    backgroundColor:'white',
                    borderRadius:10,
                    paddingHorizontal:10
                }}
                value={showtask}
                placeholder={'Write your Answer'}
                onChangeText={text => setShowtask(text)}
            >
            </TextInput>
        )
    }
    const Xetanswer =() =>
    {
        let S =0;
        Keyboard.dismiss();
        let correct_option = allQuestions[currentQuestionIndex].question;
        if (showtask == correct_option)
        { 
            S=S+2
            setShowNextButton(true)
            setShowCheck(false)
            setScore(score+1)
        }
        else{ S =1 
            setScore(score-1)
            setShowNextButtonErrow(true)
            setShowCheck(false)
        }
        setcorrect(S);
        setShowtask(null);

    }
    const KTRA =() =>
    {
        if (showCheck)
        {
            return(
            <View style={{ marginTop:10,width:'100%', alignItems:'center'}}>
            <TouchableOpacity
                onPress={() => Xetanswer()}
                style={{
                 width: '60%', backgroundColor: COLORS.secondary, padding: 10, borderRadius:50
                }}>
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}> Check</Text>
            </TouchableOpacity>
            </View>
            )
        }
        else {
            return(
                null
            )
        }
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
                    backgroundColor:COLORS.success +'20' }}>
                <TouchableOpacity
                onPress={handleNext}
                style={{
                 width: '60%', backgroundColor: COLORS.success+'0', padding: 10, borderRadius:50
                }}>
                    <Text style={{fontSize: 20, color: COLORS.white, textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
                <View 
            style={{marginTop:20, width:'100%', height:'50%', borderRadius:20, padding:10}}  
            >
                <Text style={{color:COLORS.success}}>{allQuestions[currentQuestionIndex]?.note}</Text>
            </View>
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
                    backgroundColor:COLORS.error +'20' }}>
                <TouchableOpacity
                onPress={handleNext}
                style={{
                 width: '60%', backgroundColor: COLORS.success+'0', padding: 10, borderRadius:50
                }}>
                    <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
                <View 
            style={{marginTop:20, width:'100%', height:'50%', borderRadius:20, padding:10}}  
            >
                <Text style={{color:COLORS.success}}>{allQuestions[currentQuestionIndex]?.note}</Text>
            </View>
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
                    backgroundColor: COLORS.accent
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    return(
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               backgroundColor: COLORS.background,
               position:'relative'
           }}>

               {/* ProgressBar */}
               { renderProgressBar() }

               {/* Question */}
               {renderQuestion()}

               {renderOpition()}  

               {KTRA()}       
               {/* Next Button */}
               {renderNextButton()}
               {renderNextButtonErrow()}
               {/* Score Modal */}
               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                    <View style={{backgroundColor:COLORS.primary,paddingHorizontal:'3%',flexDirection:'row',justifyContent:'space-between'}}>
                     <TouchableOpacity onPress={()=> navigation.navigate('Root')} > 
                    <Image style={{
                        height:45,
                        width:45,
                    }}
                           source={require('../Assets/Images/Home.png')}
                    ></Image>
                    </TouchableOpacity >  
                    <TouchableOpacity onPress={()=> navigation.navigate('Modal')}>
                    <Image style={{
                        height:45,
                        width:45,
                    }}
                           source={require('../Assets/Images/Setting.png')}
                    ></Image>
                    </TouchableOpacity>
                    </View>
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.primary,
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
                           onPress={()=> navigation.navigate('Vocabularynext2')}
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
               </Modal>

               {/* Background Image */}
               <Image
                source={require('../Assets/Images/DottedBG.png')}
                style={{
                    width: '100%',
                    height: 130,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: 0.5
                }}
                resizeMode={'contain'}
                />

           </View>
       </SafeAreaView>
)
}

export default WriteDuolingoUnit1