import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./components";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { baseApi } from "./api";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  const client = new ApolloClient({
    uri: baseApi,
    cache: new InMemoryCache(),
  });

  root.render(
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  );
}
