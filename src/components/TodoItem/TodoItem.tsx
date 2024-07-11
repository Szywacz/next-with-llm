import { Todo } from '@/types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => Promise<void>;
  onRemove: (id: string) => Promise<void>;
}

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li className="flex items-center justify-between rounded bg-white p-2 shadow-sm">
      <span className={`flex-grow cursor-pointer ${todo.status === 'completed' ? 'text-gray-400 line-through' : 'text-black'}`} onClick={() => onToggle(todo._id)}>
        {todo.title}
      </span>
      <button className="ml-2 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600" onClick={() => onRemove(todo._id)}>
        Remove
      </button>
    </li>
  );
}
