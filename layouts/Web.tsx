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
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
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
