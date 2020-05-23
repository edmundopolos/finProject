import React, { Component,useEffect,useState } from 'react';
import {View,Text,ScrollView, StyleSheet, TouchableWithoutFeedback,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
// import InvoiceDetail from '../components/invoiceDetail';
import InvoiceView from '../components/invoiceView';

const { height, width } = Dimensions.get('window');
const ViewInvoices = (props)=>{
    console.log(props.invoices)
    const [Invoices, setInvoices] = useState(props.invoices)
    useEffect(() => {
        setInvoices(props.invoices)
    })
    const allInvoices = props.invoices.map((data,idx)=>
        <View key={idx} style={styles.container}>
            
          <InvoiceView
            to={data.to}
            myName={'Nekki Inc'}
            regId={'RC 1098676'}
            items={data.items}
            total={data.total}
            due={data.due}
            key={idx}
            tel="08058144998"
        />  
        </View>
        )
    return(
        <View >
            <ScrollView>
            {allInvoices}
            </ScrollView>
            
        </View>
        
    )
}
const styles =StyleSheet.create({
      container:{
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:50,
        width:width
    },

})

const mapPropToState = state =>({
    invoices: state.Invoices
  })
  const mapActionToState = {
    // updateInvoice: updateInvoice
  }
  
  export default connect(mapPropToState,mapActionToState) (ViewInvoices)
