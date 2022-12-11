import { configureStore } from "@reduxjs/toolkit";
import dateSlice from '../features/dateSlice'

const rootReducer = {
    dateSlice
}

export const store =  configureStore({
    reducer : rootReducer
})