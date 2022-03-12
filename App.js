/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import persistor, { store } from './src/app/store';
import NavBottom from './src/container/navBottom';
import HomeScreen from './src/screens/HomeScreen';

import LoginScreen from './src/screens/LoginScreen';
import ViewContent from './src/screens/ScheduleScreen/ViewContent';
import Notification from './src/screens/Notification';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const Stack = createNativeStackNavigator();
const App = () => {
  const MainScreen = () => {
    return <NavBottom />;
  };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={MainScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="viewContent"
                component={ViewContent}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="notification"
                component={Notification}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
