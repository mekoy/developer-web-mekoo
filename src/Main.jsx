import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './stores/storeApp';
import App from "./App";


class Main extends React.Component {

  render() {
    return (
      <Provider store={configureStore()}>
          <App />
      </Provider>
    )
  }
}

export default (Main);



