import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerButtons : {
        display : 'flex',
        flexDirection : 'row',
        width : '100%',
        flex : 1,
        marginTop : 30,
        marginBottom : 20,
        paddingBottom: 10,
        justifyContent : 'space-around',

    },
    btnPage : {
        backgroundColor : '#075BD2',
        paddingHorizontal : 10,
        paddingVertical : 5,
        borderRadius : 5
    },
    btnText: {
        color : '#fff',
        fontWeight : 'bold',
        fontSize : 20,
        borderColor : '#fff',
        
    },
    btnDisable : {

    },
    btnCurrent : {
        
        backgroundColor : '#fff',
        paddingHorizontal : 10,
        paddingVertical : 5,
        borderRadius : 5,
        borderColor : '#075BD2',
        borderWidth : 1

    },
    btnTextCurrent : {
        color : '#075BD2',
        fontWeight : 'bold',
        fontSize : 20,
        borderColor : '#fff',
    }
})