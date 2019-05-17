import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export class Ejercicio2 extends Component {

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
    
        if (num % 2 == 0) {
          this.setState({result: 'El numero es par'})
        } else {
          this.setState({result: 'El numero es impar'})
        }
      }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Ejercicio 2 </Text>
        <TextInput style={styles.color} placeholder="Ingrese un numero" onChangeText={(data) => this.setState({num: data})}></TextInput>
        <Button title="Enviar" onPress={this.enviar}></Button>
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
      fontSize: 15,
      marginBottom: '25%'
    },
    color: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
      width: 120,
      marginTop: '5%'
    },
    titulo : {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: '30%',
      color: 'white'
    }
});

Ejercicio2.navigationOptions = {
    title: 'Ejercicio 2'
};

export default Ejercicio2