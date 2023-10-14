import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    detailContainer : {
        flex: 1,
        width : '90%',
        marginHorizontal : '5%',
        marginTop : 20,
    },
    countryName : {
        textAlign : 'center',
        fontSize : 30,
        color : '#0B3599',
        fontWeight : 'bold',
        marginBottom : 10,
    },
    imageDetail: {
        width: "100%",
        height: 300,
         borderRadius : 10,
    },

    btnBack : {
        marginTop : 50,
        backgroundColor : '#1ED4DE',
        padding : 10,
        borderRadius: 10,
        marginBottom : 20,
    
    },
    DetailText : {
        color : '#0B3599',
        fontWeight : 'bold',
        fontSize : 15,
        marginTop : 10,
        backgroundColor : '#D6E4F8',
        padding : 10,
        borderRadius : 5
    },
    btnBackText : {
        textAlign : 'center',
        color : '#fff',
        fontSize : 20,
        fontWeight : 'bold',
        textTransform : 'uppercase'
    }
});