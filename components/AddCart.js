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
    Alert
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
            <View >
                <View flexDirection='column' >
                    <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 20, marginBottom: 20, marginLeft: 20 }}>Cart</Text>
                    <View flexDirection="column">
                        <View flexDirection='row'>
                            <Image style={{

                                width: 200,
                                height: 200,
                                borderRadius: 1000 / 2,
                                borderColor: 'white',
                                borderWidth: 2
                            }} source={require('../src/images/item1.jpg')} />
                            <View flexDirection='column'>
                                <Text style={styles.inText}>V Neck Shirt-PINK</Text>
                                <Text style={styles.inText}>1 PINK</Text>
                            </View>


                        </View>
                    </View>
                </View>
                <View style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 400 }}>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('AddCustomer')}>
                            <Text style={styles.loginText}>Checkout</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
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
        fontWeight: '300'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6f8',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: 'white',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 270,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },

    loginButton: {
        // backgroundColor: "#00b5ec",
        backgroundColor: "#ff6969",
    },
    loginText: {


        fontFamily: 'Neusa Next Std',

        color: 'white',
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 170,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#ff6969",
    },
    loginText: {
        color: 'white',
    }
});
