import { View, Text } from 'react-native'
import {useContext} from 'react';
import { CountriesContext } from '../context/CountriesContext';

const ListCoutries = () => {
    const {countries} = useContext(CountriesContext);


    return (
        <View>
            <Text>ListCoutries</Text>
        </View>

    )}

export default ListCoutries