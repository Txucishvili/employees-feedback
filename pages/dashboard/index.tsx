import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import * as React from 'react';
import MainLayout from '../../src/layout/layout';
import { NextPageWithLayout } from '../_app';

const Home: NextPageWithLayout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="app">
        <div style={{}}>
          main page
        </div>
      </div>
    </div>
  )
}


Home.getLayout = function getLayout(page: any) {
  return (
    <MainLayout className="layout-2">
      {page}
    </MainLayout>
  )
}

export default Home