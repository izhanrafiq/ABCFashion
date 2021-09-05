import * as React from 'react';
import { View, Text } from 'react-native';
import MorePage from './../MorePage';

export default function MoreScreen({navigation}) {
    return(
        <View style={{ flex :1, alignItems:'center', justifyContent: 'center'}}>
            <MorePage/>
        </View>
    );
}
