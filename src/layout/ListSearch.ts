import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerSearch : {
        flex : 1,
    },
    buttonFixed : {
        backgroundColor : '#12B664',
        position: 'absolute',
        bottom:0,
        width : '95%',
        marginHorizontal : '2.5%',
        padding : 10,
        marginBottom : 5,
        borderRadius : 5
    },
    textBotton : {
        color : '#fff',
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 20,
        textTransform : 'uppercase'
    
    },
    textTitle : {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color : '#000' 
    }
})