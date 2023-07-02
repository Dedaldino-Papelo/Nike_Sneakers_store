import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 30,
        marginHorizontal: 30

    },
    price: {
        justifyContent: "center",
        alignItems: "center",
        width: 170,
        height: 75,
        backgroundColor: "#E0E5EB",
        borderTopLeftRadius: 30
    },
    cart: {
        flexDirection: "row",
        gap: 15,
        justifyContent: "center",
        alignItems: "center",
        width: 170,
        height: 75,
        backgroundColor: "#FC783F",
        borderTopRightRadius: 30
    },
    Textprice: {
        color: "#475F7D",
        fontSize: 32,
        fontWeight: "800",
    },
    cartText: {
        color: "#475F7D",
        fontSize: 20,
        fontWeight: "800",
    }
})

export default styles