import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerButtons : {
        display : 'flex',
        flexDirection : 'row',
        width : '100%',
        flex : 1,
        marginTop : 30,
        marginBottom : 20,
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
        
    }
})