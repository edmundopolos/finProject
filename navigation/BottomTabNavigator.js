import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {
  TouchableOpacity
} from 'react-native'
import TabBarIcon from '../components/TabBarIcon';
import updateFocus from '../actions/focusAction';
import {connect} from 'react-redux'
import DashBoardStack from './DashboardNav';
import HRStack from './HrNav';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Dashboard';

function BottomTabNavigator({ navigation, route, focus,updateFocus }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    //  headerTitle:getHeaderTitle(route),
     
   });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
  
      <BottomTab.Screen
        name="Dashboard"
        component={DashBoardStack}
        // tabBarOptions={{style:{height:25}}}
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="HR"
        component={HRStack}
        options={{
          title: 'HR',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
          // tabBarVisible: false
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Dashboard':
      return 'Edmund';
    case 'Links':
      return 'Links to learn more';
  }
}
const mapPropToState = state =>({
  focus: state.Focus
})
const mapActionToState = {
  updateFocus: updateFocus
}

export default connect(mapPropToState,mapActionToState)(BottomTabNavigator)