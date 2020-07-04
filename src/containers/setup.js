import React from 'react';
import {Provider} from 'mobx-react';
import * as Stores from '../stores';
import AppContainer from './AppContainer';

export default function setup() {
  class Root extends React.Component {
    state = {
      isLoading: true,
      store: Stores.configure(() => {
        this.setState({isLoading: false});
      }),
    };

    render() {
      this.state.isLoading
      if (this.state.isLoading) {
        return null
      }
      return (
        <Provider {...Stores}>
          <AppContainer/>
        </Provider>
      );
    }
  }

  return Root;
}
