import React, { Component } from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Platform,
    Dimensions,
    Animated,
    TouchableWithoutFeedback,
  } from "react-native";
  import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import LinkingConfiguration from '../navigation/LinkingConfiguration';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {connect} from 'react-redux'
import updateFocus from '../actions/focusAction';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import updateLogin from '../actions/loginAction';
import MusicApp from '../components/index';
const { height, width } = Dimensions.get('window');
const Stack = createStackNavigator();
const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate
} = Animated;

function runTiming(clock, value, dest,props) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 2000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
  
}
class BaseScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          images: [],
          scale: new Animated.Value(1),
          isImageFocused: this.props.focus
        };
    
        // this.scale = {
        //   transform: [{ scale: this.state.scale,translateX: this.dashX }], marginLeft: this.props.focus?width/2:0
        // };
        this.onStateChange = event([
          {
            nativeEvent: ({ state }) =>
              block([
                cond(
                  eq(state, State.END),
                  set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
                )
              ])
          }
        ]);
        this.actionBarY = this.state.scale.interpolate({
          inputRange: [0.8, 1],
          outputRange: [9, -190]
        });
        this.borderRadius = this.state.scale.interpolate({
          inputRange: [0.9, 1],
          outputRange: [30, 0]
        });
      //   this.dashOpacity = new Value(1);
        this.dashX = this.state.scale.interpolate( {
          inputRange: [0, 1],
          outputRange: [1, 1],
          // extrapolate: Extrapolate.CLAMP
        });
      }

    render(){
        // console.log(this.props)
        if (this.props.focus) {
            Animated.spring(this.state.scale, {
              toValue: 0.8
            }).start();
          } else {
            Animated.spring(this.state.scale, {
              toValue: 1
            }).start();
          }
          const scale = {
            transform: [{ scale: this.state.scale,translateX: this.dashX }], marginLeft: this.props.focus?width/1.5:0
          };
    return(
        <View style={{backgroundColor: '#0a2240', height:'100%', width:'100%'  }}>
             <Animated.View
              style={{
                position: 'absolute',
                // top:0,
                right: 0,
                bottom:0,
                left: this.actionBarY,
                height: height,
                width:width
              }}
          >
          <View style={styles.drawer}>
          <TouchableOpacity
          onPress={() =>{
          
          }}
          style={styles.displayPhoto}
          keyboardHandlingEnabled={true}
        >
          <Ionicons
            size={80}
            color={"#fff"}
            name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            style={styles.options}
          />
        </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
              <Text style={styles.drawText}><MaterialIcons name="file-upload" size={14} color="white" /> Update Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.options}>
              <Text style={styles.drawText}><Ionicons name={Platform.OS ==='ios'?"ios-switch":"md-switch"} size={14} color="white" />  Switch Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} onPress={()=>this.props.navigation.navigate("Base")}>
              <Text style={styles.drawText}><Ionicons name="md-log-out" size={14} color="white" />  Log Out</Text>
            </TouchableOpacity>
          </View>
          </Animated.View>
        
         {this.props.focus?
        <TouchableWithoutFeedback 
          onPress={()=>{this.props.updateFocus(!this.props.focus)}}
        
          style={{ height:'100%', width:width, backgroundColor:'white'}}
          ><Animated.View style={[{ height:height, width,opacity:0.5, backgroundColor:"white", borderRadius:this.borderRadius}, scale]}>
          
         <Animated.View style={[{ height:height-50,marginTop:20,marginLeft:20, width:width, backgroundColor:"white", borderRadius:this.borderRadius}]}>

         </Animated.View>
       
        </Animated.View>
         </TouchableWithoutFeedback>:
          <Animated.View style={[{ height:'100%', width,borderRadius:this.props.focus?15:0 }, scale]}>
         
          
          <Stack.Navigator headerMode={'none'}>
            {/* <Stack.Screen name="Login" component={MusicApp} /> */}
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
        
          </Animated.View>
          }
        </View>
       
    )
}
}

const styles = StyleSheet.create({
  displayPhoto:{
    fontFamily:'Roboto',
    margin:5,
    paddingLeft:10,
    fontSize:15,
    marginBottom:10,
    // borderLeftColor:'#fff',
    // borderLeftWidth:5,
    color:'#fff',
    width:300
  },drawText:{
    fontFamily:'Roboto',
    margin:5,
    paddingLeft:10,
    fontSize:15,
    // borderLeftColor:'#fff',
    // borderLeftWidth:5,
    color:'#fff',
    width:200
  },
  drawer:{
    flex:1,
    marginTop: 100,
    padding:15,
    borderColor:'#fff',
    width:width,
    marginRight:60,
    height:200,
    width,
    alignItems:'center'

  },
  options:{
    borderColor:'#fff',
    width:width,
    // borderWidth:0.5,
    // borderRadius: 15,
    
  }
})
const mapPropToState = state =>({
    focus: state.Focus
})
const mapActionToState = {
  updateLogin: updateLogin,
  updateFocus: updateFocus
}

 export default connect(mapPropToState,mapActionToState)(BaseScreen)
// export default BaseScreen
// style={{
//   position: 'absolute',
//   right: 0,
//   bottom: 0,
//   top:0,
//   height: height+30,
//   width: width,
//   backgroundColor: '#0a2240',
//   // flexDirection: 'row',
//   justifyContent: 'space-around'
// }}