import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './SidebarLayout.module.css';

const lngs: any = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Espanol' },
};

type Locales = 'es' | 'en';

// TODO: Lang enum in case of bigger lang amount
const changeLanguage = (i18n: any, locale: Locales) => {
  window.localStorage.setItem('user_locale', locale);
  i18n.changeLanguage(locale);
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
        <Link href="/">{t('home.label')}</Link>
        <Link href="/about">{t('about.label')}</Link>
        <Link href="/contact">{t('contact.label')}</Link>
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
              onClick={() => changeLanguage(i18n, lng as Locales)}
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
