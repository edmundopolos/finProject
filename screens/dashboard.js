import React, { Component } from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Platform,
    Dimensions,
    Animated,
    Image,
  } from "react-native";
  import { Ionicons } from '@expo/vector-icons';
import Infobar from '../components/card';
import {connect} from 'react-redux';
import updateFocus from '../actions/focusAction';
import { white } from 'color-name';
import { ScrollView } from 'react-native-gesture-handler';
import { add } from '../components/helper';
import PromptScreen  from './promptScreen';
  const { height, width } = Dimensions.get('window');
class Dashboard extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        data: [],
        scale: new Animated.Value(1),
        isImageFocused: false,

      };
  
    }

    componentDidMount() {
      this.sum()      
    }

    sum =()=>{
      
      const arr = []
        this.props.transactions.map(data=>arr.push(data.amount))
        this.setState({data:add(arr)})
        // console.log(add(arr))
    }

    numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
 

    render() {

  
      return (
     
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.balanceTab}>
            <View >
                <View style={styles.currencyText}>
                    <Text style={styles.subText}>Current Balance</Text>
                </View>
                <View style={styles.amount}>
                    <Text style={styles.text}> {'\u20A6'+this.numberWithCommas(this.state.data)}</Text>
                </View>
                
            </View>

            
              <Image source={require('../assets/images/wallet.png')} style={{width: 90,height:90,margin:10}}/>
            
            </View>
         <View style={styles.tabs}>
            <View style={styles.content}>
                <Infobar
                    title={"Transactions"}
                    sub={"Nekki Inc"}
                    style={styles.tabContainer}
                    text={'#385dae'}
                    color={"#bec4da"}
                    images={require('../assets/images/transaction.png')}
                    onPress={() => {
                    this.props.navigation.navigate("Transactions", {
                        
                    });
                    
                    }}
                />
                </View>
                <View style={styles.content}>
                <Infobar
                    title={"Invoice"}
                    sub={"Nekki Inc"}
                   style={styles.tabContainer}
                    text={'#5e2a2e'}
                    images={require('../assets/images/invoices.png')}
                    color={"#dad9d7"}
                    onPress={() => {
                    this.props.navigation.navigate("InvoiceScreen", {
                        
                    });
                    
                    }}
                />
              </View>
             
              <View style={styles.content}>
                  <Infobar
                    title={"Staff"}
                    sub={"Nekki Inc"}
                   style={styles.tabContainer}
                    text={'#354828'}
                    color={"#f3c7cf"}
                    images={require("../assets/images/Payroll.png")}
                    onPress={() => {
                    this.props.navigation.navigate("Staff", {
                        
                    });
                    }}
                />
              </View>

              <View style={styles.content}>
                  <Infobar
                    title={"Task"}
                    sub={"Nekki Inc"}
                   style={styles.tabContainer}
                    text={'#497629'}
                    color={"#b4b896"}
                    images={require('../assets/images/Task.png')}
                    onPress={() => {
                    this.props.navigation.navigate("Task", {
                        
                    });
                    }}
                />
              </View>
             
            </View>
            <View style={styles.prompts}>
              <PromptScreen/>
            </View>
            
            </ScrollView>
         
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#efefef',
      marginTop: 35,
      width:width,
      height:height,
      justifyContent: 'space-around', 
      alignItems:'center'
    },
    content:{
      
     
    },
    tabs:{
        width:width,
        flexDirection:"row",
        flexWrap:"wrap",
        // height:height,
        justifyContent: 'space-evenly', 
    },

    text: {
      fontFamily:"Roboto",
      fontSize: 20,
      fontWeight: "500",
      paddingLeft: 20,
      color:"#fff"
    },
    subText: {
      fontFamily:"Roboto",
      fontSize: 10,
      fontWeight: "500",
      paddingLeft: 26,
      color:"#fff"
    },
    balanceTab:{
        width:width-20, 
        height:150,
        borderRadius:15,
        backgroundColor:"#0a2240",
        // marginTop:5,
        margin:10,
        flexDirection:"row",
         justifyContent:"space-around",
          alignItems:"center"
    },
    Payroll:{
      flex: 1,

      justifyContent:"space-around",
      borderRadius: 15,
      elevation: 1,
      margin: 5,
      padding:5,
      minHeight: 100,
      width:width-20
    },
    currencyText:{
        padding:5
    },
    amount:{
        padding:5,
        marginTop:-5
    },
    tabContainer: {
        flex: 1,
        justifyContent:"space-around",
        borderRadius: 15,
        elevation: 1,
        margin: 5,
        padding:5,
        // minHeight: 100,
        width:width/2.19,
        
      },
      prompts:{
        width:width,
        justifyContent:'space-around',
        alignContent:'center'
      }
    
  });
 const mapPropToState = state =>({
     focus: state.Focus,
     transactions: state.Transaction
 })
 const mapActionToState = {
     updatedFocus: updateFocus
 }

export default connect(mapPropToState,mapActionToState)(Dashboard)
// export default Dashboard
