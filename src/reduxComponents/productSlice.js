import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
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
export const { setTextValue } = productSlice.actions

export default productSlice.reducer