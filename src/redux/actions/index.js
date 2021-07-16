/**
 * Action Types
 */
export const INCREMENT = "INC";
export const DECREMENT = "DEC";
export const DOS_INCREMENT = "DOS_INC";
export const DOS_DECREMENT = "DOS_DEC";
export const INVTRN_SAVE_SCREEN = "INVTRNSAVE";
export const INVTRN_SUBMIT_SCREEN = "INVTRNSUBMIT";
export const INVTRN_INIT = "INVTRNINIT";

/**
 * Action Creators
 */
export const incrementCounter = () => ({ type: INCREMENT});
export const decrementCounter = () => ({ type: DECREMENT});
export const incrementDosCounter = (amt) => ({ type: DOS_INCREMENT, payload: amt});
export const decrementDosCounter = (amt) => ({ type: DOS_DECREMENT, payload: amt});
export const inventoryTransferInit = (history) => ({type: INVTRN_INIT, payload: history});
export const inventoryTransferSave = (data) => ({ type: INVTRN_SAVE_SCREEN, payload: data});
export const inventoryTransferSubmit = (data) => ({ type: INVTRN_SUBMIT_SCREEN, payload: data});

export const FETCH_HISTORY_BEGIN   = 'FETCH_HISTORY_BEGIN';
export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';
export const FETCH_HISTORY_FAILURE = 'FETCH_HISTORY_FAILURE';

export const fetchHistoryBegin = () => ({
  type: FETCH_HISTORY_BEGIN
});

export const fetchHistorySuccess = history => ({
  type: FETCH_HISTORY_SUCCESS,
  payload: { history }
});

export const fetchHistoryFailure = error => ({
  type: FETCH_HISTORY_FAILURE,
  payload: { error }
});