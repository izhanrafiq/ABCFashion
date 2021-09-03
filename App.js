

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';


// function HomeScreen() {
//   return (
//     <View style={{  alignItems: 'center', justifyContent: 'center' }}>
//       <Menu/>
//       <Text>Home Screen</Text>
//       <LocalStorageApp/>
//     </View>
//   );
// }

function AboutScreen() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Menu/>
      <Text>About Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
      options={{headerStyle:{
        backgroundColor:'#ff6969'
      },
      headerTintColor:'white'
      }} 
      name="Login" component={Login} />
      
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;