import { View, Text, Pressable,  } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import { CountriesContext } from '../../context/CountriesContext'
import { styles } from '../../layout/Buttons'


interface buttonProps {
    pageButtoms: () => number[];
    totalPages: number;
    routeContries?: boolean;
}

const ListButtons: React.FC<buttonProps> = ({ pageButtoms, totalPages,routeContries }) => {
    const { setCurrentPage, countries, currentPage, } = useContext(CountriesContext);
    const Navigate = useNavigation();
    
    const nextPage = '>';
    const prevPage = '<';
    return (

        <View style={[styles.containerButtons, {
            paddingBottom : routeContries ? 0 : 40
        } ]}>
            {currentPage !== 1 && (
                <Pressable style={styles.btnPage}
                    onPress={() => setCurrentPage(1)}
                    disabled={currentPage === 1}>
                    <Text style={styles.btnText}>{prevPage}</Text>
                </Pressable>
            )}


            {pageButtoms().map((button: number) => (
                <View key={Math.random().toString(16)}>
                    <Pressable style={currentPage !== button ? styles.btnPage : styles.btnCurrent}
                        disabled={button === currentPage}
                        onPress={() => setCurrentPage(button)}>
                        <Text style={currentPage !== button ? styles.btnText : styles.btnTextCurrent}>{button}</Text>
                    </Pressable>

                </View>
            ))}


            {currentPage !== totalPages && (
                <Pressable style={styles.btnPage}
                    disabled={currentPage === totalPages}
                    onPress={() => setCurrentPage(currentPage + 1)}
                >
                    <Text style={styles.btnText}>{nextPage}</Text>
                </Pressable>
            )}

            {totalPages !== 1 && (
                <Pressable style={styles.btnPage}
                    disabled={currentPage === totalPages}
                    onPress={() => {
                        console.log(currentPage)
                        setCurrentPage(totalPages)
                    }}>
                    <Text style={styles.btnText}>Último</Text>
                </Pressable>
            )}

        </View>

    )
}

export default ListButtons