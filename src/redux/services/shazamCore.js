import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // const options = {
// //   method: 'GET',
// //   headers: {
// //     'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com',
// //     'X-RapidAPI-Key': 'ff5c3a226emsha9d8a344feefa5fp117ea7jsn5b9013c365c6',
// //   },
// // };

// // fetch(
// //   'https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world',
// //   options
// // )
// //   .then((response) => response.json())
// //   .then((response) => console.log(response))
// //   .catch((err) => console.error(err));

export const shazamCoreAPI = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'ff5c3a226emsha9d8a344feefa5fp117ea7jsn5b9013c365c6'
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/get-top-songs-in-world',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreAPI;
