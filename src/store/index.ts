import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users'
import commonReducer from './common'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        common: commonReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
