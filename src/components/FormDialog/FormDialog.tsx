'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export type FormDialogInput = {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'textarea';
};

type FormDialogProps = {
  openButtonTitle: string;
  dialogTitle: string;
  dialogDescription?: string;
  inputs: FormDialogInput[];
  saveButtonTitle: string;
  onSaveAction: () => void;
};

export default function FormDialog({ openButtonTitle, dialogTitle, dialogDescription, inputs, saveButtonTitle, onSaveAction }: FormDialogProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isActionSaved, setIsActionSaved] = useState(true);

  const handleSubmit = async (): Promise<void> => {
    setIsActionSaved(false);
    await onSaveAction();
    setIsActionSaved(true);
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{openButtonTitle}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          {dialogDescription ? <DialogDescription>{dialogDescription}</DialogDescription> : null}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {inputs.map(input => (
            <div key={input.id} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={input.id} className="text-right">
                {input.label}
              </Label>
              {input.type === 'textarea' ? (
                <Textarea id={input.id} placeholder={input.placeholder ? input.placeholder : undefined} required={input.required} className="col-span-3" />
              ) : (
                <Input type={input.type} id={input.id} required={input.required} placeholder={input.placeholder ? input.placeholder : undefined} className="col-span-3" />
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">
            {isActionSaved ? saveButtonTitle : 'Saving...'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
