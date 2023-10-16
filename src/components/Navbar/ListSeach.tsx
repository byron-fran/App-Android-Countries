import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Pressable,TouchableOpacity } from 'react-native'
import { ListProps } from '../../interfaces/ListProps'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../routes/Routes'
import CardCountry from '../../views/Countries/CardCountry'
import { styles } from '../../layout/countries';
import { styles as stylesList } from '../../layout/ListSearch'
import usePagination from '../../hooks/UsePagination'
import ListButtons from '../../views/Buttoms/ListButtons'
interface Props extends StackScreenProps<RootStackParams, 'search'> { };
const ListSearchItems = ({ route, navigation }: Props) => {

    const { filteredData } = route.params;
    const countries = filteredData;

    // console.log(countries, 'si hay datos')
    const { countriesPerPage, totalPages, pageButtoms } = usePagination(countries);

    if (countriesPerPage.length <= 0 || countriesPerPage === undefined) { return null };
    return (
        <View style={stylesList.containerSearch}>
            <ScrollView>
                <View>
                    <Text style={stylesList.textTitle}>
                        {countriesPerPage.length <= 0 || countriesPerPage === undefined ? 'No resultados de esta busqueda' : 'Resultados'}</Text>
                    <View style={styles.container}>
                        {countriesPerPage?.map(country => (
                            <CardCountry key={country.cca3} country={country} />
                        ))}
                    </View>
                    <ListButtons
                        totalPages={totalPages}
                        pageButtoms={pageButtoms} />


                </View>
            </ScrollView>

            <TouchableOpacity style={stylesList.buttonFixed}
                onPress={() => navigation.navigate('countries')}>
                <Text style={stylesList.textBotton}>Regresar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListSearchItems