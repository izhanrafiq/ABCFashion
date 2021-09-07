import React, { Component, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';
import { ProductDetails } from '../Common/ProductDetails';
// import product1 from './../../src/images/productlist/product1.jpg';
// import product2 from './../../src/images/productlist/product2.jpg';
// import product3 from './../../src/images/productlist/product3.jpg';
import ProductDisplay from './ProductDisplay';

// const ProductItem = ({imgSrc,prodName,price})=>{
//     return(
//         <View style={productItemStyle.mainDiv}>
//             <TouchableOpacity style={{width:'100%'}}>
//             <View style={{height:"80%",width:"100%"}}>
//                     <Image style={productItemStyle.img} source={imgSrc}/>
//             </View>
//             <Text style={productItemStyle.prodName}>{prodName}</Text>
//             <Text style={productItemStyle.prodPrice}>{price}</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

function ProductList(props) {
    return (
        // <View style={{marginTop:10,paddingVertical:10, height:200,width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:'wrap'}}>
        //     <ProductDisplay imgSrc={product1} width='30%' prodName='V Tshirt' price="$1000.00"/>
        //     <ProductDisplay imgSrc={product2} width='30%' prodName='V Tshirt' price="$1000.00"/>
        //     <ProductDisplay imgSrc={product3} width='30%' prodName='V Tshirt' price="$1000.00"/>
        // </View>
        
        <View style={{marginTop:10,paddingVertical:10, height:200,width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:'wrap'}}>
            {
                ProductDetails.slice(0,3).map(item=>{
                    console.log('item>>>>>>',item.imgSrc);
                     return <ProductDisplay imgSrc={item.imgSrc} width='30%' prodName={item.name} price={item.price}/>
                })
            }
        </View>
    )
}



export default ProductList;
