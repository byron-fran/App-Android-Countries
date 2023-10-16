import { View, Text, TextInput, FlatList, Image, Pressable } from 'react-native'
import { styles } from '../../layout/Nabar';
import { useState, useContext } from 'react';
import { CountriesContext } from '../../context/CountriesContext'
import { Countries } from '../../interfaces/Countrires';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';


const NavBar = () => {
  const { countries, filteredData, setFilteredData } = useContext(CountriesContext);
  const [searchText, setSearchText] = useState('');
  const Navigate = useNavigation();

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.split(' ').join('').length <= 0) {
      setFilteredData([]);
      return
    }
    else {
      const filtered: Countries[] = countries.filter(item =>
        item.name?.common.toLowerCase().includes(text.toLowerCase())
      );
      if (filtered.length) {
        setFilteredData(filtered);

        return
      }


    }

  };

  const handleOnPressNavigate = () => {

    if (!filteredData.length) return;

    (Navigate.navigate as any)('search', { filteredData });
    setSearchText('');
    //console.log(filteredData)

  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Search..."
        onChangeText={text => handleSearch(text)}
        value={searchText}
        style={styles.inputText}
      />

      <View style={styles.inputSearch}>
        <Pressable
          onPress={handleOnPressNavigate}>
          <Image
            style={styles.inputImage}
            source={require('../../public/image/icon.png')} />
        </Pressable>
      </View>


    </View>

  )
}

export default NavBar