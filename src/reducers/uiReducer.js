import { types } from "../types/types";

const initialState = {
   loading: true,
   msgError: null,
   msg: null
}

export const uiReducer = (state = initialState, action) => {
   switch (action.type) {

      case types.uiSetLoading:
         return {
            ...state,
            loading: true
         }

      case types.uiRemoveLoading:
         return {
            ...state,
            loading: false
         }

      case types.uiSetMsgError:
         return {
            ...state,
            msgError: action.payload
         }

      case types.uiRemoveMsgError:
         return {
            ...state,
            msgError: null
         }

      case types.uiSetMsg:
         return {
            ...state,
            msg: action.payload
         }

      case types.uiRemoveMsg:
         return {
            ...state,
            msg: null
         }

      default:
         return state;
   }
}