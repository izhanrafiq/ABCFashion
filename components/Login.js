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
// import Footer from './Footer';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Login'
    };
    state = {
        email: 'admin',
        password: 'admin'
    }

    onLoginButton = () => {
        console.log(">> on login button");
        if (this.state.email == this.state.password) {
            this.props.navigation.navigate('About');
            this.setState({
                email: '',
                password: ''
            });

        } else {
            alert('Username/Password should be admin/admin.');
        }
    }

    onForgotText = () => {
        //this.props.navigation.navigate('Forgot');
    }

    onRegister = () => {
        //this.props.navigation.navigate('Register');
    }

    render() {
        return (
            <View style={{display:'flex',height:'100%'}}>
                <View style={{display:"flex",height:'70%',justifyContent:'center',backgroundColor:"black"}}>
                <Image 
                style={{display:"flex", height:'15%',width:"100%",justifyContent:"center",resizeMode:"stretch",}}
                source={require('../src/images/logo_fashion.jpg')}/>

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={require('../src/images/man.png')} />
                    <TextInput style={styles.inputs}
                        placeholder="Username"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                        source={require('../src/images/padlock.png')} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
                <View>
                    <Text>Don't have an account? Swipe right to create</Text>
                    {/* <View style={{display:"flex",backgroundColor:'green',width:'100%'}}> */}
                    <Text style={{display:"flex",flexDirection:'',alignContent:"center"}}>a new account</Text>

                    {/* </View> */}
                </View>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
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
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 270,
        borderRadius: 30,
    },
    loginButton: {
        // backgroundColor: "#00b5ec",
        backgroundColor: "#ff6969",
    },
    loginText: {
        color: 'white',
    }
});
