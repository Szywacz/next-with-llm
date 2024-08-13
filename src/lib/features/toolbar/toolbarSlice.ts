import { createSlice } from '@reduxjs/toolkit';

interface ToolbarState {
  isToolbarVisible: boolean;
}

const initialState: ToolbarState = {
  isToolbarVisible: true
};

const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    toggle(state) {
      // RTK uses immer to make it immutable way under the hood
      state.isToolbarVisible = !state.isToolbarVisible;
    }
  }
});

export const { toggle } = toolbarSlice.actions;
export default toolbarSlice.reducer;
