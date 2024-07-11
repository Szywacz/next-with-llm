export type Todo = {
  _id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: string;
  status: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  user?: string;
};
