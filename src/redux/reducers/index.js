import { combineReducers } from "redux";
import counterReducer from "./counter";
import dosCounterReducer from "./dosCounter";
import inventoryTransferReducer from "./inventoryTransfer";

export default combineReducers({
    inventoryTransferReducer,
    dosCounterReducer,
    counterReducer
});