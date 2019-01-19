import React, { Component } from 'react';
import './css/app.css';
import './css/common.css';
import { connect } from "react-redux"
import { HashRouter, Route, Switch } from 'react-router-dom'
import { OperationPage, AmountPage } from './components/Pages';
import { getAmount } from './store/action/amountActions';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getAmount())
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={OperationPage} />
          <Route path="/amount" component={AmountPage} />
        </Switch>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = dispatch =>
  ({
    dispatch
  })

const connectedApp = connect(null, mapDispatchToProps)(App)
export { connectedApp as App }
