import React, { Component, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Alert,
    SafeAreaView
} from 'react-native';
import cartIcon from '../src/images/cart.png';
import backBtn from '../src/images/back.png';
import { bold } from 'chalk';



const ProductPage = (props) => {
    const [state, setState]= useState({ selectedButton:null});


    const Buttons=()=>{
        return(
            <View style={{flexDirection:'row'}}>
            <TouchableHighlight   onPress={() => selectionOnPress("Product")}
                style={{
                    backgroundColor:
                    state.selectedButton === "Product"
                    ? "#ffffff"
                            : "#f2f2f2",
                            height: 45,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 20,
                            width: 90,
                            borderRadius: 50,
                    
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: state.selectedButton === "Product"
                        ? "#ed726e" : "#747c8c",
                    }}>Product</Text>
                </TouchableHighlight>
               
 
                <TouchableHighlight   onPress={() => selectionOnPress("Details")}
                style={{
                    backgroundColor:
                    state.selectedButton === "Details"
                    ? "#ffffff"
                            : "#f2f2f2",
                            height: 45,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 20,
                            width: 90,
                            borderRadius: 50,
                            marginLeft:10,
                    
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: state.selectedButton === "Details"
                        ? "#ed726e" : "#747c8c",
                    }}
                        >Details</Text>
                </TouchableHighlight>

                <TouchableHighlight   onPress={() => selectionOnPress("Reviews")}
                style={{
                    backgroundColor:
                    state.selectedButton === "Reviews"
                    ? "#ffffff"
                            : "#f2f2f2",
                            height: 45,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 20,
                            width: 90,
                            borderRadius: 50,
                            marginLeft:1,
                    
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: state.selectedButton === "Reviews"
                        ? "#ed726e" : "#747c8c",
                    }}
                    >Reviews</Text>
                </TouchableHighlight>
        </View>
        );
    
    }
    
    let selectionOnPress=(btnType)=> {
        setState({selectedButton:btnType});
    }
        
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <View style={{flexDirection:'row'}}>
                <Image source={backBtn} style={styles.back}/>
                <Text style={styles.title}>V Neck Shirt - Pink </Text>
                <Image source={cartIcon} style={styles.img}/>
                </View>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.price}>$24.99</Text>
                
            </View>
            <View style={styles.pImg}>
            <Image source={require('../src/images/item1.jpg')} style={styles.pImage}/>
            </View>
            <View style={styles.btn}>
                <Buttons/>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.clrText}>SELECT COLOR</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:20, marginLeft:15}}>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    style={styles.roundButton1}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.roundButton2}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.roundButton3}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.roundButton4}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.roundButton5}>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.roundButton6}>
                </TouchableOpacity>
                </View>
            </View>
            <View  style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                <TouchableHighlight style={styles.share} >
                    <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',position:'relative'}}>
                    <Text style={styles.shareText}>SHARE THIS</Text>
                    <Image source={require('../src/images/up.png')} style={{borderRadius:50,width:35,height:35,position:'absolute',right:10}}/>
                        
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.addCart} >
                    <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',position:'relative'}}>
                    <Text style={styles.addText}>ADD TO CART</Text>
                    <Image source={require('../src/images/right.png')} style={{borderRadius:50,width:35,height:35,position:'absolute',right:10}}/>
                        
                    </View>
                </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        
    },
    btn:{
        flexDirection: 'column',
        marginTop:50,
        marginLeft:60,
        },
    bar:{
        flexDirection:'column',

    },

    price:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:140,
    },
    title:{
        fontSize: 20, 
        fontWeight: '200',
        marginLeft: 90,
        marginTop: 15,
    },
    back:{
        width:25,
        height:25,
        marginLeft:10,
        marginTop: 10,
    },
    img:{
        width:25,
        height:25,
        marginLeft:60,
        marginTop: 10,
    },
    pImg:{
        flexDirection: 'column'
    }, 
    pImage:{
        position:'relative',
        marginLeft:110,
        marginTop:40,    
    },
    clrText:{
        color:'#a8adb7',
        fontSize:14,
        fontWeight:'400',
        marginLeft:20
    },
    roundButton1: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#dc5d96',
    },
    roundButton2: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        marginLeft:8,
        backgroundColor: '#e57371',
    },
    roundButton3: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        marginLeft:8,
        backgroundColor: '#79b3f1',
    },
    roundButton4: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        marginLeft:8,
        backgroundColor: 'white',
    },
    roundButton5: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        marginLeft:8,
        backgroundColor: '#c9c9c9',
    },
    roundButton6: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        marginLeft:8,
        backgroundColor: '#3d3a3a',
    },
    share:{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop:50,
        marginLeft:10,
        width: 185,
        borderRadius: 30,
        backgroundColor: "white"
    },
    addCart:{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop:50,
        marginLeft:5,
        width: 185,
        borderRadius: 30,
        backgroundColor: "#ed726e"
    },
    shareText:{
        color:'#747c8c',
    },
    addText:{
        color:'white'
    }

});
export default ProductPage;