import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default class Ejercicio8 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hours: 0,
            result: ''
        };
        this.enviar = this.enviar.bind(this);
    }

    enviar() {

        //•	Si trabaja 40 horas o menos se le paga $2000 por hora.
        //•	Si trabaja más de 40 horas se le paga $2000 por cada una de las primeras 40 horas 
        //y $3000 por cada hora extra.

        let name = this.state.name;
        let hours = parseInt(this.state.hours);
        let horaExtra = 0;

        if(hours <= 40) {
            salary = hours * 2000;
        } else {
            horaExtra = (hours - 40) * 3000;
            salary = (40 * 2000) + horaExtra;
        }

        this.setState({result: name + ' gana $' + salary});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}> .: Ejercicio 8 :. </Text>
                <TextInput style={styles.color} placeholder="Nombre Trabajador" onChangeText={(data) => this.setState({ name: data })}></TextInput>
                <TextInput style={styles.color} placeholder="Horas Laboradas" onChangeText={(data) => this.setState({ hours: data })}></TextInput>
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
        width: 200,
        marginTop: '5%',
        borderWidth: 1,
        borderColor: 'white',
        textAlign: 'center',
        borderRadius: 5
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: '30%',
        color: 'white'
    },
    boton: {
        marginTop: '10%',
        width: 200
    }
});


Ejercicio8.navigationOptions = {
    title: 'Ejercicio 8'
};