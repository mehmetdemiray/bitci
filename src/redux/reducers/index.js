﻿import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
export default combineReducers({
  SETTINGS: settingsReducer
});
