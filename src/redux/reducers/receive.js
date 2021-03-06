import {
    RCT_SAVE_SCREEN,
    RCT_SUBMIT_SCREEN,
    RCT_INIT
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
    poNum: "",
    toLocation: "",
    quantity: 0,
    history: []
};


const postReget = async (state) => {
    await CRUDApi.crudPost("invTrans", state);
    let resp = await CRUDApi.crudGet("invTrans");
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RCT_INIT:
            return { ...initialState, history: action.payload.history };
        case RCT_SAVE_SCREEN:
            console.log(action.payload.e.nativeEvent.target.value);
            let screenValue = action.payload.e.nativeEvent.target.value;
            let screenInt = Number.parseInt(screenValue);
            if (!Number.isNaN(screenInt)) {
                screenValue = screenInt;
            }
            return { ...state, [action.payload.e.nativeEvent.target.id]: screenValue };
        case RCT_SUBMIT_SCREEN:
            postReget(state);
            return {...initialState};
        default:
            return state;
    }

}