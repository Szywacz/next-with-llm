'use client';
import FormDialog, { FormDialogInput } from '@/components/FormDialog/FormDialog';
import { useCreateTodoMutation } from '@/lib/features/api/apiSlice';
import { mockAsync } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export default function AddTodo() {
  const [createTodo] = useCreateTodoMutation();

  const propsT = useTranslations('Todolist.addTodo.dialogProps');
  const inputsT = useTranslations('Todolist.addTodo.inputs');

  const inputs: FormDialogInput[] = [
    { id: 'todoTitle', label: inputsT('todoTitle.label'), placeholder: inputsT('todoTitle.placeholder'), required: true, type: 'text' },
    { id: 'todoDescription', label: inputsT('todoDescription.label'), placeholder: inputsT('todoDescription.placeholder') , required: false, type: 'textarea' }
  ];

  const handleAddTodo = async () => {
    await mockAsync();
  };

  return (
    <FormDialog
      openButtonTitle={propsT('openButtonTitle')}
      dialogTitle={propsT('dialogTitle')}
      dialogDescription={propsT('dialogDescription')}
      saveButtonTitle={propsT('saveButtonTitle')}
      onSaveAction={handleAddTodo}
      inputs={inputs}
    />
  );
}
