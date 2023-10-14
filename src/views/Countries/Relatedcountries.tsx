import { View, Text, Pressable, Image } from 'react-native'
import { Countries } from '../../interfaces/Countrires'
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../../layout/countries';

interface RelatedCountriesProps {
    countriesSubRegion: Countries[];
}
const RelatedCountries: React.FC<RelatedCountriesProps> = ({ countriesSubRegion }) => {
    if(countriesSubRegion.length<=0){ return null }
    return (

        <View>

            <Text style={styles.textH1}>Paises Relacionados</Text>
            <ScrollView
                horizontal>
                <View style={styles.relatedContainer} >

                    {countriesSubRegion.map((country) => (

                        <View key={country.cca3} style={styles.relatedCard}>
                            <View>
                                <Text style={styles.relatedText}>{country.name.common}</Text>
                                <Pressable>

                                    <Image style={styles.relatedImage} source={{ uri: country.flags.png }} />
                                </Pressable>
                            </View>
                        </View>

                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default RelatedCountries