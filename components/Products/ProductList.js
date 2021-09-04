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
import product1 from './../../src/images/productlist/product1.jpg';
import product2 from './../../src/images/productlist/product2.jpg';
import product3 from './../../src/images/productlist/product3.jpg';

const ProductItem = ({imgSrc,prodName,price})=>{
    return(
        <View style={productItemStyle.mainDiv}>
            <TouchableOpacity style={{width:'100%'}}>
            <View style={{height:"80%",width:"100%"}}>
                    <Image style={productItemStyle.img} source={imgSrc}/>
            </View>
            <Text style={productItemStyle.prodName}>{prodName}</Text>
            <Text style={productItemStyle.prodPrice}>{price}</Text>
            </TouchableOpacity>
        </View>
    )
}

function ProductList() {
    return (
        <View style={{marginTop:10,paddingVertical:10, height:200,width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:'wrap'}}>
            <ProductItem imgSrc={product1} prodName='V Tshirt' price="$1000.00"/>
            <ProductItem imgSrc={product2} prodName='V Tshirt' price="$1000.00"/>
            <ProductItem imgSrc={product3} prodName='V Tshirt' price="$1000.00"/>
        </View>
    )
}

const productItemStyle = StyleSheet.create({
    mainDiv:{
        height:"100%",
        width:"30%",
        backgroundColor:'white',
        borderRadius:10,
        padding:10
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

export default ProductList;