import { View, Text, ScrollView, Pressable, Button } from 'react-native'
import { useContext } from 'react';
import { CountriesContext } from '../../context/CountriesContext';
import { Countries } from '../../interfaces/Countrires';
import CardCountry from './CardCountry';
import { styles } from '../../layout/countries';
import NavBar from '../../components/Navbar/NavBar';
import usePagination from '../../hooks/UsePagination';
import ListButtons from '../Buttoms/ListButtons';

const ListCoutries = () => {
    const { setCurrentPage, countriesPerPage} = useContext(CountriesContext);
    const { pageButtoms, totalPages, currentPage,} = usePagination()
 
    if(countriesPerPage.length <=0){return null};


    return (

        <ScrollView>
            <NavBar />
            <View>
              
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
            <ListButtons/>
            
            </View>
        </ScrollView>

    )
}

export default ListCoutries