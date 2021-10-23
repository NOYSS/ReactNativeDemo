import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';

import Header from '../components/Header';
import MenuFooter from '../components/MenuFooter';

let { width, height } = Dimensions.get('screen');

export default class ScanQRCodeScreen extends Component {


    PermissionsStorage = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                'title': 'ขออนุญาติใช้กล้อง',
                'message': 'ระบบต้องการใช้กล้อง'
            })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("คุณสามารถใช้กล้องได้");
        } else {
            console.log("คุณไม่สามารถใช้กล้องได้");
        }
    }

    onSuccess(e) {
        Linking.openURL(e.data).catch(err => console.error('An error occured', err));
    }
    async componentDidMount() {
        PermissionsStorage();
    }


    render() {

        return (
            <View style={[styles.container]}>
                <Header />
                <View style={{ flex: 12 }} >

                    <View style={styles.positionLogo}>
                        <Image source={require("../assets/images/postman/postman_hello_w100.png")} />
                        <Text>
                            Welcome to Scan QRCode!
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