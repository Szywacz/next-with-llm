'use client';

import * as React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function ModeToggle() {
  const t = useTranslations('langs');
  const tDropdown = useTranslations('LangDropdown');

  const currentLocale = useLocale();

  const router = useRouter();
  const [currentLang, setCurrentLang] = React.useState<string>(currentLocale);

  function onSelectChange(value: string) {
    const nextLocale = value;
    router.replace(`/${nextLocale}`);
    setCurrentLang(value);
  }

  return (
    <Select value={currentLang} onValueChange={lang => onSelectChange(lang)}>
      <SelectTrigger className="w-[280px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{tDropdown('language')}</SelectLabel>
          <SelectItem value="pl">{t('pl')}</SelectItem>
          <SelectItem value="en">{t('en')}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
