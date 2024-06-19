'use client';
import { useDispatch } from 'react-redux';
import { Button } from '../ui/button';
import { toggle } from '@/lib/features/toolbar/toolbarSlice';

export default function ToolbarToggleButton() {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(toggle())}>Open/Close Toolbar</Button>;
}
