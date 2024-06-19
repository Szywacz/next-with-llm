import { ReactNode } from 'react';

type Props = {
  toolName: string;
  toolIcon: ReactNode;
};

export default function ToolbarItem({ toolName, toolIcon }: Props) {
  return (
    <div className="flex h-[70px] w-[70px] cursor-pointer flex-col border p-1 opacity-50 hover:opacity-100">
      <div className="flex h-[50px] items-center justify-center">{toolIcon}</div>
      <p className="line-clamp-2 h-[20px] text-center text-sm">{toolName}</p>
    </div>
  );
}
