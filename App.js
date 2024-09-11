// App.js
import 'react-native-gesture-handler'; // Import obrigatório para React Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from 'C:\Users\jp-rj\horta-comunitaria-app\navigation\AppNavigator.js'; // Importando o AppNavigator

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
