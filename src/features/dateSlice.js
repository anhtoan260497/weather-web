import { createSlice } from "@reduxjs/toolkit";

const calculateDate = () => {
  const date = new Date();
  const day = date.getDate()
  const dateCount =  date.getDay()
  const month =  date.getMonth()
  const year =  date.getFullYear()
  const dateCountArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December']
  return `${dateCountArr[dateCount]}, ${day} ${monthArr[month]} ${year}`
};

const initialState = calculateDate();

const dateSlice = createSlice({
  name: "date",
  initialState,
});

const { reducer } = dateSlice;

export default reducer;
