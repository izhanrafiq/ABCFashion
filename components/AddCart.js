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

export default class AddCart extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Cart'
    };

    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }} >
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 20, marginBottom: 20, marginLeft: 20 }}>Cart</Text>

                <View style={{
                    height: 50,
                    flex: 8,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                    <Image style={{

                        width: 200,
                        height: 200,
                        borderRadius: 1000 / 2,
                        borderColor: 'white',
                        borderWidth: 2
                    }} source={require('../src/images/item1.jpg')} />
                    <View style={{
                        flex: 7,

                    }}>
                        <Text style={styles.inText}>V Neck Shirt-PINK</Text>
                        <Text style={styles.inText}>1 PINK</Text>
                        <View>
                            <Text style={{ marginTop: 20, color: 'red', fontSize: 20, marginLeft: 20, marginBottom: 10 }}>$24.99</Text>

                        </View>
                        <View flexDirection='row'>
                            <Image style={{

                                width: 30,
                                height: 27,
                                marginLeft: 20,
                                marginRight: 10,
                                borderColor: 'white',

                            }} source={require('../src/images/add.jpeg')} />
                            <Text style={{ marginTop: 7 }}>1</Text>
                            <Image style={{
                                marginTop: 4,
                                width: 30,
                                height: 27,
                                marginLeft: 10,
                                borderColor: 'white',

                            }} source={require('../src/images/remove.jpeg')} />
                        </View>
                    </View>


                </View>



                <View style={{ flexDirection: 'column', flex: 2 }}>


                    <View style={styles.checkoutContainer}>

                        <TouchableHighlight style={[styles.checkoutContainer, styles.checkoutButton]} onPress={() => navigation.navigate('CheckoutPage')}>
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
}
const styles = StyleSheet.create({
    inputImage: {
        borderRadius: 200 / 2,
        width: 30
    },
    inText: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '300',
        marginLeft: 20
    },

    checkoutContainer: {
        flex: 2,
        flexDirection: 'column',
        alignSelf: 'flex-end',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        width: 170,
        borderRadius: 30,
    },
    checkoutButton: {
        backgroundColor: "#ff6969",
    },
    checkoutText: {
        color: 'white',
    },
    buttonadd: {
        backgroundColor: 'black',
        marginLeft: -90
    }
});
