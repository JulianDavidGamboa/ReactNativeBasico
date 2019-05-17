import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

export default class Ejercicio9 extends Component {

    //•	Si se compran 3 o menos camisas se le aplica un descuento del 10%.
    //•	Si se compran más de 3 pero menos de 5 camisas se le aplica un 20% de descuento.
    //•	Si se compran 5 o más obtiene un descuento del 40%.

    constructor(props) {
        super(props);
        this.state = {
            cant: 0,
            price: 0,
            result: ''
        };
        this.enviar = this.enviar.bind(this);
    }

    enviar() {
        let cant = parseInt(this.state.cant);
        let price = parseInt(this.state.price);

        if (cant <= 3 ) {
            total = price - ( price * 0.10 );
        } else if ( cant == 4 ) {
            total = price - ( price * 0.20 );
        } else {
            total = price - ( price * 0.40 );
        }
        this.setState({result: 'El total de la compra es de : ' + total});

    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View>
                        <Text style={styles.titulo}> Ejercicio 9 </Text>
                    </View>  
                </View>
                <View>
                    <View>
                        <TextInput style={styles.color} placeholder="Cantidad" onChangeText={(data) => this.setState({ cant: data })}></TextInput>
                    </View>
                    <View>
                        <TextInput style={styles.color} placeholder="Total" onChangeText={(data) => this.setState({ price: data })}></TextInput>
                    </View>
                </View>
                <View>
                    <View>
                        <Button title="Enviar" onPress={this.enviar}></Button>
                    </View>
                </View>
                <View >
                    <View>
                        <Text style={styles.fontColor}> {this.state.result} </Text>
                    </View>
                </View>
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

Ejercicio9.navigationOptions = {
    title: 'Ejercicio 9'
};