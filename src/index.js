import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TwoColumns from './TwoColumns'


const TopLevel = ({ history }) => (
  <TwoColumns leftComponent="List" rightComponent="Detail"  path={history.location.pathname}/>
)

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route  path="/" component={TopLevel} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
