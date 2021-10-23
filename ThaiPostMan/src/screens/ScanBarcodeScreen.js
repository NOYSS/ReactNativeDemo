import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Button, Dimensions } from 'react-native';

import Header from '../components/Header';
import MenuFooter from '../components/MenuFooter';

let { width, height } = Dimensions.get('screen');

export default class ScanBarcodeScreen extends Component {
    render() {

        return (
            <View style={[styles.container]}>
                <Header />
                <View style={{ flex: 12 }} >

                    <View style={styles.positionLogo}>
                        <Image source={require("../assets/images/postman/postman_hello_w100.png")} />
                        <Text>
                            Welcome to Scan Barcode!
                        </Text>
                    </View>
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
    positionLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height - 600

    },
})