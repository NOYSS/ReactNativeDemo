import React from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native'

let { width, height } = Dimensions.get('screen');

const Header = ({ headerStyle, headerImageSize }) => {
    return (
        <View style={headerStyle}>
            <Image
                source={require("../assets/images/logo/thailand_post_logo_land.png")}
                style={[styles.sizeLogo,   headerImageSize]}
            />
        </View>
    )
}

Header.defaultProps = {
    headerStyle: {
       
        height: 60,
        backgroundColor: '#D43D40',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    headerImageSize: {width: width * 0.4}
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#D43D40',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        color: '#fff',
        fontSize: 24
    },
    sizeLogo:
    {    
        resizeMode: 'contain',        
    }
})

export default Header;