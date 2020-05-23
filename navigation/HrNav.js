import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import updateFocus from '../actions/focusAction';
import {connect} from 'react-redux'
import {Platform} from 'react-native'

import hr from '../screens/hr';
const Stack = createStackNavigator();

function HRStack({ navigation, route, focus, updateFocus }) {
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
      <Stack.Screen name="Hr" component={hr} />
      {/* <Stack.Screen name="Transactions" component={TransactionStack} /> */}
       {/* <Stack.Screen name="InvoiceScreen" component={InvoiceScreen} />
      <Stack.Screen name="Staff" component={StaffScreen} />
      <Stack.Screen name="Task" component={TaskScreen} /> */}
    </Stack.Navigator>
  );
}
const mapPropToState = state =>({
  focus: state.Focus
})
const mapActionToState = {
  updateFocus: updateFocus
}

export default connect(mapPropToState,mapActionToState) (HRStack)