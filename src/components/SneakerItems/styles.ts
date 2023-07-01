import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: 240,
        height: 225,
        borderRadius: 30,
        backgroundColor: "#E0E5EB",
        flexDirection: 'column',
    },
    priceWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginStart: 30,
        marginEnd: 35,
        marginTop: 17

    },
    price: {
        color: "#475F7D",
        fontSize: 32,
        fontWeight: '800'
    },
    title: {
        color: "#475F7D",
        fontWeight: '800',
        fontSize: 16
    },
    textInfo: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    image: {
        width: 180,
        height: 101.044
    }
})

export default styles