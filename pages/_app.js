import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head'
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";
import { store } from "../lib/store";
import { Footer } from '../components/footer';

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Head>
          <title>TodoMVC</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <Footer />
        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
          }
          button {
            margin: 0;
            padding: 0;
            border: 0;
            background: none;
            font-size: 100%;
            vertical-align: baseline;
            font-family: inherit;
            font-weight: inherit;
            color: inherit;
            -webkit-appearance: none;
            appearance: none;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          body {
            font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
            line-height: 1.4em;
            background: #f5f5f5;
            color: #4d4d4d;
            min-width: 230px;
            max-width: 550px;
            margin: 0 auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-weight: 300;
          }
          :focus {
            outline: 0;
          }
          .hidden {
            display: none;
          }
      `}</style>
      </Container>
    );
  }
}

export default withRedux(store)(MyApp);
