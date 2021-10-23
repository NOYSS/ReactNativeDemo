import React, { Component } from 'react';
import { Router, Stack, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ScanQRCodeScreen from '../screens/ScanQRCodeScreen';
import ScanBarcodeScreen from '../screens/ScanBarcodeScreen';


export default class Routing extends Component {


    componentWillMount() {

        console.log("=== 1. ComponentWillMount() Called. ");

    }

    render() {
        console.log("=== 2. Render() Called. ");
        return (
            <Router duration={10} >
                <Stack key="root" hideNavBar={true}>
                    <Scene key='loginScreen' component={LoginScreen} title='Login' initial={true} />
                    <Scene key='homeScreen' component={HomeScreen} title='Home' />
                    <Scene key='scanQRCodeScreen' component={ScanQRCodeScreen} title='ScanQRCode' />
                    <Scene key='scanBarcodeScreen' component={ScanBarcodeScreen} title='ScanBarcode' />
                </Stack>
            </Router>
        );
    }

    componentDidMount() {

        console.log("=== 3. ComponentDidMount() Called. ");

    }

    componentDidCatch(error, info) {

        //Handle error.
        console.error("=== 4. componentDidCatch() Called. ", error);
    }

}