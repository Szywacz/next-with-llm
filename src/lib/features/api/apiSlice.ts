import { Todo } from '@/types/Todo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_TODO_API_BASE_URL + 'api';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => `/todos`,
      providesTags: ['Todo']
    }),
    getTodo: builder.query<Todo, void>({
      query: id => '/todos/{id}'
    }),
    createTodo: builder.mutation<Todo, void>({
      query: body => ({
        url: `todo`,
        method: 'POST',
        body
      })
    }),
    updateTodo: builder.mutation({
      query: todo => ({
        url: `todos/${todo._id}`,
        method: 'PATCH',
        body: todo
      }),
      invalidatesTags: ['Todo']
    }),
    deleteTodo: builder.mutation({
      query: id => ({
        url: `todos/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Todo']
    })
  })
});

export const { useGetAllTodosQuery, useGetTodoQuery, useUpdateTodoMutation, useCreateTodoMutation, useDeleteTodoMutation } = apiSlice;
