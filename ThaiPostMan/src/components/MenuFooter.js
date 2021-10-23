import React from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';

let { width, height } = Dimensions.get('screen');

const MenuFooter = ({ title }) => {
    return (
        <View style={styles.footer}>


            <View style={styles.nestedButtonView}>
                <View style={styles.menuBoder}>
                    <Icon.Button onPress={() => Actions.loginScreen()} backgroundColor="rgba(255, 0, 0, 0.2)" style={{ padding: 0, paddingLeft: 8 }} color={'white'} name="logout-variant" size={35} />
                </View>
            </View>
            <View style={styles.nestedButtonView}>
                <View style={styles.menuBoder}>
                    <Icon.Button onPress={() => Actions.scanBarcodeScreen()} backgroundColor="rgba(255, 0, 0, 0.2)" style={{ padding: 0, paddingLeft: 8 }} color={'white'} name="barcode-scan" size={35} />
                </View>
            </View>
            <View style={styles.nestedButtonView}>
                <View style={styles.menuBoder}>
                    <Icon.Button onPress={() => Actions.scanQRCodeScreen()} backgroundColor="rgba(255, 0, 0, 0.2)" style={{ padding: 0, paddingLeft: 8 }} color={'white'} name="qrcode-scan" size={35} />
                </View>
            </View>
            <View style={styles.nestedButtonView} >
                <View style={styles.menuBoder}>
                    <Icon.Button backgroundColor="rgba(255, 0, 0, 0.2)" style={{ padding: 0, paddingLeft: 8 }} color={'white'} name="format-list-bulleted" size={35} />
                </View>
            </View>
            <View style={styles.nestedButtonView}>
                <View style={styles.menuBoder}>
                    <Icon.Button onPress={() => Actions.homeScreen()} backgroundColor="rgba(255, 0, 0, 0.2)" style={{ padding: 0, paddingLeft: 8 }} color={'white'} name="home" size={35} />
                </View>
            </View>

        </View>
    )
}

MenuFooter.defaultProps = {
    title: 'Menu Footer'
}

const styles = StyleSheet.create({
    footer: {
        height: 60,
        backgroundColor: '#D43D40',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row-reverse'
    },
    text: {
        color: '#fff',
        fontSize: 24
    },
    menuBoder: {
        borderWidth: 0.5,
        borderColor: "#FFF",
        borderRadius: 3,
        padding: 2
    },
    nestedButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        borderColor: '#FFF',
        borderRadius: 2,
        marginLeft: 4,
        marginRight: 4

    },

})

export default MenuFooter;
