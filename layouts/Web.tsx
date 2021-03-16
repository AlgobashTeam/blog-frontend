import { ReactNode } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { defaultTitle, defaultDescription, defaultKeywords } from '../configs/layout';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
}

export default function Web(props: Props) {
  const {
    children,
    title,
    description,
    keywords,
  } = props;

  return (
    <>
      <Head>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Web.defaultProps = {
  title: defaultTitle,
  description: defaultDescription,
  keywords: defaultKeywords,
};
