import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { REQUEST_PREFIX } from '../utils'

export const testApi = createApi({
    reducerPath: 'testApi',
    baseQuery: fetchBaseQuery({ baseUrl: REQUEST_PREFIX }),
    tagTypes: ['test'],
    endpoints(build) {
        return {
            test: build.query<Response, any>({
                query: () => ({
                    url: '/ping',
                    method: 'GET',
                }),
            }),
        }
    },
})

export const { useTestQuery } = testApi
