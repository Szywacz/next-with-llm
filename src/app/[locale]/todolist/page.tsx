'use client';
import { useGetAllTodosQuery } from '@/lib/features/api/apiSlice';
import { Fragment } from 'react';

export default function Todolist() {
  const { data = [], isLoading, isFetching, isError } = useGetAllTodosQuery();

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.map(todo => (
        <Fragment key={todo.title}>
          <div>{todo.title}</div>
          <div>{todo.description}</div>
        </Fragment>
      ))}
    </div>
  );
}
