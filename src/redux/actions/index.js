/**
 * Action Types
 */
export const INCREMENT = "INC";
export const DECREMENT = "DEC";
export const DOS_INCREMENT = "DOS_INC";
export const DOS_DECREMENT = "DOS_DEC";
export const INVTRN_SAVE_SCREEN = "INVTRNSAVE";
export const INVTRN_LOOKUP_ITEM = "INVTRNLOOKUPITEM";
export const INVTRN_SUBMIT_SCREEN = "INVTRNSUBMIT";
export const INVTRN_INIT = "INVTRNINIT";
export const RCT_SAVE_SCREEN = "RCTSAVE";
export const RCT_SUBMIT_SCREEN = "RCTSUBMIT";
export const RCT_INIT = "RCTINIT";

/**
 * Action Creators
 */
export const incrementCounter = () => ({ type: INCREMENT});
export const decrementCounter = () => ({ type: DECREMENT});
export const incrementDosCounter = (amt) => ({ type: DOS_INCREMENT, payload: amt});
export const decrementDosCounter = (amt) => ({ type: DOS_DECREMENT, payload: amt});
export const inventoryTransferInit = (history) => ({type: INVTRN_INIT, payload: history});
export const inventoryTransferSave = (data) => ({ type: INVTRN_SAVE_SCREEN, payload: data});
export const inventoryTransferLookupItem = (data) => ({ type: INVTRN_LOOKUP_ITEM, payload: data});
export const inventoryTransferSubmit = (data) => ({ type: INVTRN_SUBMIT_SCREEN, payload: data});
export const rctInit = (history) => ({type: RCT_INIT, payload: history});
export const rctSave = (data) => ({ type: RCT_SAVE_SCREEN, payload: data});
export const rctSubmit = (data) => ({ type: RCT_SUBMIT_SCREEN, payload: data});
