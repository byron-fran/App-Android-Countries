import { View, Text } from 'react-native'
import ListCoutries from '../views/Countries/ListCountries'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () => {

    return (
     <Stack.Navigator initialRouteName='countries'>
        <Stack.Screen name='countries' component={ListCoutries}/>
     </Stack.Navigator>

    )}

export default Routes