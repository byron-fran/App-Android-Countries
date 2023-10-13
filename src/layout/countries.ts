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
    cardImage : {
        width : '100%',
        objectFit : 'fill',
        height : 125
    }
})