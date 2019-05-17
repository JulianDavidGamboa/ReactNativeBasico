import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

export default class Ejercicio7 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            result: ''
        };
        this.enviar = this.enviar.bind(this);
    }

    enviar() {
        let price = parseInt(this.state.price);

        if( price > 5000 ) {
            total = price - ( price * 0.20 );
            this.setState({result: 'El total de la compra es de: '+ total});
        } else {
            this.setState({result: 'El total de su compra es de: ' + price});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Ejercicio 7</Text>
                <TextInput style={styles.color} placeholder="Total de compra" onChangeText={(data) => this.setState({price: data})}></TextInput>
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

Ejercicio7.navigationOptions = {
    title: 'Ejercicio 7'
};