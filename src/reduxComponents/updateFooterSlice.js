
import { createSlice } from '@reduxjs/toolkit'

export const UpdateFooterSlice = createSlice({
  name: 'textUpdate',
  initialState: {
    value: ''
  },
  reducers: {
    
setTextValue: (state, action) => {
  state.value = action.payload
}
}
})

// Action creators are generated for each case reducer function
export const { setTextValue } = UpdateFooterSlice.actions

export default UpdateFooterSlice.reducer