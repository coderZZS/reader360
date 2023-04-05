import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '..'

interface UsersState {
    age: number
}

const initialState: UsersState = {
    age: 0,
}

export const usersSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.age += 1
        },
        decrement: (state) => {
            state.age -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.age += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = usersSlice.actions

export const selectCount = (state: RootState) => state.users.age

export default usersSlice.reducer
