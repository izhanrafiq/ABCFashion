import React, {Component, useEffect, useState} from 'react';
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
  ScrollView,
} from 'react-native';
import ProductDisplay from '../Products/ProductDisplay';
import MenuComponent from './Menu';
import SearchBar from './SearchBar';
import startIcon from './../../src/images/star.jpeg';
import { ProductDetails } from '../Common/ProductDetails';
function SearchProduct(params) {
    const [searchText,setSearchText] = useState('');
    const [selectedTab, setSelectedTab] = useState('match');
    const [sort,setSort] = useState();
    const [prodDetails,setProdDetails] = useState(ProductDetails);
    const sortData = (type)=>{
        if(type === 'ASC'){
            setProdDetails(()=>prodDetails.sort((a,b)=>a.price-b.price))
        }else if(type === 'DESC'){
            setProdDetails(()=>prodDetails.sort((a,b)=>b.price-a.price))
        }
    }

  return (
    <View>
      <View
        style={{
          height: 70,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SearchBar setSelectedTab={setSelectedTab} setSort={setSort} setSearchText={setSearchText} />
      </View>
      <MenuComponent selectedTab={selectedTab} setSelectedTab={setSelectedTab} setSort={sortData}/>
      <ScrollView>
        <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        {prodDetails.filter(data=>data.name.includes(searchText)).map((item)=>{
            return(
                <View
          style={{
            width: '40%',
            height: 200,
            marginVertical: 10,
            position: 'relative',
          }}>
          <ProductDisplay
            imgSrc={item.imgSrc}
            height={'100%'}
            width="100%"
            prodName={item.name}
            price={`$${item.price}`}
          />
          <View
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              marginBottom: 15,
              backgroundColor: '#e04719',
              marginRight: 8,
              padding: 2,
              borderRadius: 10,
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-evenly',
              width:40,
              height:20
            }}>
            <Image source={startIcon} style={{width:15,height:15,borderRadius:50}} />
            <Text
              style={{
                fontSize: 10,
                color: 'white',
                fontWeight: '800',
              }}>
              4.5
            </Text>

          </View>
        </View>
        
            )
        })}
        </View>
    </ScrollView>
    </View>
  );
}

export default SearchProduct;
