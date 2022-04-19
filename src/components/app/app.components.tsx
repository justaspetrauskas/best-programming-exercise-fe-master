import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Home from "../../pages/home/home.page";

import "../../common/styles";
import "./app.components.css";

import { ApolloProvider } from "@apollo/client";
import client from "../../graphQL/apollo-client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
