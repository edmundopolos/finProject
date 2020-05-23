import React, { Component,useState,useEffect } from 'react';
import {View,Text,StyleSheet, TouchableOpacity,Dimensions,Platform,Alert } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import InvoiceDetail from '../components/invoiceDetail';
import { add } from '../components/helper';
import {connect} from 'react-redux';
import updateTask from '../actions/taskAction';
import { getCustomTabsSupportingBrowsersAsync } from 'expo-web-browser';
import TaskBar from '../components/taskTab';



const ndate = new Date().getTime()
const { height, width } = Dimensions.get('window');
const TaskForm = (props) => {
       
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
    const [NewDate, setNewDate] = useState(null)
    const [DateFilter, setDateFilter] = useState(false)
    const [Show, setShow] = useState(false)
    const [Title, setTitle] = useState('')
    const [Priority, setPriority] = useState('1')
    const [Items, setItems] = useState([])
    const [Description, setDescription] = useState('')
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

    }
    const storeInvoice =()=>{
        const data = {
            title: Title,
            priority: Priority,
            due: NewDate,
            description:Description
            
        }
       props.updateTask(data)
                setTitle('')
        setPriority('1')
        setNewDate('')
        Alert.alert("Task Created") 
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
              placeholder="Title"
              multiline={true}
              numberOfLines={7}
              placeholderTextColor="#497629"
              onChangeText={text => setTitle(text) }
              underlineColorAndroid="transparent"
              autoCapitalize={"sentences"}
              defaultValue={Title}
              style={styles.input}
            />
            <View style={styles.itemData}>
            <TextInput
              focused="false"
              placeholder="Priority e.g 1-high, 2-medium,3-low"
              multiline={true}
              numberOfLines={7}
              placeholderTextColor="#497629"
              onChangeText={text => setPriority(text) }
              underlineColorAndroid="transparent"
              autoCapitalize={"sentences"}
              defaultValue={Priority}
              style={styles.input}
            />
            </View>
            <View style={styles.itemData}>
            <TextInput
              focused="false"
              placeholder="Description"
              multiline={true}
              numberOfLines={7}
              placeholderTextColor="#497629"
              onChangeText={text => setDescription(text) }
              underlineColorAndroid="transparent"
              autoCapitalize={"sentences"}
              defaultValue={Description}
              style={styles.input}
            />
            </View>

             <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginTop:10,width:width-30}}>
                
                
                <TouchableOpacity onPress={()=>{setShow(true); setDateFilter(!DateFilter); }}>
                    
                    <Text style={{color:"#497629"}}>Due Date </Text>
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
                    <TaskBar  title={Title} priority={Priority} due={NewDate} />
                    </View>
                <View style={{justifyContent:"space-around",alignItems:"center", width:width, borderRadius:15, padding:20, marginTop: 10}}>  
            <TouchableOpacity onPress={()=>storeInvoice()}>
                <Text style={{color:"#497629"}}>Create | Send</Text>
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
        borderColor:"#497629",
        backgroundColor: "transparent",
        height: 10,
        color:"#497629",
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
        marginTop: 10
    },
    invoiceData:{
        // width:width-10,
        borderTopWidth:1,
        borderColor:"#497629",
        // borderRadius:15,
        color:"#497629",
        padding:20,
        marginTop: 10
    }
})

const mapPropToState = state =>({
    // focus: state.Focus
  })
  const mapActionToState = {
    updateTask: updateTask
  }
  
  export default connect(mapPropToState,mapActionToState) (TaskForm)