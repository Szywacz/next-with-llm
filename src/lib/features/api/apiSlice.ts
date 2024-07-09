import { Todo } from '@/types/Todo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_TODO_API_BASE_URL + 'api';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: builder => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => `/todos`
    })
  })
});

export const { useGetAllTodosQuery } = apiSlice;
