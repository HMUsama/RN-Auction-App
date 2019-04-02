import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Navigator from './src/navigation/Navigation'
import Drawer from './src/navigation/Drawer'
import {Provider} from 'react-redux'
import store from './src/store/index'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D8631',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
