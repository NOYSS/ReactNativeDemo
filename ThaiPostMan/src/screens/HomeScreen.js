import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'; // -- react-native link react-native-vector-icons

import Header from '../components/Header';
import MenuFooter from '../components/MenuFooter';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={[styles.container]}>
                <Header />
                <View style={{ flex: 12 }} >
                    <View style={styles.fixToText}>
                        <Button onPress={() => Actions.loginScreen()} title=" Go to Login!" />
                    </View>
                    <Text>
                        Welcome to Home!
                    </Text>
                </View>
                <MenuFooter />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "column",
        flex: 1,
    },
    text: {
        color: 'blue',
        fontSize: 40
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})