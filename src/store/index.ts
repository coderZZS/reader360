import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users'
import commonReducer from './common'
import { testApi } from '../api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: {
        [testApi.testApi.reducerPath]: testApi.testApi.reducer,
        users: usersReducer,
        common: commonReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(testApi.testApi.middleware)
    },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
