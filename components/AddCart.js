import { RequireObjectCoercible } from 'es-abstract';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

export default AddCart = ({ navigation }) => {

    const navigationOptions = {
        headerTitle: 'Cart'
    };

    const nav = useNavigation()

    return (

        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignSelf: 'flex-start',
            //position: 'relative'
        }} >
            <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 20, marginBottom: 20, marginLeft: 20 }}>Cart</Text>

            <View style={{
                height: 50,
                flex: 8,
                flexDirection: 'row',
                // justifyContent: 'center',
                //alignItems: 'stretch',
            }}>
                <Image style={{

                    width: 200,
                    height: 200,
                    borderRadius: 1000 / 2,
                    borderColor: 'white',
                    borderWidth: 2
                }} source={require('../src/images/item1.jpg')} />
                {/* <View style={{
                        flex: 2,
                        flexDirection: 'column'

                    }}>

                        <View style={{ flex: 1 }} >
                            <Text style={styles.inText1}>V Neck Shirt-PINK</Text>
                            <Text style={styles.inText2}>1 PINK</Text>
                            <Text style={{ marginTop: 20, color: 'red', fontSize: 20, marginLeft: 20, marginBottom: 10, position: 'absolute' }}>$24.99</Text>

                        </View>
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <Image style={{
                                //flex: 1,
                                width: 30,
                                height: 27,
                                marginLeft: 20,
                                marginRight: 10,
                                marginTop: 60,
                                borderColor: 'white',
                                //display: 'flex'

                            }} source={require('../src/images/add.jpeg')} />
                            <Text style={{ marginTop: 65, marginLeft: 55, position: 'absolute' }}>1</Text>
                            <Image style={{
                                //flex: 1,
                                marginTop: 4,
                                width: 30,
                                height: 27,
                                marginLeft: 10,
                                // marginTop: 60,
                                borderColor: 'white',
                                // display: 'flex'

                            }} source={require('../src/images/remove.jpeg')} />
                        </View>
                        </View>*/}
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ fontWeight: '300', fontSize: 20 }}>V Neck Shirt-PINK</Text>
                    <Text style={{ fontWeight: '300', fontSize: 20 }}>1,PINK</Text>
                    <Text style={{ fontWeight: '300', fontSize: 20, marginTop: 20, marginLeft: 10, color: 'red' }}>$24.99</Text>
                    <View flexDirection="row">
                        <Image style={{
                            width: 30,
                            height: 27,
                            marginTop: 20
                        }} source={require('../src/images/remove.jpeg')}></Image>
                        <Text style={{ marginTop: 22, marginLeft: 10 }}>1</Text>
                        <Image style={{
                            width: 30,
                            height: 27,
                            marginTop: 20,
                            marginLeft: 10
                        }} source={require('../src/images/add.jpeg')}></Image>
                    </View>
                </View>

            </View>



            <View style={{ flexDirection: 'column', flex: 2 }}>


                <View style={styles.checkoutContainer}>

                    <TouchableHighlight style={[styles.checkoutContainer, styles.checkoutButton]} onPress={() => nav.navigate('OrderPlaced')}>
                        <View>
                            <Text style={styles.checkoutText}>Checkout</Text>
                            <Image source={require('../src/images/arrownew.png')} style={{ borderRadius: 50, width: 35, height: 35, position: 'absolute', right: -50, marginTop: -10 }} />

                        </View>
                    </TouchableHighlight>

                </View>
                <View style={{ flex: 1, flexDirection: 'column', position: 'absolute', marginLeft: 10 }}>
                    <Text style={{ fontWeight: '200' }}>TOTAL</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$24.99</Text>
                    <Text style={{ fontSize: 15, fontWeight: '300' }}>Free Domestic Shipping</Text>
                </View>

            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    inputImage: {
        borderRadius: 200 / 2,
        width: 30
    },
    inText1: {
        flex: 1,
        marginTop: 20,
        fontSize: 20,
        fontWeight: '300',
        marginLeft: 20,
        position: 'absolute',
        display: 'flex'
    },
    inText2: {
        //flex: 1,
        marginTop: 50,
        fontSize: 20,
        fontWeight: '300',
        marginLeft: 20,
        position: 'absolute',
        display: 'flex'
    },

    checkoutContainer: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-end',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        marginBottom: 25,
        width: 280,
        borderRadius: 30,
        marginStart: 110
    },
    checkoutButton: {
        flexDirection: 'row',
        // justifyContent: 'center',
        backgroundColor: "#ff6969",
        alignSelf: 'flex-end'
    },
    checkoutText: {
        color: 'white',
    },
    buttonadd: {
        backgroundColor: 'black',
        marginLeft: -90
    }
});
