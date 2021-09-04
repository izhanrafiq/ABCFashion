import React, { Component, useCallback, useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import slide1 from './../../src/images/carolsel/slide1.jpg';
import slide2 from './../../src/images/carolsel/slide2.jpg';
import slide3 from './../../src/images/carolsel/slide3.jpg';
import arrowIcon from './../../src/images/arrownew.png';

const caroItem =[
    {imageSrc:slide1,desc:'For all your summer doing needs '},
    {imageSrc:slide2,desc:'For all your summer doing needs '},
    {imageSrc:slide3,desc:'For all your summer doing needs '},
]

function Slider() {
    const [activeIndex,setActiveIndex]=useState(0)
    const [caroselItem,setCaroselItem]=useState(caroItem);
    const ref = useRef(null);
    const renderItem = useCallback(({item,index})=>(
        <View style={sliderStyle.main}>
            <View style={sliderStyle.slideDiv}>
                <Image style={sliderStyle.slideImg} source={item.imageSrc}/>
                <View style={sliderStyle.desc}>
                    <Text style={{color:'#fff',fontSize:20}}>{item.desc}</Text>
                </View>
                <View style={{position:'absolute'}}>
                    <TouchableOpacity style={{position:'absolute',right:0,top:30}}>
                        <View style={sliderStyle.btnDiv}>
                            <Text style={{color:'rgb(95 ,99 ,103)'}}>See All</Text>
                            <Image source={arrowIcon} style={sliderStyle.arrIcon}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    ),[])
    return(
            <View style={{display:'flex',flexDirection:"row",justifyContent:"center",height:200}}>
                <Carousel
                    autoplay={true}
                    loop={true}
                    verticle
                    layout="default" 
                    ref={ref} 
                    data={caroselItem} 
                    sliderWidth={100} 
                    itemWidth={320} 
                    renderItem={renderItem} 
                    onSnapToItem={(index)=>(setActiveIndex(index))}
                />
            </View>
    )
}
const sliderStyle = StyleSheet.create({
    main:{
        width:"100%",
        height:'100%'
    },
    slideDiv:{
        width:'100%',
        height:'100%',
        borderRadius:9,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },
    slideImg:{
        width:'90%',
        height:'90%',
        borderRadius:10
    },
    btnDiv:{
        position:'relative',
        paddingLeft:20,
        backgroundColor:'white',
        borderRadius:50,
        minWidth:120,
        height:40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    arrIcon:{
        position:'absolute',
        right:0,
        width:35,
        height:35,
        marginRight:5
    },
    desc:{
        width:'50%',
        height:'50%',
        position:'absolute',
        left:50,
        top:30
    },

})

export default Slider;