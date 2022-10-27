import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './SidebarLayout.module.css';

const lngs: any = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Espanol' },
};

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <nav className={styles.nav}>
        <input
          className={styles.input}
          placeholder={`${t('common.search')}...`}
        />
        <Link href="/">
          <a>{t('home.label')}</a>
        </Link>
        <Link href="/about">
          <a>{t('about.label')}</a>
        </Link>
        <Link href="/contact">
          <a>{t('contact.label')}</a>
        </Link>
      </nav>
      <div>
        <span className="isolate inline-flex rounded-md shadow-sm">
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
};

export default SidebarLayout;
