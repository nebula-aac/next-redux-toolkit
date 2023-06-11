import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { REHYDRATE } from "redux-persist"

const JSON_QUERY = '.json?print=pretty'
const BASE_URL = 'https://hacker-news.firebaseio.com/v0/'

export const hackerNewsAPI = createApi({
    reducerPath: 'hackerNewsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
    extractRehydrationInfo(action, { reducerPath, }) {
        if (action.type === REHYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getTopStoryIds: builder.query({
            query: () => `/topstories${JSON_QUERY}`,
        }),
        getStory: builder.query({
            query: (id) => `/item/${id}${JSON_QUERY}`
        }),
    })
})

export const {
    useGetTopStoryIdsQuery,
    useGetStoryQuery
} = hackerNewsAPI