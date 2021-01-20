import { createReducer } from "@reduxjs/toolkit"
import pJSON from '../../../package.json'
import {
  error,
} from "./actions"

export const appSlice = {
  pJSON,
  error: null,
}

const appReducer = createReducer(appSlice, {

  [error]: (state, action) => {
    state.error = action.error
    return state
  },
  
})

export { appReducer }
