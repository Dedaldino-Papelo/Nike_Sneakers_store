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
    },
    colorsWrapper: {
        marginStart: 30,
        marginTop: 30
    },
    colorText: {
        color: "#E0E5EB",
        fontSize: 20,
        fontWeight: "800"
    },
    DescFooter: {
        flexDirection: "row",
        gap: 10
    },
    Title: {
        color: "rgba(224, 229, 235, 0.50)",
        fontSize: 20,
        fontWeight: "800"
    },
    prodInfo: {
        color: "rgba(224, 229, 235, 0.50)",
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        marginTop: 16
    }
})

export default styles