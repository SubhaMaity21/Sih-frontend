
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    result: null,
  },
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
    clearResult: (state) => {
      state.result = null;
    },
  },
});

export const { setResult, clearResult } = formSlice.actions;
export default formSlice.reducer;
