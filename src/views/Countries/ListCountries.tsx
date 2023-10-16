import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, Button } from 'react-native'
import { useContext } from 'react';
import { CountriesContext } from '../../context/CountriesContext';
import { Countries } from '../../interfaces/Countrires';
import CardCountry from './CardCountry';
import { styles } from '../../layout/countries';
import { styles as buttonStyles } from '../../layout/Buttons'
import NavBar from '../../components/Navbar/NavBar';
import ListButtons from '../Buttoms/ListButtons';
import usePagination from '../../hooks/UsePagination';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };
const ListCoutries = ({route} : Props) => {
    const [routeContries, setRouteCountries] = useState(false)
    useEffect(() => {
        if(route.name === 'countries'){
            setRouteCountries(true)
        }else{
            setRouteCountries(false)
        }
    }, [])

    const {countries} = useContext(CountriesContext);
    const {countriesPerPage, pageButtoms, totalPages} = usePagination(countries);
    
    if(countriesPerPage.length<=0 || countriesPerPage === undefined){return null};

    return (

        <ScrollView>
            <NavBar />
            <View>
            
            <View style={styles.container}>
                {countriesPerPage.map(country => (
                    <CardCountry key={country.cca3} country={country}/>
                ))}

            </View>
                <ListButtons
                    pageButtoms={pageButtoms}
                    totalPages={totalPages}
                    routeContries={routeContries}/>
            </View>
        </ScrollView>

    )
}

export default ListCoutries