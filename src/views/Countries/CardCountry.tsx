import { View, Text, Image, Pressable } from 'react-native'
import { CountriesProps } from '../../interfaces/Countrires'
import React from 'react'
import { styles } from '../../layout/countries';
import { useNavigation } from '@react-navigation/native';
import { Countries } from '../../interfaces/Countrires';


const CardCountry: React.FC<CountriesProps> = ({ country }) => {

    const Navigate = useNavigation();
    return (
        <Pressable
            style={styles.card}
            onPress={() =>
              (  Navigate.navigate as any)('detail', { country })
            }
        >
            <View>
                <View>
                    <Text style={styles.cardText}>{country.name?.common}</Text>

                    <Image
                        style={styles.cardImage}
                        source={{ uri: country.flags?.png }}
                    />
                </View>
            </View>
        </Pressable>
    );
}

export default CardCountry