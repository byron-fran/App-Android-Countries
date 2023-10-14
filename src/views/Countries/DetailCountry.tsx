import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../routes/Routes'
import { styles } from '../../layout/Detail';
import { useNavigation } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'detail'> { }

const DetailCountry = ({ route }: Props) => {
    const { country } = route.params;
    const Navigate = useNavigation();

    return (
        <ScrollView>
            <View style={styles.detailContainer}>
                <View>
                    <Text>{country.name?.common}</Text>
                    <View>
                        <Image
                            style={styles.imageDetail}
                            source={{ uri: country.flags?.png }}
                        />
                    </View>
                 
                    <Text>{country.capital}</Text>
                    <Text>{country.area}</Text>
                    <Text>{country.region}</Text>
                    <Text>{country.subregion}</Text>
             
                    <Text>{country.population}</Text>
                    <Text>{country.continents[0]}</Text>
                    <Text>{country.maps.googleMaps}</Text>
                </View>

                <TouchableOpacity style={styles.btnBack}>
                    <Text style={styles.btnBackText} onPress={() => Navigate.goBack()}>Volver al inicio</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    )
}

export default DetailCountry