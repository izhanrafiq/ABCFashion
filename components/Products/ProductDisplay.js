import { useNavigation } from '@react-navigation/native';
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
const path = './../../src/images/productlist'
const ProductDisplay = ({imgSrc,prodName,price,width,height})=>{
    const navigation = useNavigation();
    // const imgPath = path+imgSrc
    // console.log('ooooooo',imgPath,typeof imgPath);
    return(
        <View style={[productItemStyle.mainDiv,{width,height}]}>
            <TouchableOpacity style={{width:'100%'}} onPress={()=>{navigation.navigate('ProductPage',{name: prodName, img: imgSrc})}}>

            <View style={{height:"80%",width:"100%"}}>
                    <Image style={productItemStyle.img} source={imgSrc}/>
            </View>
            <Text style={productItemStyle.prodName}>{prodName}</Text>
            <Text style={productItemStyle.prodPrice}>{price}</Text>
            </TouchableOpacity>
        </View>
    )
}

const productItemStyle = StyleSheet.create({
    mainDiv:{
        height:"100%",
        width:"30%",
        backgroundColor:'white',
        borderRadius:10,
        padding:10,
    },
    img:{
        height:"90%",
        width:"100%",
        resizeMode:"stretch"
    },
    prodName:{
        marginLeft:8,
        fontSize:12,
        color:"rgb(95 ,99 ,103)"
    },
    prodPrice:{
        marginLeft:8,
        fontWeight:"bold",
        fontSize:15,
        marginTop:2,
        color:"rgb(95 ,99 ,103)"
    },
})
export default ProductDisplay;