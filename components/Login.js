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
import AddCart from './AddCart';

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
    console.log('>> on login button');
    if (this.state.email == this.state.password) {
      this.props.navigation.navigate('Navigation');
      //   this.props.navigation.navigate('Cart');
      this.setState({
        email: '',
        password: '',
      });
    } else {
      alert('Username/Password should be admin/admin.');
    }

    onForgotText = () => {
        //this.props.navigation.navigate('Forgot');
    }

    onRegister = () => {
        //this.props.navigation.navigate('Register');
    }
  }
    render() {
        return (
            <View style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <View style={{ display: "flex", marginTop: 50, height: '10%', justifyContent: 'center', backgroundColor: "black" }}>
                    <Image
                        style={{ display: "flex", height: '100%', width: "100%", justifyContent: "center" }}
                        source={require('../src/images/logo_fashion.jpg')} />
                </View>

                <View style={styles.container}>
                    <View style={{ backgroundColor: 'white', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 150, width: '80%' }}>
                        <View style={{ ...styles.inputContainer, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
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
                    </View>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                            <Text style={styles.loginText}>Log In</Text>
                            <Image source={require('../src/images/arrownew.png')} style={{ borderRadius: 50, width: 35, height: 35, position: 'absolute', right: 10 }} />

                        </View>
                    </TouchableHighlight>
                    <View>
                        <Text>Don't have an account? Swipe right to create</Text>
                        {/* <View style={{display:"flex",backgroundColor:'green',width:'100%'}}> */}
                        <Text style={{ display: "flex", justifyContent: "center", textAlign: 'center' }}>a new account</Text>

                        {/* </View> */}
                    </View>
                </View>

            </View>
        );
    }
}

/*
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <View
            style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <View
              style={{
                display: 'flex',
                marginTop: 50,
                height: '10%',
                justifyContent: 'center',
                backgroundColor: 'black',
              }}>
              <Image
                style={{
                  display: 'flex',
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                }}
                source={require('../src/images/logo_fashion.jpg')}
              />
            </View>

            <View style={styles.container}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 150,
                  width: '80%',
                }}>
                <View
                  style={{
                    ...styles.inputContainer,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                  }}>
                  <Image
                    style={styles.inputIcon}
                    source={require('../src/images/man.png')}
                  />
                  <TextInput
                    style={styles.inputs}
                    placeholder="Username"
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Image
                    style={styles.inputIcon}
                    source={require('../src/images/padlock.png')}
                  />
                  <TextInput
                    style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                  />
                </View>
              </View>

              <TouchableHighlight
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => this.onLoginButton()}>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}>
                  <Text style={styles.loginText}>Log In</Text>
                  <Image
                    source={require('../src/images/arrownew.png')}
                    style={{
                      borderRadius: 50,
                      width: 35,
                      height: 35,
                      position: 'absolute',
                      right: 10,
                    }}
                  />
                </View>
              </TouchableHighlight>
              <View>
                <Text>Don't have an account? Swipe right to create</Text>
                <Text
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  a new account
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
*/

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        // flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6f8',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: 'white',
        borderRadius: 10,
        // borderBottomWidth: 1,
        width: "95%",
        height: "45%",
        // marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: "45%",
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
        marginTop: 20,
        width: 300,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#ff6969",
    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "900"
    }
});
