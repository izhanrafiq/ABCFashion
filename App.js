import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import AddCart from './components/AddCart';
import Navigation from './components/Navigation';

function App() {
  return (
    <Navigation/>
  );
}

export default App;



// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           options={{
//             headerStyle: {
//               backgroundColor: '#ff6969'
//             },
//             headerTintColor: 'white'
//           }}
//           name="Login" component={Login} />

//         <Stack.Screen
//           options={{
//             headerStyle: {
//               backgroundColor: '#ff6969'
//             },
//             headerTintColor: 'white'
//           }}
//           name="Cart" component={AddCart} />
//       <Stack.Screen name="Navigation" component={Navigation} />


//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

