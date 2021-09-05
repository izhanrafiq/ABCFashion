import * as React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Product from './components/Products/Index';
import AddCart from './components/AddCart';
import SearchProduct from './components/Search/index';
import Navigation from './components/Navigation';
import OrderPlaced from './components/OrderPlaced';
import ProductPage from './components/ProductPage';
import EditProfileScreen from './components/EditProfile';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#ff6969',
            },
            headerTintColor: 'white',
          }}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#ff6969',
            },
            headerTintColor: 'white',
          }}
          name="Product"
          component={Product}
        />

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#ff6969',
            },
            headerTintColor: 'white',
          }}
          name="Cart"
          component={AddCart}
        />

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#ff6969',
            },
            headerTintColor: 'white',
            // headerShown:false
            headerLeft: null,
          }}
          name="SearchProduct"
          component={SearchProduct}
        />

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#ff6969',
            },
            headerTintColor: 'white',
            headerLeft: null,
          }}
          name="Navigation"
          component={Navigation}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#ff6969',
            },
            headerTintColor: 'white',
            headerLeft: null,
          }}
          name="OrderPlaced"
          component={OrderPlaced}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#ff6969',
            },
            headerTintColor: 'white',
            headerLeft: null,
          }}
          name="ProductPage"
          component={ProductPage}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#ff6969',
            },
            headerTintColor: 'white',
            headerLeft: null,
          }}
          name="EditProfile"
          component={EditProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;

