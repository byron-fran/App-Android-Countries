import { View, Text, TextInput, FlatList } from 'react-native'
import { styles } from '../../layout/Nabar';
import { useState } from 'react';
import { useContext } from 'react';
import { CountriesContext } from '../../context/CountriesContext';
import ListSearchItems from './ListSeach';
const NavBar = () => {
  const { countries } = useContext(CountriesContext);


  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState<String[]>([]);
  const countriesName: string[] = countries.map(country => { return country.name?.common });

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered: string[] = countriesName.filter(item =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    if (filteredData.length) {
      console.log(filteredData);
      setFilteredData(filtered);
    }


  };


  return (
    <View>
      <TextInput
        placeholder="Search..."
        onChangeText={text => handleSearch(text)}
        value={searchText}
        style={styles.inputText}
      />
      <ListSearchItems filteredData={filteredData}/>
    </View>

  )
}

export default NavBar