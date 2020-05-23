import React, { Component,useEffect,useState } from 'react'
import {View,Text,ScrollView, StyleSheet, TouchableWithoutFeedback  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import InvoiceForm from './createInvoice';
import {connect} from 'react-redux';
import InvoiceDetail from '../components/invoiceDetail';
import ViewInvoices from './viewInvoices';




function InvoiceScreen(props)  {

    
   
    const [Invoices, setInvoices] = useState([])
    const [Create, setCreate] = useState(true)
    // const [Assignments, setAssignments] = useState(False)
    const [Active, setActive] = useState(true)
    const active = {color:"#26234e", borderBottomWidth: 1,borderBottomColor:"#26234e",fontSize:15 }

        useEffect(() => {

    }, [])

    return (
        <ScrollView>
            <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:10}}>
            
            <TouchableOpacity onPress={()=>{
                setCreate(true);
                setActive(true);}}>
                    <Text style={Active?active:{color:"#26234e",fontSize:10, }}>Create Invoice</Text>
                    </TouchableOpacity>
         <TouchableOpacity onPress={()=>{
             setCreate(false);
             setActive(false);}}>
             <Text style={!Active?active:{color:"#26234e",fontSize:10}}>View Invoices</Text>
             </TouchableOpacity>
            </View>
            <View>
                {Create?
                <InvoiceForm/>:
               <View>
                   <ViewInvoices/>
               </View>
            }
            </View>
        </ScrollView>
    )
}


const mapPropToState = state =>({
    invoices: state.Invoices
  })
  const mapActionToState = {
    // updateInvoice: updateInvoice
  }
  
  export default connect(mapPropToState,mapActionToState) (InvoiceScreen)