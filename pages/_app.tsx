import { NextPage } from "next";
import Layout from "../components/layout";
import "../styles/globals.css";
// import type { AppProps } from "next/app";

type NextPagewithLayout = NextPage & { layout: typeof Layout };

type AppLayoutProps = {
  Component: NextPagewithLayout;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppLayoutProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
