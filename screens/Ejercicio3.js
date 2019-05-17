import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

export default class Ejercicio3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            result: '',
            err: false
        };
        this.enviar = this.enviar.bind(this);
    }

    enviar() {
        let num = parseInt(this.state.num);

        if(num < 10 && num >= 0 ) {
            this.setState({result: 'El numero es de una cifra'});
            this.setState({err: false});
        } else if ( num > 9 && num < 100 ) {
            this.setState({result: 'El numero es de dos cifras'});
            this.setState({err: false});
        } else if ( num > 99 && num < 1000 ) {
            this.setState({result: 'El numero es de tres cifras'});
            this.setState({err: false});
        } else if ( num > 999 ) {
            this.setState({result: 'El numero es mayor a tres cifras'});
        } else {
            Alert.alert(
                'Error',
                'Debe ingresar numeros positivos',
                [
                    {
                        style: {
                            color: 'red'
                        }
                    }
                ]
            )
        }
    }

  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.titulo}> Ejercicio 3 </Text>
            <TextInput style={styles.color} placeholder="Ingrese un numero" onChangeText={(data) => this.setState({num: data})}></TextInput>
            <Button title="Enviar" onPress={this.enviar}></Button>
            <Text style={styles.fontColor}> {this.state.result} </Text>
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
    },
    fontColor: {
      color: 'white',
      marginTop: '2%',
      fontWeight: 'bold',
      fontSize: 15,
      marginBottom: '25%'
    },
    fontColorErr: {
      color: 'red',
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

Ejercicio3.navigationOptions = {
    title: 'Ejercicio 3'
}
