import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { appWithI18Next, useSyncLanguage } from 'ni18n';
import { ni18nConfig } from '../ni18n.config';
import './global.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const DEFAUL_LOCALE = 'en';

// TODO: remove any for the pageProps.messages that comes from the nextIntl
function MyApp({ Component, pageProps }: AppPropsWithLayout & any) {
  const locale =
    typeof window !== 'undefined' && window.localStorage.getItem(DEFAUL_LOCALE);

  useSyncLanguage(locale || DEFAUL_LOCALE);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);
