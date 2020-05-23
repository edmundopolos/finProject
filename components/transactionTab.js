import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  Dimensions
} from "react-native";
import * as Font from 'expo-font'

const {width} = Dimensions.get("window")
export default function TransactionBar(props) {


  const color = props.color;
  return (
    <TouchableOpacity
      {...props}
      hitSlop={{
        top: 30,
        bottom: 30
      }}
      
    >
    <View style={{ flexDirection: "row" }}>
      
        <View style={{width:width/2}}>
            <Text style={styles.text}>{props.name}</Text>
        </View>
        <View style={{width:width/5}}>
            <Text style={styles.typeText}>{props.type}</Text>
        </View>
        <View style={{width:width/3}}>
            <Text style={styles.amountText}>N{props.amount}</Text>
        </View>
    </View>
        <View  style={{ flexDirection: "row"}}>
            <Text style={[styles.subText,{width:width/4}]}>Date: {props.date}</Text>
            <Text style={[styles.subText,{width:width/4}]}>Payer: {props.payer}</Text>
        </View>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  

  text: {
    fontFamily:"Lato",
    fontSize: 20,
    fontWeight: "400",
    paddingLeft: 20,
    color: "#000"
  },
  subText: {
    justifyContent:"flex-end",
    fontFamily:"Lato",
    fontSize: 10,
    flex:1,
    fontWeight: "700",
    paddingLeft: 20,
    color: "#000",
    flex:1
  },
  icon: {
    color: "green",
    position: "absolute",
    top: 8,
    paddingRight: 10,
    flex:1
  },
  amountText: {
    fontFamily:"Lato",
    fontSize: 10,
    flex:1,
    fontWeight: "700",
    paddingLeft: 20,
    color: "#000"
  },
  typeText: {
    fontFamily:"Lato",
    fontSize: 10,
    flex:1,
    fontWeight: "400",
    paddingLeft: 20,
    color: "#000"
  }
});
