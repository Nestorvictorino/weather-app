import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import '../../public/css/style.css';
;


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: any) => page)
  return getLayout(
    <>
      {(< Component {...pageProps} />)}
    </>
  )
}

export default MyApp
