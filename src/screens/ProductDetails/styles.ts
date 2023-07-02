import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 428,
    },
    footer: {
        flex: 1,
        backgroundColor: "#3A4757",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    textContainer: {

    },
    text: {
        color: "#475F7D",
        fontSize: 22,
        fontWeight: '800'
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"

    },
    img: {
        width: 308,
        height: 209.745,
        resizeMode: 'contain'
    }
})

export default styles