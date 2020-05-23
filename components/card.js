import React, { useEffect,useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  Dimensions,
  Image
} from "react-native";
import * as Font from 'expo-font'

const {width} = Dimensions.get("window")
export default function Infobar(props) {

  // const color = props.images
  // const [Images, setImages] = useState(color)
  // useEffect(() => {
  //   setImages(props.images)

  // },[])
  //  console.log('img',Images)
  return (
   
    <TouchableOpacity
      {...props}
      hitSlop={{
        top: 30,
        bottom: 30
      }}
      style={[{backgroundColor:props.color},props.style]}
    >
      <View style={{ flexDirection: "row", justifyContent:"space-around",alignItems:"center" }}>
           <View style={{height:30 }}>
          <View style={{ flexDirection: "row" }}>
      
        <View><Text style={[styles.text,{color:props.text}]}>{props.title}</Text></View>
        </View>
        {props.sub ?<View ><Text style={[styles.subText,{color:props.text}]}>{props.sub}</Text></View>: null}
       </View>
       <View style={{justifyContent:"flex-end", paddingLeft:20}}>
         <Image source={props.images} style={{width: 90,height:90,margin:10}}/>
       </View>
      </View>
    
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  

  text: {
    fontFamily:"Roboto",
    fontSize: 10,
    fontWeight: "700",
    paddingLeft: 10,
    
  },
  subText: {
    justifyContent:"flex-end",
    fontFamily:"Roboto",
    fontSize: 8,
    fontWeight: "400",
    paddingLeft: 10,
    
  },
  icon: {
    color: "green",
    position: "absolute",
    top: 8,
    paddingRight: 15
  }
});
