import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import App from './src/App';
import store from './src/store';
import { name as appName } from './app.json';

export default function Root() {
  // Apply custom values here.
  const theme = DefaultTheme;

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <App />
        <StatusBar backgroundColor={theme.colors.primary} />
      </PaperProvider>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => Root);
