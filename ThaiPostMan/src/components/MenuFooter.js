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

let { width, height } = Dimensions.get('screen');

const MenuFooter = ({ title }) => {
    return (
        <View style={styles.footer}>
           

                <View style={styles.nestedButtonView}>
                    <Icon color={'white'} name="barcode-scan" size={30} />
                </View>
                <View style={styles.nestedButtonView}>
                    <Icon color={'white'} name="qrcode-scan" size={30} />
                </View>
                <View style={styles.nestedButtonView}>
                    <Icon color={'white'} name="format-list-bulleted" size={30} />
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
    sizeLogo:
    {
        width: width * 0.4,
        resizeMode: 'contain',
        padding: 15,
    },
    nestedButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
       padding: 0,
       borderColor: '#FFF',
       borderRadius: 2,
       marginLeft: 12,
       marginRight: 12
       
    },

})

export default MenuFooter;
