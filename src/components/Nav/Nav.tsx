import { ModeToggle } from '../ui/mode-toggle';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';
import LangDropdown from '@/components/LangDropdown/LangDropdown'



export default function Nav() {

  const t = useTranslations('Nav');

  return (
    <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
      <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
        <code className='font-mono font-bold'>{t('greeting')}</code>
      </p>
      <div>
        <ModeToggle />
      </div>
      <div>
        <Button variant={"default"}>test</Button>
      </div>
      <div>
        <LangDropdown />
      </div>
    </div>
  );
}