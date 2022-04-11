import {createStore} from "redux"
import { userReducer } from "./Users/reducer"

export const store = createStore(userReducer)