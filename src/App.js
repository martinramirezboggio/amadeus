import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout/Layout';
import ErrorManager from './containers/ErrorManager/ErrorManager';
import Auth from "./containers/Auth/Auth";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/manager" component={ErrorManager} />
          <Route path="/" exact component={Auth} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
