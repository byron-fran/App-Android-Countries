import { View, Text, ScrollView, Pressable, Button } from 'react-native'
import { useContext } from 'react';
import { CountriesContext } from '../../context/CountriesContext';
import { Countries } from '../../interfaces/Countrires';
import CardCountry from './CardCountry';
import { styles } from '../../layout/countries';
import NavBar from '../../components/Navbar/NavBar';
import usePagination from '../../hooks/UsePagination';

const ListCoutries: React.FC<Countries[]> = () => {
    const { setCurrentPage, countriesPerPage} = useContext(CountriesContext);
    const { pageButtoms, totalPages, currentPage,} = usePagination()
 
    if(countriesPerPage.length <=0){return null};
    

    return (

        <ScrollView>
            <NavBar />
            <View>
                <Text>ListCoutries</Text>
                <View style={styles.container}>
                    {countriesPerPage.length > 0 && countriesPerPage.map(country => {
                        // console.log(country)
                        return (
                            <CardCountry key={country?.cca3} country={country} />
                        )
                    })}
                </View>
            </View>
            <View>
                <Button title='Prev' onPress={() => setCurrentPage(1)}></Button>
                {pageButtoms().map(button => (
                    <View key={Math.random().toString(16)}>
                        <Pressable onPress={() => setCurrentPage(button)}>
                            <Text>{button}</Text>
                        </Pressable>

                    </View>

                ))}
                <Button title='next' onPress={() => setCurrentPage(currentPage + 1)}></Button>
                <Button title={`${totalPages}`} onPress={() => setCurrentPage(totalPages)}></Button>
            </View>
        </ScrollView>

    )
}

export default ListCoutries