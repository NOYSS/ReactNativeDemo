import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Button, TextInput, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Header from '../components/Header';

let { width, height } = Dimensions.get('screen');

export default class LoginScreen extends Component {

    render() {
        return (
            <View style={[styles.container]}>
                <Header headerStyle={{
                    flex: 3, backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} headerImageSize={{ width: width * 0.6 }} />

                <View style={{ flex: 12 }} >

                    <View style={{ marginTop: 0 }} >
                        <TextInput
                            style={styles.input}

                        />
                        <TextInput
                            style={styles.input}

                        />
                    </View>
                    <View style={styles.positionBtn}>
                        <Button onPress={() => Actions.homeScreen()} title="     Login     " />
                    </View>

                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D43D40',
        flexDirection: "column",
        flex: 1,
    },
    text: {
        color: 'blue',
        fontSize: 40
    },
    positionBtn: {
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 16,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 4,
        borderColor: '#FFF'
    },
})