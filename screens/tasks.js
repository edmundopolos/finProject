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

import { connect } from 'react-redux'
import TaskBar from '../components/taskTab';

const { height, width } = Dimensions.get('window');

const Tasks = (props) => {
    const allTasks= props.tasks.map((data,idx)=>
    <TaskBar key={idx} title={data.title} priority={data.priority} due={data.due} />
    )
    return (
        <View style={{width:width,alignItems:'center'}}>
            {allTasks}
        </View>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.Task
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
