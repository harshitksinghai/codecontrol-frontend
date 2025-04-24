import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { courseApi } from '../api/courseApi';
import { CommonResponse } from '../../common/utils/commonTypes';

const noopBaseQuery: BaseQueryFn = () => ({ data: {} });

export const courseApiSlice = createApi({
  reducerPath: 'courseApi',
  baseQuery: noopBaseQuery,
  endpoints: (build) => ({
    placeholder1: build.mutation<CommonResponse, string>({
      queryFn: async (ph) => {
        try {
          const response = await courseApi.placeholder1(ph);
          return { data: response.data };
        } catch (error: any) {
          return { error: { status: error.response?.status, data: error.response?.data || error.message } };
        }
      },
    }),
    placeholder2: build.query<CommonResponse, string>({
      queryFn: async (ph) => {
        try {
          const response = await courseApi.placeholder2(ph);
          return { data: response.data };
        } catch (error: any) {
          return { error: { status: error.response?.status, data: error.response?.data || error.message } };
        }
      },
    }),
  }),
});

export const { usePlaceholder1Mutation, usePlaceholder2Query } = courseApiSlice;
