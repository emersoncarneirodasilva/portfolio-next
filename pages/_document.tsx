import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>Portifólio</title>
        
                
      </Head>
      <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-300 dark:to-dark-700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}