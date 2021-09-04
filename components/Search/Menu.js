import React, {Component, useState} from 'react';
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
  FlatList,
} from 'react-native';

const tabs = [
  {text: 'BEST MATCH', type: 'match'},
  {text: 'TOP RATED', type: 'rated'},
  {text: 'PRICE LOW-HIGH', type: 'ASC'},
  {text: 'PRICE HIGH-LOW', type: 'DESC'},
  {text: 'MOST RECENT', type: 'recent'},
];

const MenuComponent = props => {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
      }}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({item: tab}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (tab.type === 'ASC') {
                  props.setSort('ASC');
                } else if (tab.type === 'DESC') {
                  props.setSort('DESC');
                }

                props.setSelectedTab(tab.type);
              }}>
              <View style={[styles.pill]}>
                <Text
                  style={[
                    styles.pillText,
                    {
                      color:
                        props.selectedTab === tab.type
                          ? '#ff6969'
                          : 'rgb(95,99,103)',
                    },
                  ]}>
                  {tab.text}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '400',
  },
});

export default MenuComponent;
