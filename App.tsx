import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import Favorites from './src/views/Favorites/Favorites';



const Drawer = createDrawerNavigator();

const App = () => {

  return (

      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Countries'>
          <Drawer.Screen name='Countries' component={Routes} />
          <Drawer.Screen name='favorites' component={Favorites} />
        </Drawer.Navigator>
      </NavigationContainer>


  )
}

export default App;
