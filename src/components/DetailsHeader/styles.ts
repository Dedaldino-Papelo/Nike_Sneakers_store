import { StyleSheet, StatusBar } from 'react-native';

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight : 64
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: statusBarHeigth,
        marginStart: 40,
        marginEnd: 40
      },
})

export default styles