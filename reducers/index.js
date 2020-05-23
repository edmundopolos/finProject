import { combineReducers } from "redux";

import screenReducer from "./screenReducer";

import userReducer from "./userReducer";
import focusReducer from "./focusScreen";
import transactionReducer from "./transactions";
import invoiceReducer from "./invoices";
import taskReducer from "./tasks";
import notificationReducer from "./notification";
import staffReducer from "./staff";


export default combineReducers({

  Screen: screenReducer,
  Focus: focusReducer,
  User: userReducer,
  Transaction: transactionReducer,
  Invoices: invoiceReducer,
  Task:taskReducer,
  Notification:notificationReducer,
  Staff: staffReducer


});
