'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  toolName: string;
  toolIcon: ReactNode;
  toolPath: string;
};

export default function ToolbarItem({ toolName, toolIcon, toolPath }: Props) {
  return (
    <Link href={toolPath} className="flex h-[70px] w-[70px] cursor-pointer flex-col border p-1 opacity-50 hover:opacity-100">
      <div className="flex h-[50px] items-center justify-center">{toolIcon}</div>
      <p className="text-ti line-clamp-2 flex h-[20px] justify-center">{toolName}</p>
    </Link>
  );
}
