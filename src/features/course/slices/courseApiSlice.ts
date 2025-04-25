import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { courseApi } from '../api/courseApi';
import { CommonResponse } from '../../common/types/commonTypes';
import { commonResponseSchema } from '../../common/utils/commonSchemas';
import { handleApiError } from '../../common/utils/apiErrorHandler';

const MODE = import.meta.env.MODE || "development";
const BACKEND_URL =
  MODE === "production"
    ? import.meta.env.VITE_BACKEND_URL_PROD
    : import.meta.env.VITE_BACKEND_URL_DEV;

export const courseApiSlice = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}/api` }),
  endpoints: (build) => ({
    placeholder1: build.mutation<CommonResponse, string>({
      queryFn: async (ph) => {
        try {
          const response = await courseApi.placeholder1(ph);
          return { data: response.data };
        } catch (error: any) {
          return handleApiError(error);
        }
      },
      responseSchema: commonResponseSchema,
    }),
    placeholder2: build.query<CommonResponse, string>({
      queryFn: async (ph) => {
        try {
          const response = await courseApi.placeholder2(ph);
          return { data: response.data };
        } catch (error: any) {
          return handleApiError(error);
        }
      },
      responseSchema: commonResponseSchema,
    }),
  }),
});

export const { usePlaceholder1Mutation, usePlaceholder2Query } = courseApiSlice;
