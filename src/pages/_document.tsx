// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

const isProd = process.env.NODE_ENV === 'production';

export default function Document() {
  return (
    <Html>
      <Head>
        {/*GitHub Pages insert base */}
        {isProd && <base href="/my-next-site/" />}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
