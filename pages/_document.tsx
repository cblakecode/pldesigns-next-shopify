import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className=" bg-common-light pt-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-common-light scrollbar-thumb-rounded hover:scrollbar-thumb-slate-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
