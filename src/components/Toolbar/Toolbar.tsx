'use client';
import { ReactNode } from 'react';
import ToolbarItem from './ToolbarItem';
import { FaCalendarCheck } from 'react-icons/fa';
import { LuActivity, LuListTodo } from 'react-icons/lu';
import { RiRobot2Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useTranslations } from 'next-intl';

type Tool = {
  id: number;
  name: string;
  path: string;
  icon: ReactNode;
};

export default function Toolbar() {
  const t = useTranslations('tools');

  const tools: Tool[] = [
    {
      id: 0,
      name: t('calendar'),
      path: '/calendar',
      icon: <FaCalendarCheck />
    },
    {
      id: 1,
      name: t('todolist'),
      path: '/todo',
      icon: <LuListTodo />
    },
    {
      id: 2,
      name: t('chatbot'),
      path: '/chatbot',
      icon: <RiRobot2Line />
    },
    {
      id: 3,
      name: 'Mocktool 1',
      path: '/mocktool',
      icon: <LuActivity />
    }
  ];

  const isOpen = useSelector((state: RootState) => state.toolbar.isToolbarVisible);
  if (!isOpen) return null;

  return (
    <div className="toolbar-wrapper">
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:justify-start">
        {tools.map(_ => (
          <ToolbarItem key={_.id} toolName={_.name} toolIcon={_.icon} toolPath={_.path}></ToolbarItem>
        ))}
      </div>
    </div>
  );
}
