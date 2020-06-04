import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ShoppingListsView from './components/ShoppingListsView';
import Header from './components/Header';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ListSelection"
          headerMode="screen"
          screenOptions={{
            header: (props) => <Header {...props} />,
          }}>
          <Stack.Screen
            name="ListSelection"
            component={ShoppingListsView}
            options={{ title: 'Shopping lists' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
