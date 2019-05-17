import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

export default class Ejercicio10 extends Component {

//     TIEMPO
// -----------------------------------
// •	Menos de 1 año
// •	1 año o más y menos de 2 años
// •	2 años o más y menos de 5 años
// •	5 años o más y menos de 10 años
// •	10 años o más
// UTILIDAD
// -------------------
// •	5   % del salario
// •	7   % del salario
// •	10 % del salario
// •	15 % del salario
// •	20 % del salario
 

    constructor(props) {
        super(props);
        this.state = {
            months: 0,
            salary: 0,
            result: ''
        };
        this.enviar = this.enviar.bind(this);
    }

    enviar() {
        let months = parseInt(this.state.months);
        let salary = parseInt(this.state.salary);

        if ( months < 12 ) {
            total = salary - ( salary * 0.05 );
        } else if ( months >= 12 && months < 24 ) {
            total = salary - ( salary * 0.07 );
        } else if ( months >= 24 && months < 60 ) {
            total = salary - ( salary * 0.10 );
        } else if ( months >= 60 && months < 120 ) {
            total = salary - ( salary * 0.15 );
        } else {
            total = salary - ( salary * 0.20 );
        }

        this.setState({result: 'La prima del accionista es de: $' + total});

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}> .: Ejercicio 10 :. </Text>
                <TextInput style={styles.color} placeholder="Meses laborados" onChangeText={(data) => this.setState({ months: data })}></TextInput>
                <TextInput style={styles.color} placeholder="Salario" onChangeText={(data) => this.setState({ salary: data })}></TextInput>
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
    }, 
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    box: {
        flex: 1,
        height: 100
    }
});

Ejercicio10.navigationOptions = {
    title: 'Ejercicio 10'
};
