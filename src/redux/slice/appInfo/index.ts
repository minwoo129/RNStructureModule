import {createSlice} from '@reduxjs/toolkit';
import {appInfoInitialState as initialState} from '../../state';

const appInfoSlice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default appInfoSlice.reducer;
export const {} = appInfoSlice.actions;
