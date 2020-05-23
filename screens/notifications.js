import React, { Component } from 'react'
import {
    Text,
    TouchableOpacity,
    View,

    Dimensions,

  } from "react-native";

import { connect } from 'react-redux'
import TaskBar from '../components/taskTab';
const { height, width } = Dimensions.get('window');
const Notifications = (props) => {

    const allNotifications= props.notification.map((data,idx)=>
    <TaskBar key={idx} title={data.title} priority={data.priority} due={data.due} />
    )
    return (
        <View style={{justifyContent:"space-around",alignItems:"center",width:width,}}>
            <View>
              {allNotifications}  
            </View>
            
        </View>
    )
}

const mapStateToProps = (state) => ({
    notification: state.Notification
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
