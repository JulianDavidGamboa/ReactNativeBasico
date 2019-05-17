import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

export default class Ejercicio4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            result: ''
        };
        this.enviar = this.enviar.bind(this);
    }

    enviar() {
        let num1 = parseInt(this.state.num1);
        let num2 = parseInt(this.state.num2);

        if (num1 == num2) {
            this.setState({result: 'Los dos numeros son iguales'});
        } else {
            this.setState({result: 'Los numeros son diferentes'});
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Ejercicio 4</Text>
                <TextInput style={styles.color} placeholder="Ingrese el numero 1" onChangeText={(data) => this.setState({ num1: data })}></TextInput>
                <TextInput style={styles.color} placeholder="Ingrese el numero 2" onChangeText={(data) => this.setState({ num2: data })}></TextInput>
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


Ejercicio4.navigationOptions = {
    title: 'Ejercicio 4'
};