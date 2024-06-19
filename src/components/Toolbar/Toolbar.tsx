'use client';
import { ReactNode } from 'react';
import ToolbarItem from './ToolbarItem';
import { FaCalendarCheck } from 'react-icons/fa';
import { LuActivity, LuAlarmClock, LuListTodo } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

type Tool = {
  id: number;
  name: string;
  path: string;
  icon: ReactNode;
};

const tools: Tool[] = [
  {
    id: 0,
    name: 'Calendar',
    path: '/calendar',
    icon: <FaCalendarCheck />
  },
  {
    id: 1,
    name: 'Todolist',
    path: '/todolist',
    icon: <LuListTodo />
  },
  {
    id: 2,
    name: 'Mocktool 1',
    path: '/mocktool',
    icon: <LuAlarmClock />
  },
  {
    id: 3,
    name: 'Mocktool 2',
    path: '/mocktool',
    icon: <LuActivity />
  }
];

export default function Toolbar() {
  const isOpen = useSelector((state: RootState) => state.toolbar.isToolbarVisible);
  if (!isOpen) return null;

  return (
    <div className="toolbar-wrapper">
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:justify-start">
        {tools.map(_ => (
          <ToolbarItem key={_.id} toolName={_.name} toolIcon={_.icon}></ToolbarItem>
        ))}
      </div>
    </div>
  );
}
