import { combineReducers } from "redux";
import counterReducer from "./counter";
import dosCounterReducer from "./dosCounter";
import inventoryTransferReducer from "./inventoryTransfer";
import receiveReducer from "./receive";

export default combineReducers({
    inventoryTransferReducer,
    receiveReducer,
    dosCounterReducer,
    counterReducer
});