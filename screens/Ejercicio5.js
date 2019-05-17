import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

export default class Ejercicio5 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            result: ''
        };
        this.enviar = this.enviar.bind(this);
    }

    enviar() {

        let num1 = parseInt(this.state.num1);
        let num2 = parseInt(this.state.num2);
        let num3 = parseInt(this.state.num3);

        if (num1 > num2 && num1 > num3) {
            this.setState({result: 'El primer numero es mayor'});
        } else if ( num2 > num1 && num2 > num3 ) {
            this.setState({result: 'El segundo numero es mayor'});
        } else {
            this.setState({result: 'El tercer numero es mayor'});
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Ejecicio 5</Text>
                <TextInput style={styles.color} placeholder="Ingrese un numero" onChangeText={(data) => this.setState({ num1: data })}></TextInput>
                <TextInput style={styles.color} placeholder="Ingrese un numero" onChangeText={(data) => this.setState({ num2: data })}></TextInput>
                <TextInput style={styles.color} placeholder="Ingrese un numero" onChangeText={(data) => this.setState({ num3: data })}></TextInput>
                <Button title="Enviar" onPress={this.enviar}></Button>
                <Text style={styles.fontColor}>{this.state.result}</Text>
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
        width: 140,
        marginTop: '5%'
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: '30%',
        color: 'white'
    }
});

Ejercicio5.navigationOptions = {
    title: 'Ejercicio 5'
};