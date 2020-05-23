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
import StaffTab from '../components/staff';

const StaffScreen = (props) => {
    const staff = props.staff.map((data,idx)=><StaffTab key={idx} name={data.name} role={data.role} description={data.description} />)
    return (
        <View >
            {staff}
        </View>
    )
}

const mapStateToProps = (state) => ({
    staff:state.Staff
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffScreen)
