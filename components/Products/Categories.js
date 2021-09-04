import React, { Component, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';
import shoeIcon from '../../src/images/shoeCate.jpeg';
import tShirtIcon from '../../src/images/tshirtCate.jpeg';
import beautyIcon from '../../src/images/beauty.jpeg';
import viewAllIcon from '../../src/images/seeall.png';

const CateItem = ({label,icon,isLast})=>{
    return(
        <View style={cateItemStyle.mainDiv}>
            <View style={cateItemStyle.itemDiv}>
                <TouchableOpacity>
                    <Image style={{...cateItemStyle.img,transform:isLast && [{rotate:'90deg'}]}} source={icon}/>
                </TouchableOpacity>
            </View>
            <Text style={cateItemStyle.text} >{label}</Text>
            
        </View>
    )
}

function Categories() {
    return(
        <View style={Styles.mainDiv}>
            <CateItem icon={tShirtIcon} label={'Apparel'}/>
            <CateItem icon={shoeIcon} label={'Shoes'}/>
            <CateItem icon={beautyIcon} label={'Beauty'}/>
            <CateItem isLast={true} icon={viewAllIcon} label={'See All'}/>
        </View>
    )
}

const cateItemStyle = StyleSheet.create({
    mainDiv:{
        width:"25%",
        height:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    itemDiv:{
        height:75,
        width:75,
        shadowColor:'rgb(95 ,99 ,103)',
        shadowOffset:{height:4},
        shadowOpacity:0.5,
        elevation:5,
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:50
    },
    text:{
        color:'rgb(95 ,99 ,103)',
        fontWeight:'400',
        fontSize:15,
        marginTop:5
    }
})

const Styles = StyleSheet.create({
    mainDiv:{
        paddingVertical:5,
        // backgroundColor:'lightgreen',
        // height:100,
        width:'100%',
        display:'flex',
        flexDirection:'row'
    },
    
})
export default Categories;