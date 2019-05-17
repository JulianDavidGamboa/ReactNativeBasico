import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export class Ejercicio1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      result: ''
    };
    this.enviar = this.enviar.bind(this);
  }

  enviar() {
    let num = parseInt(this.state.num);

    if (num == 0) {
      this.setState({result: 'El numero es 0'})
    } else if (num < 0) {
      this.setState({result: 'El numero es negativo'})
    } else {
      this.setState({result: 'El numero es positivo'})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Ejercicio 1</Text>
        <TextInput style={styles.color} placeholder="Ingrese un numero" onChangeText={(data) => this.setState({num: data})}></TextInput>
        <Button title="Enviar" onPress={this.enviar} />
        <Text style={styles.fontColor}> {this.state.result} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212F3D'
  },
  fontColor: {
    color: 'white',
    marginTop: '2%',
    fontWeight: 'bold',
    fontSize: 15
  },
  color: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    width: 120
  },
  titulo : {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '30%',
    color: 'white'
  }
});

Ejercicio1.navigationOptions = {
  title: 'Ejercicio 1'
};

export default Ejercicio1