import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import Settings from './screens/Settings';
import Ejercicio1 from './screens/Ejercicio1';
import Ejercicio2 from './screens/Ejercicio2';
import Ejercicio3 from './screens/Ejercicio3';
import Ejercicio4 from './screens/Ejercicio4';
import Ejercicio5 from './screens/Ejercicio5';
import Ejercicio6 from './screens/Ejercicio6';
import Ejercicio7 from './screens/Ejercicio7';
import Ejercicio8 from './screens/Ejercicio8';
import Ejercicio9 from './screens/Ejercicio9';
import Ejercicio10 from './screens/Ejercicio10';

const AppNavigator = createDrawerNavigator({
  SettingScreen: { screen: Settings},
  Ejercicio1: { screen: Ejercicio1 },
  Ejercicio2: { screen: Ejercicio2 },
  Ejercicio3: { screen: Ejercicio3 },
  Ejercicio4: { screen: Ejercicio4 },
  Ejercicio5: { screen: Ejercicio5 },
  Ejercicio6: { screen: Ejercicio6 },
  Ejercicio7: { screen: Ejercicio7 },
  Ejercicio8: { screen: Ejercicio8 },
  Ejercicio9: { screen: Ejercicio9 },
  Ejercicio10: { screen: Ejercicio10 }
},
{
  drawerBackgroundColor: '#D8D7D6'
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}


export default createAppContainer(AppNavigator);