import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableHighlight } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
    Button,
} from 'react-native-paper';
import { ListItem } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

//Icon add in the above list
//import { getCustomers, deleteCustomer } from "../service/CustomerDB1";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from './Products/Notification';



const list1 = [
    {
        title: 'Shipping Address',
        icon: 'flag-outline'
    },
    {
        title: 'Payment Method',
        icon: 'receipt'
    },
    {
        title: 'Currency                                           USD',
        icon: 'home-currency-usd'
    },
    {
        title: 'Language                                       English',
        icon: 'translate'
    },
    // more items
];






const MoreScreen = ({ navigation }) => {

    const [msgCount, setMsgCount] = useState(0);
    const [notifyCount, setNotifyCount] = useState(0);

    const nav = useNavigation()


    return (
        <SafeAreaView style={styles.container}>
            <Notification sytle={{ marginRight: 0 }} msgCount={msgCount} notifyCount={notifyCount} />

            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontWeight: '500', marginLeft: 20, marginTop: 20, fontSize: 40, marginBottom: 30 }}>More</Text>
            </View>

            { /*}     <View style={styles.userInfoSection}>
        <View style={styles.row}>
    
          <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
      
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
      
          <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
        </View>
        </View> */}





            <View>
                {
                    list1.map((item, i) => (
                        <ListItem key={i} bottomDivider>
                            <Icon name={item.icon} />
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    ))
                }
            </View>
            <Text></Text>
            <View style={{ justifyContent: 'center', marginTop: 40 }}>
                <Button onPress={() => nav.navigate('Login')} ><Text style={{ color: 'red' }}>LOG OUT</Text></Button>
            </View>
        </SafeAreaView>
    );
};

export default MoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    buttonContainer: {

        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#ffffff",
    },
    loginText: {
        color: '#777777',
    },
});