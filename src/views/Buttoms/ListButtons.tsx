import { View, Text, Pressable } from 'react-native'
import usePagination from '../../hooks/UsePagination'
import { useContext } from 'react'
import { CountriesContext } from '../../context/CountriesContext'
import { styles } from '../../layout/Buttons'

const ListButtons = () => {
    const { setCurrentPage } = useContext(CountriesContext)
    const { pageButtoms, totalPages, currentPage } = usePagination();

    const nextPage= '>';
    const prevPage = '<';
    return (

        <View style={styles.containerButtons}>
            <Pressable style={styles.btnPage} 
             onPress={() => setCurrentPage(1)}>
                <Text style={styles.btnText}>{prevPage}</Text>
            </Pressable>
            {pageButtoms().map((button : number)=> (
                <View key={Math.random().toString(16)}>
                    <Pressable style={styles.btnPage} onPress={() => setCurrentPage(button)}>
                        <Text style={styles.btnText}>{button}</Text>
                    </Pressable>

                </View>
            ))}
            <Pressable style={styles.btnPage} 
                 onPress={() => setCurrentPage(currentPage + 1)}>
                <Text style={styles.btnText}>{nextPage}</Text>
            </Pressable>
            <Pressable style={styles.btnPage} 
                 onPress={() => setCurrentPage(totalPages)}>
                <Text style={styles.btnText}> {totalPages}</Text>
            </Pressable>
        </View>

    )
}

export default ListButtons