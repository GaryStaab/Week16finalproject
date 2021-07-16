import { DOS_INCREMENT, DOS_DECREMENT } from "../actions";
const initialState = {
    dosCount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DOS_INCREMENT:
            return {
                dosCount: state.dosCount + action.payload.amt
            };

        case DOS_DECREMENT:
            return {
                dosCount: state.dosCount - action.payload.amt
            };
        default:
            return state;
    }

}