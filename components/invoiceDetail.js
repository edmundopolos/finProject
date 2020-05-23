import React, { Component,useEffect,useState } from 'react'
import {View,Text,StyleSheet, TouchableOpacity,Dimensions  } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');
const InvoiceDetail = (props) =>{
    const del = (idx)=>props.remove(idx)
    const [Items, setItems] = useState([])
    useEffect(() => {
        setItems(props.items)
        // console.log(props.items)
    },[])
        const items = Items.map((data,idx)=>
    <View key={idx} style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center", borderBottomWidth:0.5,padding:10,marginTop:10}}>
        <Text style={{width:width/4}}>{data.item}</Text>
        <Text style={{width:width/4}}>{data.quantity}</Text>
        <Text style={{width:width/4}}>{data.amount}</Text>
        <TouchableOpacity onPress={()=>del(idx)}
            hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10
          }}><Text>x</Text></TouchableOpacity>
    </View>
    )
    return(
        <View style={styles.itemData}>
            <View style={styles.companyData}>
                <Text>{props.myName}</Text><Text>{props.regId}</Text>
            </View>
            <View style={styles.toHeader}>
            <Text>{props.to}</Text><Text>{props.due}</Text>
            </View>
            <View>
                {items}
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                <Text>Total: {props.total}</Text>
                <Text>Tel: {props.tel}</Text>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    input: {
        marginTop:15,
        borderRadius: 45,
        borderBottomWidth: 1,
        backgroundColor: "transparent",
        height: 10,
        // backgroundColor: "white",
        // width: width - 55,
        height: 35,
        paddingLeft: 65,
        paddingRight: 20,
        fontSize: 13,
        fontFamily: "Lato"
      },
      companyData:{
        borderBottomWidth:0.5,
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        marginTop:20,
        
    },toHeader:{
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        marginTop:10,

    },
    itemData:{
        borderWidth:0.5,
        borderRadius:15,
        padding:10,
        marginTop: 10,
        width:width/1.1
    },
    invoiceData:{
        borderWidth:0.5,
        borderRadius:15,
        padding:10,
        marginTop: 10
    }
})

export default InvoiceDetail
