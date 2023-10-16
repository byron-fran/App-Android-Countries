import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        width : '90%',
        marginHorizontal :'5%',
        columnGap : 15

    },
    card : {
        width : '47.8%',
        marginVertical : 20

    },
    cardText : {
        textAlign : 'center',
        color : '#0B3599',

        fontSize : 15,
        marginBottom : 10
    },
    cardImage : {
        width : '100%',
        objectFit : 'fill',
        height : 125,
        borderRadius : 5
    },
    textH1: {
        textAlign : 'center',
        marginTop : 20,
        color : '#000',
        fontWeight : 'bold',
        fontSize : 20,
    },
    relatedText :{
        textAlign: 'center',
        color : '#0B3599',
        fontWeight : 'bold',
        fontSize : 20,
        marginBottom : 10
    },
    relatedImage : {
        width : 200,
        objectFit : 'fill',
        height : 170,
        borderRadius : 5
    
    },
    relatedCard : {
        marginRight : 20,
        marginVertical : 20
    },
    relatedContainer: {
        flexDirection : 'row'
    }
})