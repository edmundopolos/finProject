import React, { useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
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
export default function TaskBar(props) {

  const bkgd = props.priority=='1'?{backgroundColor:'#cc000080'}:props.priority=='2'?{backgroundColor:'#cc550080'}:{backgroundColor:'#c7ffc7'}
  const color = props.color;
  return (
    <TouchableOpacity
      {...props}
      hitSlop={{
        top: 30,
        bottom: 30
      }}
      
    >
    <View style={[styles.container,bkgd]}>
      
        <View style={{width:width/2.5}}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
        <View style={{width:width/4}}>
            <Text style={styles.typeText}>{props.priority=='1'?<MaterialIcons name="priority-high" size={15} style={styles.priority} color="red" />:props.priority=='2'?<MaterialIcons name="priority-high" style={styles.priority} size={15} color="orange" />:<MaterialIcons name="priority-high" style={styles.priority} size={15} color="green" />}</Text>
        </View>
        <View style={{width:width/4}}>
            <Text style={styles.amountText}>{props.due}</Text>
        </View>
    </View>

      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{ flexDirection: "row", width:width-40,padding:8, borderRadius:15,margin:5 },

  text: {
    fontFamily:"Lato",
    fontSize: 15,
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
  },
  priority:{backgroundColor:'white', borderRadius:15}

});
