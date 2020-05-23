import React, { Component,useState,useEffect } from 'react';
import {View,Text,StyleSheet, TouchableOpacity,Dimensions,Platform,Alert } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import InvoiceDetail from '../components/invoiceDetail';
import { add } from '../components/helper';
import {connect} from 'react-redux';
import updateInvoice from '../actions/invoiceAction';
import { getCustomTabsSupportingBrowsersAsync } from 'expo-web-browser';



const ndate = new Date().getTime()
const { height, width } = Dimensions.get('window');
const InvoiceForm = (props) => {
       
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
    const [MyPhone, setMyPhone] = useState('090811110202')
    const [CompanyName, setCompanyName] = useState('Nekki Inc')
    const [Total, setTotal] = useState(0)
    const [mode, setMode] = useState('date');
    const [NewDate, setNewDate] = useState(null)
    const [DateFilter, setDateFilter] = useState(false)
    const [Show, setShow] = useState(false)
    const [Name, setName] = useState('')
    const [Item, setItem] = useState('')
    const [Items, setItems] = useState([])
    const [Quantity, setQuantity] = useState('')
    const [Amount, setAmount] = useState('')
    const  removeItem = (i) => {
                console.log(i)
                Items.splice(i, 1);
                return Items
              
            }
            
          
    const addItem =()=>{
        const data = {
            item: Item,
            quantity: Quantity,
            amount: Amount
        }
        Items.push(data)
        //  console.log(Items)
        setItems(Items)
        const arr = []
        Items.map(data=>arr.push(data.quantity*data.amount))
        setTotal(add(arr))
        console.log(Items)
        setItem('')
        setQuantity('')
        setAmount('') 
    }
    const storeInvoice =()=>{
        const data = {
            to: Name,
            items: Items,
            due: NewDate,
            total: Total,
            myName: CompanyName,
            tel:MyPhone
        }
       props.updateInvoice(data)
       Alert.alert("Invoice Created")
    }
    // console.log(Items)
    useEffect(() => {
        
        return () => {
           
        }
    }, [])
    return(
        <View>
            
            <ScrollView>
                <View style={styles.details}>
                
            <TextInput
              focused="false"
              placeholder="Name"
              multiline={true}
              numberOfLines={7}
              placeholderTextColor="#5e2a2e"
              onChangeText={text => setName(text) }
              underlineColorAndroid="transparent"
              autoCapitalize={"sentences"}
              defaultValue={Name}
              style={styles.input}
            />
            <View style={styles.itemData}>
            <TextInput
              focused="false"
              placeholder="Item"
              multiline={true}
              numberOfLines={7}
              placeholderTextColor="#5e2a2e"
              onChangeText={text => setItem(text) }
              underlineColorAndroid="transparent"
              autoCapitalize={"sentences"}
              defaultValue={Item}
              style={styles.input}
            />
            <TextInput
              focused="false"
              placeholder="Quantity"
              placeholderTextColor="#5e2a2e"
              onChangeText={text => setQuantity(text) }
              underlineColorAndroid="transparent"
              autoCapitalize={"sentences"}
              keyboardType="number-pad"
              defaultValue={Quantity}
              style={styles.input}
            />
            <TextInput
              focused="false"
              placeholder="Amount"
              keyboardType="number-pad"
              placeholderTextColor="#5e2a2e"
              onChangeText={text => setAmount(text) }
              underlineColorAndroid="transparent"
              autoCapitalize={"sentences"}
              defaultValue={Amount}
              style={styles.input}
            />
            
            </View>
            <TouchableOpacity onPress={()=>addItem()}>
                <Text style={{color:"#5e2a2e"}}>Add Item</Text>
            </TouchableOpacity>
             <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginTop:10,width:width-30}}>
                
                
                <TouchableOpacity onPress={()=>{setShow(true); setDateFilter(!DateFilter); }}>
                    
                    <Text style={{color:"#5e2a2e"}}>Due Date </Text>
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
                    {DateFilter?<Text>{NewDate}</Text>:null}
                    </View>
                    </View>
                    <View style={styles.invoiceData}>
                        <InvoiceDetail to={Name} myName={'Nekki Inc'} regId={'RC 1098676'} due={NewDate} items={Items} total={Total} remove={removeItem} tel={'08058144998'}/>
                    </View>
                <View style={{justifyContent:"space-around",alignItems:"center", width:width, borderRadius:15, padding:20, marginTop: 10}}>  
            <TouchableOpacity onPress={()=>storeInvoice()}>
                <Text style={{color:"#5e2a2e"}}>Create | Send</Text>
            </TouchableOpacity>
            </View>  
            </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    input: {
        marginTop:15,
        borderRadius: 45,
        borderBottomWidth: 0.5,
        backgroundColor: "transparent",
        height: 10,
        color:"#5e2a2e",
        borderColor:"#5e2a2e",
        width: width - 55,
        height: 35,
        paddingLeft: 65,
        paddingRight: 20,
        fontSize: 13,
        fontFamily: "Lato"
      },
      details:{
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:50,
        width:width
    },
    itemData:{
        borderWidth:0.5,
        borderRadius:15,
        padding:20,
        marginTop: 10,color:"#5e2a2e",
        borderColor:"#5e2a2e",
    },
    invoiceData:{
        // width:width-10,
        borderTopWidth:1,
        color:"#5e2a2e",
        borderColor:"#5e2a2e",
        // borderRadius:15,
        padding:20,
        marginTop: 10
    }
})

const mapPropToState = state =>({
    // focus: state.Focus
  })
  const mapActionToState = {
    updateInvoice: updateInvoice
  }
  
  export default connect(mapPropToState,mapActionToState) (InvoiceForm)