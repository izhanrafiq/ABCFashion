import * as React from 'react';
import { View, Text } from 'react-native';
import Cart from './../AddCart';

export default function CartScreen({navigation}) {
    return(
        <View style={{ flex :1, alignItems:'center', justifyContent: 'center'}}>
            <Cart/>
        </View>
    );
}
