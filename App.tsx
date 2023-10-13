import 'react-native-gesture-handler';
import { useEffect, useState, useContext } from 'react';
import { Text, View, Pressable } from 'react-native'
import axios, { AxiosError } from 'axios';
import { Countries } from './src/interfaces/Countrires';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import CardCountry from './src/views/CardCountry';
import Favorites from './src/views/Favorites/Favorites';
import { CountriesContext } from './src/context/CountriesContext';

const Drawer = createDrawerNavigator();

const App = () => {
  const {setCountries, countries} = useContext(CountriesContext);

  useEffect(() => {
    const getCountries = async () => {
      const url = `https://restcountries.com/v3.1/all`;
      try {
        const { data } = await axios(url);
        
        setCountries(data);
       
      }
      catch (error: unknown) {
        if (error instanceof AxiosError) {

          console.log(error.message)
        }
      }
    };
    getCountries();

  }, [])
  console.log(countries)
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='home'>
          <Drawer.Screen name='home' component={Routes}/>
          <Drawer.Screen name='favorites' component={Favorites}/>
        </Drawer.Navigator>
    </NavigationContainer>

  )
}

export default App;
