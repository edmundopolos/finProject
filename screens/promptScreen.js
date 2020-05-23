import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Dimensions,
    ScrollView 
  } from "react-native";
import  Tasks  from './tasks';
import  Notifications  from './notifications';
const { height, width } = Dimensions.get('window');
const PromptScreen = () => {
    const [Active, setActive] = useState(true)
    const active = {color:"#26234e", borderWidth: 1,borderBottomColor:"#26234e",fontSize:15, borderRadius:15,padding:8,marginTop:10 }

    return (
        <View>
            <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:20,height:50}}>
            
            <TouchableOpacity 
                hitSlop={{
                top: 30,
                bottom: 30
            }} 
             onPress={()=>{
                setActive(!Active)
                }}>
                    <Text style={Active?active:{color:"#26234e",fontSize:15, }}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity
                  hitSlop={{
                    top: 30,
                    bottom: 30
                  }}
            onPress={()=>{
                setActive(!Active)
                }}>
                    <Text style={!Active?active:{color:"#26234e",fontSize:15, }}>Tasks</Text>
            </TouchableOpacity>
         

            </View>
            
                
                
                  {Active?
                  <View style={{justifyContent:"space-around",alignItems:"center",marginTop:10}}>
                  <Notifications/>
                  </View>:
                  <View style={{justifyContent:"space-around",alignItems:"center",marginTop:10}}>
                  <Tasks/>
                  </View>
                }  
                
               
            
        </View>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PromptScreen)
