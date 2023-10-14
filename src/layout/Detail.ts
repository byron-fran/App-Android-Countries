import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    detailContainer : {
        flex: 1,
        width : '90%',
        marginHorizontal : '5%',
        marginTop : 20,
    },
    imageDetail: {
        width: "100%",
        height: 300,
         borderRadius : 10,
    },

    btnBack : {
        marginTop : 100,
        backgroundColor : '#1ED4DE',
        padding : 10,
        borderRadius: 10,
        marginBottom : 20,
    
    },
    btnBackText : {
        textAlign : 'center',
        color : '#fff',
        fontSize : 20,
        fontWeight : 'bold',
        textTransform : 'uppercase'
    }
});