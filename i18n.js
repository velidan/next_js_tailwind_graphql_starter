import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          common: {
            search: 'Search',
          },
          // here we will place our translations...
          home: {
            label: 'Home',
            welcome: 'Hello world. Home page!',
          },
          about: {
            label: 'About',
          },
          contact: {
            label: 'Contact',
          },
        },
      },
      es: {
        translation: {
          common: {
            search: 'Búsqueda',
          },
          home: {
            label: 'Hogar',
            welcome: 'Hola Mundo. ¡Página de inicio!',
          },
          about: {
            label: 'Sobre',
          },
          contact: {
            label: 'Contacto',
          },
        },
      },
    },
  });

export default i18n;
