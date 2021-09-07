import * as React from 'react';
import { View, Text } from 'react-native';
import Product from './../Products/Index';

export default function HomeScreen({navigation}) {
    return(
        <View style={{ flex :1, alignItems:'center', justifyContent: 'center'}}>
            <Product/>
        </View>
    );
}

