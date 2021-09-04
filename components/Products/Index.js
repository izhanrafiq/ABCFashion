
import React, { Component,useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import Categories from './Categories';
import Notification from './Notification';
import ProductList from './ProductList';
import Slider from './Slider';
// import Footer from './Footer';
function Product(){
const [msgCount,setMsgCount]=useState(0);
const [notifyCount,setNotifyCount]=useState(0);
return(
    <View style={Styles.main}>
        <Notification msgCount={msgCount} notifyCount={notifyCount}/>
        <View style={Styles.categoryDiv}>
            <Text style={Styles.categoryTitle}>Categories</Text>
            <Categories/>
        </View>
        <View>
            <Text style={Styles.categoryTitle}>Latest</Text>
            <Slider/>
        </View>
        <ProductList/>
    </View>
)
}
const Styles = StyleSheet.create({
    main:{
        paddingHorizontal:10
    },
    categoryDiv:{
        display:'flex',
    },
    categoryTitle:{
        fontSize:32,
        fontWeight:"700",
        color:'rgb(95 ,99 ,103)'
    }
})

export default Product;