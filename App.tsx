import 'react-native-gesture-handler';
import { useEffect, useContext } from 'react';
import axios, { AxiosError } from 'axios';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import Favorites from './src/views/Favorites/Favorites';
import { CountriesContext } from './src/context/CountriesContext';


const Drawer = createDrawerNavigator();

const App = () => {
  const { setCountries, setRefreshData } = useContext(CountriesContext);

  useEffect(() => {
    const getCountries = async () => {
      
      const url = `https://restcountries.com/v3.1/all`;
      try {
        setRefreshData(!false)
        const { data } = await axios(url);
        setCountries(data);
        setRefreshData(!true)
        //console.log(data) // si hay datos

      }
      catch (error: unknown) {
        if (error instanceof AxiosError) {

          console.log(error.message)
        }
      }
    };
    getCountries();

  }, [])

  return (

      <NavigationContainer>
        <Drawer.Navigator initialRouteName='home'>
          <Drawer.Screen name='home' component={Routes} />
          <Drawer.Screen name='favorites' component={Favorites} />
        </Drawer.Navigator>
      </NavigationContainer>


  )
}

export default App;
