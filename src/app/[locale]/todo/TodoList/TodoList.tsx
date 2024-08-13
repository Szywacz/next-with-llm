'use client';
import { useDeleteTodoMutation, useGetAllTodosQuery, useUpdateTodoMutation } from '@/lib/features/api/apiSlice';
import TodoItem from '../TodoItem/TodoItem';
import { useTranslations } from 'next-intl';

export default function TodoList() {
  const { data = [], isLoading, isError } = useGetAllTodosQuery();
  const t = useTranslations('Todolist');
  const commonT = useTranslations('common');
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  if (isError) return <div>{t('error')}</div>;

  if (isLoading) return <div>{commonT('loading')}</div>;

  const handleToggleTodo = async (id: string) => {
    const todo = data.find(todo => todo._id === id);
    if (!todo) return;
    await updateTodo({ ...todo, status: todo.status === 'completed' ? 'pending' : 'completed' });
  };

  const handleRemoveTodo = async (id: string) => {
    await deleteTodo(id);
  };

  if (!data.length) return <div>{t('empty')}</div>;

  if (data.length)
    return (
      <div>
        {data.map(todo => (
          <TodoItem key={todo.title} todo={todo} onRemove={() => handleRemoveTodo(todo._id)} onToggle={() => handleToggleTodo(todo._id)} />
        ))}
      </div>
    );
}
