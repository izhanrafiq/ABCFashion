import * as React from 'react';
import { View, Text } from 'react-native';

export default function CartScreen({navigation}) {
    return(
        <View style={{ flex :1, alignItems:'center', justifyContent: 'center'}}>
            <Text>Cart!</Text>
        </View>
    );
}
