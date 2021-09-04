
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import BellIcon from '../../src/images/alarm.png';
import msgIcon from '../../src/images/message.png';

function Notification({msgCount,notifyCount}){
return(
    <View style={Styles.mainDiv}>
        <View style={{...Styles.pRelative}}>
        <Image source={msgIcon} style={Styles.img}/>
        <View style={Styles.notifyCount}>

        <Text >{msgCount}</Text>
        </View>
        </View>

        <View style={{...Styles.pRelative}}>
        <Image source={BellIcon} style={Styles.img}/>
        <View style={Styles.notifyCount}>

        <Text >{notifyCount}</Text>
        </View>
        </View>
    </View>
)};

const Styles = StyleSheet.create({
    mainDiv:{
        width:'100%',
        height:40,
        // backgroundColor:'red',
        display:"flex",
        flexDirection:'row',
        paddingRight:15,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    img:{
        width:25,
        height:25,
        marginLeft:20
    },
    pRelative:{
        position:'relative'
    },
    notifyCount:{
        position:'absolute',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minWidth:20,
        minHeight:20,
        bottom:-5,
        left:12,
        borderRadius:50,
        padding:1,
        backgroundColor:"#ff6969"
    }
})

export default Notification;