import * as React from 'react';
import { Image,FlatList,TouchableHighlight, SafeAreaView, StatusBar, Button,StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from './Screens/Home'
import SearchScreen from './Screens/Search'
import CartScreen from './Screens/Cart'
import ProfileScreen from './Screens/Profile'
import MoreScreen from './Screens/More'

const homeName = 'Home'
const searchName = 'Search'
const cartName = 'Cart'
const profileName = 'Profile'
const moreName = 'More'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === cartName) {
              iconName = focused ? 'cart' : 'cart-outline';

            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            } else if (rn === moreName) {
              iconName = focused ? 'menu' : 'menu-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF6969',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={cartName} component={CartScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
        <Tab.Screen name={moreName} component={MoreScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


