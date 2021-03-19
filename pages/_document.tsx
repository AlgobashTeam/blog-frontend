/* eslint-disable no-underscore-dangle */

import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-200 font-sans leading-normal tracking-normal">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
