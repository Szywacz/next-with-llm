'use client';
import TodoItem from '@/components/TodoItem/TodoItem';
import { useDeleteTodoMutation, useGetAllTodosQuery, useUpdateTodoMutation } from '@/lib/features/api/apiSlice';

export default function Todolist() {
  const { data = [], isLoading, isFetching, isError } = useGetAllTodosQuery();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading...</div>;

  const handleToggleTodo = async (id: string) => {
    const todo = data.find(todo => todo._id === id);
    if (!todo) return;
    await updateTodo({ ...todo, status: todo.status === 'completed' ? 'pending' : 'completed' });
  };

  const handleRemoveTodo = async (id: string) => {
    await deleteTodo(id);
  };
  return (
    <div>
      {data.map(todo => (
        <TodoItem key={todo.title} todo={todo} onRemove={() => handleRemoveTodo(todo._id)} onToggle={() => handleToggleTodo(todo._id)} />
      ))}
    </div>
  );
}
