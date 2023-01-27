import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Hero from 'components/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Integra Software Solution</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Welcome To Integra Software Solution" message="Help businesses of every size to become better and beyond and also helps others with apps." />
    </>
  );
}
