import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, ImageBackground, TouchableHighlight } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
const GameUnit1Memory = ({navigation}) => {
    let dem = 0;
    const [ShowPictureO, SetShowPictureO] = useState(true);
    const [ShowPictureT, SetShowPictureT] = useState(true);
    const [ShowPictureTh, SetShowPictureTh] = useState(true);
    const [ShowPictureF, SetShowPictureF] = useState(true);
    const [ShowPictureFi, SetShowPictureFi] = useState(true);
    const [ShowPictureS, SetShowPictureS] = useState(true);
    const [ShowPictureSe, SetShowPictureSe] = useState(true);
    const [ShowPictureE, SetShowPictureE] = useState(true);
    const [ShowPictureN, SetShowPictureN] = useState(true);
    const [CurrentPictureO, SetCurrentPictureO] = useState(true);
    const [CurrentPictureT, SetCurrentPictureT] = useState(true);
    const [CurrentPictureTh, SetCurrentPictureTh] = useState(true);
    const [CurrentPictureF, SetCurrentPictureF] = useState(true);
    const [CurrentPictureFi, SetCurrentPictureFi] = useState(true);
    const [CurrentPictureS, SetCurrentPictureS] = useState(true);
    const [CurrentPictureSe, SetCurrentPictureSe] = useState(true);
    const [CurrentPictureE, SetCurrentPictureE] = useState(true);
    const [CurrentPictureN, SetCurrentPictureN] = useState(true);
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 0,
            duration: 10000,
          }
        ).start();
      }, [fadeAnim])
    // (CurrentPictureO == false || CurrentPictureT == false || CurrentPictureTh == false || CurrentPictureF = false ||CurrentPictureFi == false || CurrentPictureS == false ||CurrentPictureSe == false || CurrentPictureE == false)
    const adm =() =>
    {
        SetCurrentPictureO(true); 
        SetCurrentPictureT(true);
        SetCurrentPictureTh(true);
        SetCurrentPictureF(true);
        SetCurrentPictureFi(true);
        SetCurrentPictureS(true);
        SetCurrentPictureSe(true);
        SetCurrentPictureE(true);
        SetCurrentPictureN(true);

    }
    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 10
            }}>
                {/* Question */}
                <Text style={{
                    color: 'black',
                    fontSize: 30
                }}>Please, Choose the same Photo</Text>
            </View>
        )
    }

    const RenderOptionCorrect = (Option) =>
    {
        if (Option == 1 || Option == 4)
        {
            if ((Option == 1 && CurrentPictureF == true && (CurrentPictureO == false || CurrentPictureT == false || CurrentPictureTh == false || CurrentPictureF == false ||CurrentPictureFi == false || CurrentPictureS == false ||CurrentPictureSe == false || CurrentPictureE == false) ) || (Option == 4 && CurrentPictureO == true && (CurrentPictureO == false || CurrentPictureT == false || CurrentPictureTh == false || CurrentPictureF == false ||CurrentPictureFi == false || CurrentPictureS == false ||CurrentPictureSe == false || CurrentPictureE == false)))
            {
                setTimeout(() => {
                    {adm()};
                }, 500);
                
            }
            if (Option == 1 && CurrentPictureO == true)
            {
                    SetCurrentPictureO(false);
            }
            if (Option == 4 && CurrentPictureF == true)
            {
                SetCurrentPictureF(false);
            }
            if ((Option == 1 && CurrentPictureF == false) || (Option == 4 && CurrentPictureO == false))
            {
                setTimeout(() => {
                    SetShowPictureO(false);
                    SetShowPictureF(false);
                }, 500);
            }
            
        }
        //26
        if (Option == 2 || Option == 6)
        {
            if ((Option == 2 && CurrentPictureS == true && (CurrentPictureO == false || CurrentPictureT == false || CurrentPictureTh == false || CurrentPictureF == false ||CurrentPictureFi == false || CurrentPictureS == false ||CurrentPictureSe == false || CurrentPictureE == false) ) || (Option == 6 && CurrentPictureT == true && (CurrentPictureO == false || CurrentPictureT == false || CurrentPictureTh == false || CurrentPictureF == false ||CurrentPictureFi == false || CurrentPictureS == false ||CurrentPictureSe == false || CurrentPictureE == false)))
            {
                setTimeout(() => {
                    {adm()};
                }, 500);
            }
            if (Option == 2 && CurrentPictureT == true)
            {
                    SetCurrentPictureT(false);
            }
            if (Option == 6 && CurrentPictureS == true)
            {
                SetCurrentPictureS(false);
            }
            if ((Option == 2 && CurrentPictureS == false) || (Option == 6 && CurrentPictureT == false))
            {
                setTimeout(() => {
                    SetShowPictureT(false);
                    SetShowPictureS(false);
                }, 500);
            }
            
        }
        //37
        if (Option == 3 || Option == 7)
        {
            if ((Option == 3 && CurrentPictureSe == true && (CurrentPictureO == false || CurrentPictureT == false || CurrentPictureTh == false || CurrentPictureF == false ||CurrentPictureFi == false || CurrentPictureS == false ||CurrentPictureSe == false || CurrentPictureE == false) ) || (Option == 7 && CurrentPictureTh == true && (CurrentPictureO == false || CurrentPictureT == false || CurrentPictureTh == false || CurrentPictureF == false ||CurrentPictureFi == false || CurrentPictureS == false ||CurrentPictureSe == false || CurrentPictureE == false)))
            {
                setTimeout(() => {
                    {adm()};
                }, 500);
                
            }
            if (Option == 3 && CurrentPictureTh == true)
            {
                    SetCurrentPictureTh(false);
            }
            if (Option == 7 && CurrentPictureSe == true)
            {
                SetCurrentPictureSe(false);
            }
            if ((Option == 3 && CurrentPictureSe == false) || (Option == 7 && CurrentPictureTh == false))
            {
                setTimeout(() => {
                    SetShowPictureTh(false);
                    SetShowPictureSe(false);
                }, 500);
            }
        }
            //58
            if (Option == 5 || Option == 8)
            {
            if ((Option == 5 && CurrentPictureE == true && (CurrentPictureO == false || CurrentPictureT == false || CurrentPictureTh == false || CurrentPictureF == false ||CurrentPictureFi == false || CurrentPictureS == false ||CurrentPictureSe == false || CurrentPictureE == false) ) || (Option == 8 && CurrentPictureFi == true && (CurrentPictureO == false || CurrentPictureT == false || CurrentPictureTh == false || CurrentPictureF == false ||CurrentPictureFi == false || CurrentPictureS == false ||CurrentPictureSe == false || CurrentPictureE == false)))
            {
                setTimeout(() => {
                    {adm()};
                }, 500);
                
            }
            if (Option == 5 && CurrentPictureFi == true)
            {
                    SetCurrentPictureFi(false);
            }
            if (Option == 8 && CurrentPictureE == true)
            {
                SetCurrentPictureE(false);
            }
            if ((Option == 5 && CurrentPictureE == false) || (Option == 8 && CurrentPictureFi == false))
            {
                setTimeout(() => {
                    SetShowPictureFi(false);
                    SetShowPictureE(false);
                }, 500);
            }
        }
    }
      const renderOptionsO = () => {
        let O = 1;
        if (ShowPictureO)
            {
                if (CurrentPictureO)
                {
                    return(
                        <TouchableOpacity
                        onPress={() => {RenderOptionCorrect(O)}}
                        style={{ backgroundColor:'pink', borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center' 
                         }}>
                                <Text style={{fontSize:30, color:'red'}}>1</Text>
                        </TouchableOpacity>
                    )
                }
                else
                {
                    return(
                        <TouchableHighlight
                        style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center'
                            
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/charger.png')}></Image>                
                        </TouchableHighlight>
                    )
                }
            }
            else
            {
                return (
                    <Animated.View 
                        style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center', opacity: fadeAnim
                            
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/charger.png')}></Image>                
                    </Animated.View>
                )
            }
    }
    {/*Two*/}
    const renderOptionsT = () => {
        if (ShowPictureT)
            {
                if (CurrentPictureT)
                {
                    let T = 2;
                    return(
                        <TouchableOpacity
                        onPress={() => RenderOptionCorrect(T)}
                        style={{ backgroundColor:'pink', borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center'
                            
                         }}>
                                <Text style={{fontSize:30, color:'red'}}>2</Text>
                        
                        </TouchableOpacity>
                    )
                }
                else
                {
                    let T = '2'
                    return(
                        <TouchableOpacity 
                            style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center'
                            
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/cp1.png')}></Image>
                       
                        </TouchableOpacity>
                    )
                }
            }
            else
            {
                    return (
                        <Animated.View 
                            style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center', opacity: fadeAnim
                                
                            }}>
                                   <Image style={{width:'80%',height:'80%'}} source={require('../Assets/cp1.png')}></Image>                
                        </Animated.View>
                    )
                
            }
    }
    {/*Three*/}
    const renderOptionsTh = () => {
        if (ShowPictureTh)
            {
                if (CurrentPictureTh)
                {
                    let Th = 3;
                    return(
                        <TouchableOpacity
                        onPress={() => RenderOptionCorrect(Th)}
                        style={{ backgroundColor:'pink', borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center'
                            
                         }}>
                                <Text style={{fontSize:30, color:'red'}}>{Th}</Text>
                        
                        </TouchableOpacity>
                    )
                }
                else
                {
                    let Th = '3'
                    return(
                        <TouchableOpacity 
                            style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center' 
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/infinite.png')}></Image>
                        </TouchableOpacity>
                    )
                }
            }
            else
            {
                return (
                    <Animated.View 
                        style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center', opacity: fadeAnim
                            
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/infinite.png')}></Image>                
                    </Animated.View>
                )
            }
    }
    {/*Four*/}
    const renderOptionsF = () => {
        let F = 4;
        if (ShowPictureF)
            {
                if (CurrentPictureF)
                {   
                    return(
                        <TouchableOpacity
                        onPress={() => RenderOptionCorrect(F)}
                        style={{ backgroundColor:'pink', borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center'
                            
                         }}>
                                <Text style={{fontSize:30, color:'red'}}>{4}</Text>
                        
                        </TouchableOpacity>
                    )
                }
                else
                {
                    return(
                        <TouchableOpacity 
                            style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center' 
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/charger.png')}></Image>
                        </TouchableOpacity>
                    )
                }
            }
            else
            {
                return (
                    <Animated.View 
                        style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center', opacity: fadeAnim
                            
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/charger.png')}></Image>                
                    </Animated.View>
                )
            }
    }
    {/*Five*/}
    const renderOptionsFi = () => {
        if (ShowPictureFi)
            {
                if (CurrentPictureFi)
                {
                    let Fi = 5;
                    return(
                        <TouchableOpacity
                        onPress={() => RenderOptionCorrect(Fi)}
                        style={{ backgroundColor:'pink', borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center'
                            
                         }}>
                                <Text style={{fontSize:30, color:'red'}}>{Fi}</Text>
                        
                        </TouchableOpacity>
                    )
                }
                else
                {
                    let Fi = 16
                    return(
                        <TouchableOpacity 
                            style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center' 
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/zinc.png')}></Image>
                        </TouchableOpacity>
                    )
                }
            }
            else
            {
                return (
                    <Animated.View 
                        style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center', opacity: fadeAnim
                            
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/zinc.png')}></Image>                
                    </Animated.View>
                )
            }
    }
    {/*Six*/}
    const renderOptionsS = () => {
        if (ShowPictureS)
            {
                if (CurrentPictureS)
                {
                    let S = 6;
                    return(
                        <TouchableOpacity
                        onPress={() => RenderOptionCorrect(S)}
                        style={{ backgroundColor:'pink', borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center'
                            
                         }}>
                                <Text style={{fontSize:30, color:'red'}}>{S}</Text>
                        
                        </TouchableOpacity>
                    )
                }
                else
                {
                    let S = 17
                    return(
                        <TouchableOpacity 
                            style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center' 
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/cp1.png')}></Image>
                        </TouchableOpacity>
                    )
                }
            }
            else
            {
                return (
                    <Animated.View 
                        style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center', opacity: fadeAnim
                            
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/cp1.png')}></Image>                
                    </Animated.View>
                )
            }
    }
    {/*Seven*/}
    const renderOptionsSe = () => {
        if (ShowPictureSe)
            {
                if (CurrentPictureSe)
                {
                    let Se = 7;
                    return(
                        <TouchableOpacity
                        onPress={() => RenderOptionCorrect(Se)}
                        style={{ backgroundColor:'pink', borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center'
                            
                         }}>
                                <Text style={{fontSize:30, color:'red'}}>{Se}</Text>
                        
                        </TouchableOpacity>
                    )
                }
                else
                {
                    let Se = 18
                    return(
                        <TouchableOpacity 
                            style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center' 
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/infinite.png')}></Image>
                        </TouchableOpacity>
                    )
                }
            }
            else
            {
                return (
                    <Animated.View 
                        style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center', opacity: fadeAnim
                            
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/infinite.png')}></Image>                
                    </Animated.View>
                )
            }
    }
    {/*Eight*/}
    const renderOptionsE = () => {
        if (ShowPictureE)
            {
                if (CurrentPictureE)
                {
                    let E = 8;
                    return(
                        <TouchableOpacity
                        onPress={() => RenderOptionCorrect(E)}
                        style={{ backgroundColor:'pink', borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center'
                            
                         }}>
                                <Text style={{fontSize:30, color:'red'}}>{E}</Text>
                        
                        </TouchableOpacity>
                    )
                }
                else
                {
                    let E = 19
                    return(
                        <TouchableOpacity 
                        
                            style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center' 
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/zinc.png')}></Image>
                        </TouchableOpacity>
                    )
                }
            }
            else
            {
                return (
                    <Animated.View 
                        style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center', opacity: fadeAnim
                            
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/zinc.png')}></Image>                
                    </Animated.View>
                )
            }
    }
    {/*Nine*/}
    const renderOptionsN = () => {
        if (ShowPictureN)
            {
                if (CurrentPictureN)
                {
                    let N= 9;
                    return(
                        <TouchableOpacity
                        onPress={() => RenderOptionCorrect(N)}
                        style={{ backgroundColor:'pink', borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center'
                            
                         }}>
                                <Text style={{fontSize:30, color:'red'}}>{N}</Text>
                        
                        </TouchableOpacity>
                    )
                }
                else
                {
                    let N = 20
                    return(
                        <TouchableOpacity 
                            style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center' 
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/charger.png')}></Image>
                        </TouchableOpacity>
                    )
                }
            }
            else
            {
                return (
                    <Animated.View 
                        style={{ borderRadius:10, width:'27%', height:'100%',borderWidth:1,justifyContent:'center',alignItems:'center', opacity: fadeAnim
                            
                        }}>
                               <Image style={{width:'80%',height:'80%'}} source={require('../Assets/charger.png')}></Image>                
                    </Animated.View>
                )
            }
    }  
    return(
        <ImageBackground source={require('../Assets/19366.jpg')}
        style={{height:'100%',width:'100%', opacity:1}}
        >
           <StatusBar barStyle='dark-content'/>
           
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
                
               {/* Question */}
               {renderQuestion()}
               <View style={{height:'16%', flexDirection:'row', justifyContent:'space-between',marginHorizontal:'2%', marginTop:'5%'}}>
               {/* Options */}

               {renderOptionsO()}
               {renderOptionsT()}
               {renderOptionsTh()}
               </View>
               <View style={{height:'16%', flexDirection:'row', justifyContent:'space-between',marginHorizontal:'2%', marginTop:'5%'}}>
               {/* Options */}

               {renderOptionsF()}
               {renderOptionsFi()}
               {renderOptionsS()}
               </View>
               <View style={{height:'16%', flexDirection:'row', justifyContent:'space-between',marginHorizontal:'2%', marginTop:'5%'}}>
               {/* Options */}

               {renderOptionsSe()}
               {renderOptionsE()}
               {renderOptionsN()}
               </View>
               <Text>{dem}</Text>

               
           </View>
           </ImageBackground>
       
) 
}

export default GameUnit1Memory