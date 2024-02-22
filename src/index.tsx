import React from 'react';
import ReactDOM from 'react-dom/client';
import background from './assets/background.jpg';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';

import { createGlobalStyle } from 'styled-components';
import { variables } from './styles/variables';

import { App } from './App';

const Global = createGlobalStyle`
  * {
    margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Segoe Print';
	font-size: ${variables.fontSizes.fontS}px;
	line-height: 24px;
	color: #000;
  }
  body {
	width: 100%;
	height: 500px;
	background-image: url('${background}');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;
}
  a {
		text-decoration: none;
	}

	li {
		list-style: none;
	}
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Global />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
