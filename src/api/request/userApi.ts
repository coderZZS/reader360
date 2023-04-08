import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginAndSigninParam } from '../types'
import { getBaseUrl } from '../utils'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl('/api/user') }),
    tagTypes: ['user'],
    endpoints(build) {
        return {
            login: build.mutation<string, LoginAndSigninParam>({
                query: (params) => ({
                    url: '/login',
                    method: 'post',
                    body: params,
                }),
            }),
        }
    },
})

export const { useLoginMutation } = userApi
