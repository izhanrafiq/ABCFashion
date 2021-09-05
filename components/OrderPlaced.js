import React, { Component } from 'react';
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


const OrderPlaced = (props) => {
    
    

        
    return (
        <View style={styles.container}>
            <View style={styles.topBox}>
            <Image style={styles.image} source={require('../public/images/orderok.png')} />
        </View>
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row', marginTop:100, justifyContent:'center', alignItems: 'center'}}>
                         <Text style={{fontSize:30, color:'#535c6d'}}>Order Placed!</Text>
                </View>
                </View>
                <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row', marginTop:20,alignContent:'center', justifyContent: 'center'}}>
                <Text style={{fontSize:20, color:'#535c6d'}}>
                Your order was placed successfully. For more details, check All My Orders page under Profile tab
                </Text>
                    </View>
                    </View>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
                    <View style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',position:'relative'}}>
                    <Text style={styles.loginText}>ORDER MORE</Text>
                    <Image source={require('../src/images/arrownew.png')} style={{borderRadius:50,width:35,height:35,position:'absolute',right:10}}/>
                        
                    </View>
                </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({

topBox: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
},
image:{
    flexDirection: 'row',
},
headline: {
    fontWeight: 'bold',
    fontSize: 18,
    color:"#FF6969",
marginTop: 0,
    width: 250,
    height: 80,
backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
},

otherContainer: {
    
flex: 2,
flexDirection: 'column',
backgroundColor: 'lightgray',
justifyContent: 'center',
alignItems: 'center',
fontWeight: 'bold',
    fontSize: 18,
    color:"#FF6969",

},
buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop:50,
    marginLeft:30,
    width: 300,
    borderRadius: 30,
},
loginButton: {
    // backgroundColor: "#00b5ec",
    
    backgroundColor: "#ff6969",
},
loginText: {
    color: 'white',
    fontSize:16,
    fontWeight:"900"
}

});


export default OrderPlaced;
