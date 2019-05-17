import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';


export default class Ejercicio6 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            note1: 0,
            note2: 0,
            note3: 0,
            result: ''
        };
        this.enviar = this.enviar.bind(this);
    }

    enviar() {
        let note1 = parseFloat(this.state.note1);
        let note2 = parseFloat(this.state.note2);
        let note3 = parseFloat(this.state.note3);

        prom = (note1 + note2 + note3) / 3;

        if(prom >= 3.5) {
            this.setState({result: 'El estudiante aprobó la materia'});
        } else {
            this.setState({result: 'El estudiante reprobó la materia'});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Ejercicio 6</Text>
                <TextInput style={styles.color} placeholder="Ingrese una nota" onChangeText={(data) => this.setState({ note1: data })}></TextInput>
                <TextInput style={styles.color} placeholder="Ingrese una nota" onChangeText={(data) => this.setState({ note2: data })}></TextInput>
                <TextInput style={styles.color} placeholder="Ingrese una nota" onChangeText={(data) => this.setState({ note3: data })}></TextInput>
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

Ejercicio6.navigationOptions = {
    title: 'Ejercicio 6'
};
