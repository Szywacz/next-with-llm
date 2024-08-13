import { Todo } from '@/types/Todo';

export const todoListMock: Todo[] = [
  {
    _id: '1',
    title: 'Buy groceries',
    description: 'Purchase milk, bread, eggs, and cheese.',
    dueDate: new Date('2024-07-22T10:00:00.000Z'),
    priority: 'High',
    status: 'Pending',
    tags: ['shopping', 'errands'],
    createdAt: new Date('2024-07-15T09:00:00.000Z'),
    updatedAt: new Date('2024-07-15T09:00:00.000Z')
  },
  {
    _id: '2',
    title: 'Finish project report',
    description: 'Complete the final report for the XYZ project.',
    dueDate: new Date('2024-07-25T17:00:00.000Z'),
    priority: 'High',
    status: 'In Progress',
    tags: ['work', 'report'],
    createdAt: new Date('2024-07-10T14:00:00.000Z'),
    updatedAt: new Date('2024-07-20T09:00:00.000Z')
  },
  {
    _id: '3',
    title: 'Call the plumber',
    description: 'Fix the leak in the kitchen sink.',
    dueDate: new Date('2024-07-18T15:00:00.000Z'),
    priority: 'Medium',
    status: 'Completed',
    tags: ['home', 'maintenance'],
    createdAt: new Date('2024-07-12T08:30:00.000Z'),
    updatedAt: new Date('2024-07-18T16:00:00.000Z')
  },
  {
    _id: '4',
    title: 'Schedule dentist appointment',
    description: 'Book a dental check-up for next month.',
    dueDate: new Date('2024-08-01T11:00:00.000Z'),
    priority: 'Low',
    status: 'Pending',
    tags: ['health', 'appointment'],
    createdAt: new Date('2024-07-13T11:00:00.000Z'),
    updatedAt: new Date('2024-07-13T11:00:00.000Z')
  },
  {
    _id: '5',
    title: 'Renew gym membership',
    description: 'Extend gym membership for another 6 months.',
    dueDate: new Date('2024-07-15T12:00:00.000Z'),
    priority: 'Medium',
    status: 'Completed',
    tags: ['health', 'fitness'],
    createdAt: new Date('2024-07-01T09:00:00.000Z'),
    updatedAt: new Date('2024-07-15T12:30:00.000Z')
  },
  {
    _id: '6',
    title: 'Plan weekend getaway',
    description: 'Organize a weekend trip to the countryside.',
    dueDate: new Date('2024-07-28T10:00:00.000Z'),
    priority: 'Low',
    status: 'Pending',
    tags: ['leisure', 'travel'],
    createdAt: new Date('2024-07-16T10:00:00.000Z'),
    updatedAt: new Date('2024-07-16T10:00:00.000Z')
  },
  {
    _id: '7',
    title: 'Prepare for presentation',
    description: 'Get ready for the quarterly business review presentation.',
    dueDate: new Date('2024-07-20T09:00:00.000Z'),
    priority: 'High',
    status: 'Completed',
    tags: ['work', 'presentation'],
    createdAt: new Date('2024-07-05T09:00:00.000Z'),
    updatedAt: new Date('2024-07-19T17:00:00.000Z')
  },
  {
    _id: '8',
    title: 'Attend team meeting',
    description: 'Participate in the team sync-up meeting.',
    dueDate: new Date('2024-07-21T14:00:00.000Z'),
    priority: 'Medium',
    status: 'Pending',
    tags: ['work', 'meeting'],
    createdAt: new Date('2024-07-17T11:00:00.000Z'),
    updatedAt: new Date('2024-07-17T11:00:00.000Z')
  },
  {
    _id: '9',
    title: 'Submit tax documents',
    description: 'Send the required documents to the accountant.',
    dueDate: new Date('2024-07-30T12:00:00.000Z'),
    priority: 'High',
    status: 'Pending',
    tags: ['finance', 'tax'],
    createdAt: new Date('2024-07-01T10:00:00.000Z'),
    updatedAt: new Date('2024-07-01T10:00:00.000Z')
  },
  {
    _id: '10',
    title: 'Clean garage',
    description: 'Organize and clean the garage space.',
    dueDate: new Date('2024-07-29T16:00:00.000Z'),
    priority: 'Low',
    status: 'Pending',
    tags: ['home', 'cleaning'],
    createdAt: new Date('2024-07-18T15:00:00.000Z'),
    updatedAt: new Date('2024-07-18T15:00:00.000Z')
  }
];
