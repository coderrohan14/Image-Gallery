import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.unsplash.com";
const access_key = process.env.REACT_APP_ACCESS_KEY;

export const unsplashApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Photos"],
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (searchQuery) =>
        `/search/photos?client_id=${access_key}&query=${searchQuery}`,
      providesTags: ["Photos"],
    }),
  }),
});

export const { useLazyGetSearchResultsQuery } = unsplashApiSlice;
