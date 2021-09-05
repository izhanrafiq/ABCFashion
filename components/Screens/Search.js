import * as React from 'react';
import { View, Text } from 'react-native';
import SearchProduct from './../Search/index'

export default function SearchScreen({navigation}) {
    return(
        <View style={{ flex :1, alignItems:'center', justifyContent: 'center'}}>
            <SearchProduct/>
        </View>
    );
}
