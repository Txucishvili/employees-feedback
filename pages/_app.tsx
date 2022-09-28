import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import createEmotionCache from '../utils/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../src/theme/theme';
import MainLayout from '../src/layout/layout';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { useRouter } from 'next/router';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout
}

function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  
  const getLayout = Component.getLayout || ((page) => page);

console.log('router', router, Component)

  // return 
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        {/* <MainLayout> */}
          {getLayout(<Component {...pageProps} />)}
        {/* </MainLayout> */}
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp
