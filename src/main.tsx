import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { Root } from './app/Root';

const client = new ApolloClient({
	// а здесь т.к используются прокси при запросе на /api автоматически идет перенаправление на api.unihow.ru
	uri: '/api',
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Root />
		</ApolloProvider>
	</React.StrictMode>,
);
