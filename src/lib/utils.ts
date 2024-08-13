import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mockAsync(): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      console.log('Mocking async method');
      resolve();
    }, 1500);
  });
}
