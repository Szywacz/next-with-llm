import AddTodo from './AddTodo/AddTodo';
import dynamic from 'next/dynamic';

const Todolist = dynamic(() => import('./TodoList/TodoList'), { loading: () => <div>Loading...</div> });

export default function Todo() {
  return (
    <div>
      <h1>TODOLIST</h1>
      <Todolist />
      <AddTodo />
    </div>
  );
}
