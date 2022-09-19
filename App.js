import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import PrintPdf from './pages/ExportPDF';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerMode:'none'
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerMode:'none', //Set Header color
            headerVisible: false,
          }}
        />
        <Stack.Screen
          name="ExportPDF"
          component={PrintPdf}
          options={{
            headerMode:'none' //Set Header color
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
