import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../routes/Routes'
import { styles } from '../../layout/Detail';
import { useNavigation } from '@react-navigation/native';
import { formatQuantity } from '../../helpers';
import RelatedCountries from './Relatedcountries';
import { useEffect, useState, useContext } from 'react';
import { Countries } from '../../interfaces/Countrires';
import axios, { AxiosError } from 'axios';
import Likes from '../../components/Like/Likes';

interface Props extends StackScreenProps<RootStackParams, 'detail'> { }

const DetailCountry = ({ route }: Props) => {
    const { country } = route.params;
    const [countriesSubRegion, setCountriesSubRegion] = useState<Countries[]>()
    const Navigate = useNavigation();
    const [navigateDetail, setNavigateDetail] = useState<boolean>(false)
   
    useEffect(() => {
        const getCountriesSubRegion = async () => {
            const url = `https://restcountries.com/v3.1/subregion/${country.subregion}`;

            try {
                setNavigateDetail(!true)
                const { data } = await axios(url);
                setCountriesSubRegion(data.filter((country : Countries) => country.name?.common !== route.params.country.name?.common));
              
            }
            catch (error: unknown) {
                if (error instanceof AxiosError) {
                    console.log(error.message)
                }
            }
        };
        getCountriesSubRegion();
        return () => {
            setCountriesSubRegion([])
        }
    }, [navigateDetail]);

    return (
        <ScrollView>
            <View style={styles.detailContainer}>
                <View>
                    <Text style={styles.countryName}>{country.name?.common}</Text>
                    <View>
                        <Image
                            style={styles.imageDetail}
                            source={{ uri: country.flags?.png }}
                        />
                    </View>
                    <View>
                        <Likes country={country}/>
                    </View>
                    <Text style={styles.DetailText}>{country.capital}</Text>
                    <Text style={styles.DetailText}>{country.area}</Text>
                    <Text style={styles.DetailText}>{country.subregion}</Text>
                    <Text style={styles.DetailText}>{formatQuantity(country.population)}</Text>
                    <Text style={styles.DetailText}>{country.continents[0]}</Text>

                </View>
                <RelatedCountries 
                    countriesSubRegion={countriesSubRegion !== undefined ? countriesSubRegion : []} 
                    setNavigateDetail={setNavigateDetail}/>
                <TouchableOpacity style={styles.btnBack}
                    onPress={() => Navigate.goBack()}
                >
                    <Text style={styles.btnBackText}>Volver al inicio</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    )
}

export default DetailCountry