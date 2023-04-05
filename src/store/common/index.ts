import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'

interface CommonState {
    productId: number | null
}

const initialState: CommonState = {
    productId: null,
}

export const commonSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setProductID: (state, { payload }: PayloadAction<number>) => {
            state.productId = payload
        },
    },
})

export const { setProductID } = commonSlice.actions

export const currentProductId = (state: RootState) => state.common.productId

export default commonSlice.reducer
