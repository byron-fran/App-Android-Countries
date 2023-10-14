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
  const { setCountries, setRefreshData, setCurrentPage} = useContext(CountriesContext);


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
