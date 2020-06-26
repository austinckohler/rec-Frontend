import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },

    text: {
        color: '#444444', 
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 5,
        margin: 'auto'
        },
    img: {
        width: 100,
        height: 100,
        // to make image rounded  => ex: borderRaduis: 100 / 2
        borderRadius: 50 / 2,
        }
})
export default styles