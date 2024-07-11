import { Todo } from '@/types/Todo';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_TODO_API_BASE_URL + 'api';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: builder => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => `/todos`
    }),
    getTodo: builder.query<Todo, void>({
      query: id => '/todos/{id}'
    }),
    createTodo: builder.mutation<Todo, void>({
      query: () => '/todos/'
    }),
    updateTodo: builder.mutation({
      query: todo => ({
        url: `todos/${todo._id}`,
        method: 'PUT',
        body: todo
      })
    }),
    deleteTodo: builder.mutation({
      query: id => ({
        url: `todos/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const { useGetAllTodosQuery, useGetTodoQuery, useUpdateTodoMutation, useCreateTodoMutation, useDeleteTodoMutation } = apiSlice;
