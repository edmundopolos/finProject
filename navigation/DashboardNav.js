import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import dashboard from '../screens/dashboard';
import transactions from '../screens/transactions';
import InvoiceScreen from '../screens/invoice';
import TransactionStack from './TransactionNav';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import updateFocus from '../actions/focusAction';
import {connect} from 'react-redux'
import {Platform} from 'react-native'
import StaffScreen  from '../screens/staffScreen';
import TaskScreen from '../screens/taskScreen';
const Stack = createStackNavigator();

function DashBoardStack({ navigation, route, focus, updateFocus }) {
  // navigation.setOptions({header:''})

  return (
    <Stack.Navigator screenOptions={
      {
        headerLeft: () => (
          <TouchableOpacity
          onPress={() =>{
           updateFocus(!focus)
          }}
          style={{margin:25}}
          keyboardHandlingEnabled={true}
        >
          <Ionicons
            size={28}
            color={"#000"}
            name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            style={{ paddingRight: 30 }}
          />
        </TouchableOpacity>
         ),
         headerStyle: {
           backgroundColor: 'transparent',
           elevation: 0,
           
         }
      }
      }>
      <Stack.Screen name="Dashboard" component={dashboard} />
      <Stack.Screen name="Transactions" component={TransactionStack} />
       <Stack.Screen name="InvoiceScreen" component={InvoiceScreen} />
      <Stack.Screen name="Staff" component={StaffScreen} />
      <Stack.Screen name="Task" component={TaskScreen} />
    </Stack.Navigator>
  );
}
const mapPropToState = state =>({
  focus: state.Focus
})
const mapActionToState = {
  updateFocus: updateFocus
}

export default connect(mapPropToState,mapActionToState) (DashBoardStack)