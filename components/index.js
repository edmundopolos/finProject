import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import {connect} from 'react-redux'
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State, TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import updateLogin from '../actions/loginAction';
const { width, height } = Dimensions.get('window');

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

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
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
class MusicApp extends Component {
  constructor() {
    super();

    this.buttonOpacity = new Value(1);

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

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
      extrapolate: Extrapolate.CLAMP
    });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-end'
        }}
      >
        <Animated.View
          style={{justifyContent:'space-around',
          alignItems:'center',
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }]
          }}
        >
          <Image
            source={require('../assets/images/logo.png')}
            style={{ height: 300, width: 300 }}
          />
        </Animated.View>
        <View style={{ height: height / 6, justifyContent: 'center' }}>
         
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>
          {/*  */}
        </View>
         <Animated.View
            style={{
              ...styles.button,
              backgroundColor: '#2E71DC',
              // opacity: this.buttonOpacity,
              bottom:-80,
              transform: [{ translateY: this.bgY }]
            }}
          >
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Base")}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              Click Here To Login
            </Text>
            </TouchableOpacity>
          </Animated.View>
      </View>
    );
  }
}
const mapPropToState = state =>({

})
const mapActionToState = {
  updatedLogin: updateLogin
}

export default connect(mapPropToState,mapActionToState)(MusicApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  }
});
