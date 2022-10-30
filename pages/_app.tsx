import { NextIntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import './global.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

// TODO: remove any for the pageProps.messages that comes from the nextIntl
function MyApp({ Component, pageProps }: AppPropsWithLayout & any) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
