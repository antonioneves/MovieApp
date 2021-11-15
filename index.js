import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Navigator from './src/routes/HomeStack';

AppRegistry.registerComponent(
  appName,
  () =>
    (Node = () => {
      return (
        <Navigator theme="dark"/>
      );
    }),
);
