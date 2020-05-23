import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import transactions from '../screens/transactions';

const Stack = createStackNavigator();

function TransactionStack() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Details" component={transactions} />
      {/* <Stack.Screen name="Receipt" component={Receipt} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default TransactionStack