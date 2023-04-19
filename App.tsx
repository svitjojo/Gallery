/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import GalleryScreen from './src/screens/GalleryScreen';
import ImageScreen from './src/screens/ImageScreen';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

export type RootStackParams = {
  Gallery: undefined;
  FullscreenImage: {
    photoId: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Gallery" component={GalleryScreen} />
          <RootStack.Screen
            name="FullscreenImage"
            initialParams={{ photoId: '' }}
            component={ImageScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
