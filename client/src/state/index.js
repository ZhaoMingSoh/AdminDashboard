import { createSlice } from "@reduxjs/toolkit";

/*
    The state object global.mode is initially set to "dark", this is default theme setting, 
    upon dispatching and executing the "setMode()" reducer, the global.mode is assign to "light".
    The opposite is true as well.
*/
const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e", // userId in the mock data
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
