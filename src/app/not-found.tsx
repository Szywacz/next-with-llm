import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('notFound');
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-xl">
        <div className="text-secondary-black font-bold">{t('info')}</div>
        <Link href="/">{t('goBack')}</Link>
      </h1>
    </div>
  );
}
