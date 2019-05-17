import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Button onPress={() => this.props.navigation.navigate('Ejercicio1')} title="Ejercicio 1" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212F3D'
  }
});

Settings.navigationOptions = {
  title: 'Menu'
};

export default Settings;