import React, { Component, useState } from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Platform,
    Dimensions,
    Animated,
    TouchableWithoutFeedback,
    DatePickerAndroid,
    TimePickerAndroid,
    ScrollView 
  } from "react-native";
import updateTransaction from '../actions/transactionAction';
import {connect} from 'react-redux';
import TransactionBar from '../components/transactionTab';
import DateTimePicker from '@react-native-community/datetimepicker';

const { height, width } = Dimensions.get('window');
const ndate = new Date().getTime()
// const usedate = ndate.getDate()+'-'+ndate.getMonth()+'-'+ndate.getFullYear()
const Transactions = (props) =>{

    const onChange = (event, selectedDate) => {
        setShow(false)
        if(event.type != 'dismissed'){
        const currentDate = selectedDate;
        setNewDate(`${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`);
      };
    }
    const showMode = currentMode => {
    
    setDateFilter(!DateFilter)
    
    setMode(currentMode);
    };
    const showDatepicker = () => {
    showMode('date');
    };

    const showTimepicker = () => {
    showMode('time');
    };
    
    const [mode, setMode] = useState('date');
    const [Bname, setBname] = useState(null)
    const [NewDate, setNewDate] = useState(null)
    const [DateFilter, setDateFilter] = useState(false)
    const [Active, setActive] = useState(true)
    const [Show, setShow] = useState(false)
    const [Transactions, setTransactions] = useState(true)
    const [Debits, setDebits] = useState(false)
    const [Credits, setCredits] = useState(false)
    const active = {color:"#26234e", borderWidth: 1,borderBottomColor:"#26234e",fontSize:15, borderRadius:15,padding:10 }
    const tranx = props.transactions.map((data,idx)=>
      NewDate !=null? NewDate == data.date?<TransactionBar
        name={data.name}
        type={data.type}
        style={styles.tabContainer}
        amount={Math.abs(data.amount)}
        date={data.date}
        payer={data.payer}
        key={idx}
        />:null:
        <TransactionBar
        name={data.name}
        type={data.type}
        style={styles.tabContainer}
        amount={Math.abs(data.amount)}
        date={data.date}
        payer={data.payer}
        key={idx}
        />

    )
    const credit = props.transactions.map((data,idx)=>
    NewDate !=null? NewDate == data.date && data.type=='credit'?
    <TransactionBar
    name={data.name}
    type={data.type}
    style={styles.tabContainer}
    amount={Math.abs(data.amount)}
    date={data.date}
    payer={data.payer}
    key={idx}
    />:null:
    data.type=='credit'?
    <TransactionBar
    name={data.name}
    type={data.type}
    style={styles.tabContainer}
    amount={Math.abs(data.amount)}
    date={data.date}
    payer={data.payer}
    key={idx}
    />:null
    )
    const debit = props.transactions.map((data,idx)=>
    NewDate !=null? NewDate == data.date && data.type=='debit'?
    <TransactionBar
    name={data.name}
    type={data.type}
    style={styles.tabContainer}
    amount={Math.abs(data.amount)}
    date={data.date}
    payer={data.payer}
    key={idx}
    />:null:
    data.type=='debit'?
    <TransactionBar
    name={data.name}
    type={data.type}
    style={styles.tabContainer}
    amount={Math.abs(data.amount)}
    date={data.date}
    payer={data.payer}
    key={idx}
    />:null
    )

    const picker= (onChange,mode,ndate)=>
                 <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={new Date(ndate)}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    
                />
    
    return(
        <View>
            <ScrollView>
            <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:10}}>
            
            <TouchableOpacity onPress={()=>{
                setActive(!Active)
                setCredits(false)
                setDebits(false);
                setTransactions(true);}}>
                    <Text style={Transactions?active:{color:"#26234e",fontSize:10, }}>Transactions</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setActive(!Active)
                setCredits(true)
                setDebits(false);
                setTransactions(false);}}>
                    <Text style={Credits?active:{color:"#26234e",fontSize:10, }}>Credits</Text>
            </TouchableOpacity>
         <TouchableOpacity onPress={()=>{
             setActive(!Active)
              setCredits(false)
              setDebits(true);
              setTransactions(false);}}>
             <Text style={Debits?active:{color:"#26234e",fontSize:10}}>Debits</Text>
             </TouchableOpacity>
              
            </View>
           <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginTop:10,width:width-30}}>
                
                
                <TouchableOpacity onPress={()=>{setShow(true); setDateFilter(!DateFilter); }}>
                    
                    <Text>Filter by Date </Text>
                    {Show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={new Date(ndate)}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    
                    />
                )}
                    </TouchableOpacity>
                    
                    
                    
                <TouchableOpacity><Text>Filter by Business</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:10,width:width-30}}>
                <TouchableOpacity onPress={()=> {
                setNewDate(null)
                setShow(false)
                setDateFilter(false)
               
                }}>
                {DateFilter?<Text>{NewDate}</Text>:null}
                </TouchableOpacity>
              
                
                
            <TouchableOpacity><Text>{Bname}</Text></TouchableOpacity>
        </View>
            
            <View style={styles.details}>
                <ScrollView>
                  {Transactions?tranx:null}  
                  {Credits?credit:null}
                  {Debits?debit:null}
                </ScrollView>
                
            </View>
        </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    details:{
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:50,
        width:width
    },
    tabContainer: {
        flex: 1,
        backgroundColor:"#fff",
        justifyContent:"space-around",
        borderRadius: 15,
        elevation: 1,
        margin: 5,
        padding:5,
        minHeight: 50,
        width:width-30
      },
    
})
const mapPropToState = state =>({
    transactions: state.Transaction
})
const mapActionToState = {
    updatedTransactions: updateTransaction
}

export default connect(mapPropToState,mapActionToState) (Transactions)