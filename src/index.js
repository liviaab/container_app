import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MicroFrontend from './MicroFrontend.jsx';

const List = ({ history }) => (
  <MicroFrontend path={history.location.pathname} componentName="List" />
)

const Detail = ({ history }) => (
  <MicroFrontend path={history.location.pathname} componentName="Detail" />
)

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/:id" component={Detail} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
