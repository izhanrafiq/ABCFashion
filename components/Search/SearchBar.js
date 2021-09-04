import React, {Component, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import searchIcon from './../../src/images/search/search.png';
import filterIcon from './../../src/images/search/filter.png';
import backIcon from './../../src/images/backArrow.png';

const itemList = ({imgSrc, prodName, price}) => {
  return (
    <View style={productItemStyle.mainDiv}>
      <TouchableOpacity style={{width: '100%'}}>
        <View style={{height: '80%', width: '100%'}}>
          <Image style={productItemStyle.img} source={imgSrc} />
        </View>
        <Text style={productItemStyle.prodName}>{prodName}</Text>
        <Text style={productItemStyle.prodPrice}>{price}</Text>
      </TouchableOpacity>
    </View>
  );
};

function SearchBar(props) {
    const navigation = useNavigation();
    const ref = useRef();
  return (
    <SafeAreaView>
      <View
        style={{
          paddingVertical: 5,
          backgroundColor: 'white',
          height: 50,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: '100%',
            width: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Product')}}>
            <Image style={{width: 30, height: 40}} source={backIcon} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            borderRadius: 20,
            flexGrow: 100,
            flexDirection: 'row',
            backgroundColor: 'white',
            height: '100%',
            width: '80%',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              borderRadius: 20,
              paddingLeft: 50,
              backgroundColor: 'lightgrey',
              width: '100%',
              position: 'relative',
              // marginLeft: 16,
              borderBottomColor: '#FFFFFF',
            }}
            onChangeText={(text)=>{props.setSearchText(text);props.setSort();props.setSelectedTab('match')}}
            placeholder="Search Product"
            keyboardType="default"
            underlineColorAndroid="transparent"
          />
          <Image
            style={{
              left: 10,
              top: 5,
              height: 30,
              width: 30,
              position: 'absolute',
              alignSelf: 'flex-start',
            }}
            source={searchIcon}
          />
        </View>
        <View
          style={{
            height: '100%',
            width: 40,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={{width: 30, height: 30}} source={filterIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SearchBar;
