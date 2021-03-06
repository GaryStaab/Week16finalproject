import {
    INVTRN_SAVE_SCREEN,
    INVTRN_SUBMIT_SCREEN,
    INVTRN_INIT,
    INVTRN_LOOKUP_ITEM
} from "../actions";
import CRUDApi from "../../rest/crudApi";
// const initialState = async () => {
//     return {
//         item: "",
//         fromLocation: "",
//         toLocation: "",
//         quantity: 0,
//         history: await CRUDApi.crudGet("InvTrans")
//     }};
// };

const initialState = {
    item: "",
    fromLocation: "",
    toLocation: "",
    quantity: 0,
    history: [],
    items: []
};


const postReget = async (state) => {
    await CRUDApi.crudPost("invTrans", state);
    let resp = await CRUDApi.crudGet("invTrans");
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INVTRN_INIT:
            return { ...initialState, history: action.payload.history, items: action.payload.items };
        case INVTRN_SAVE_SCREEN:
            let screenValue = action.payload.e.nativeEvent.target.value;
            let screenInt = Number.parseInt(screenValue);
            if (!Number.isNaN(screenInt)) {
                screenValue = screenInt;
            }
            return { ...state, [action.payload.e.nativeEvent.target.id]: screenValue };
        case INVTRN_LOOKUP_ITEM:
            let screenLookup = action.payload.e;
            console.log(screenLookup);
            return { ...state, item: screenLookup };
        case INVTRN_SUBMIT_SCREEN:
            postReget(state);
            return { ...initialState };
        default:
            return state;
    }

}