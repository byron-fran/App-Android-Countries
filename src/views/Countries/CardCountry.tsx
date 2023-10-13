import { View, Text, Image } from 'react-native'
import { CountriesProps } from '../../interfaces/Countrires'
import React from 'react'
import { styles } from '../../layout/countries'

const CardCountry : React.FC<CountriesProps> = ({country})  => {

    return (
        <View style={styles.card}>
            
            <View>
                <Text>{ country.name?.common}</Text>
                <Image style={styles.cardImage} source={{uri : country.flags?.png}}/>

            </View>
        </View>

    )}

export default CardCountry