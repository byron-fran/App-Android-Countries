import { View, Text } from 'react-native'
import ListCoutries from '../views/Countries/ListCountries'
import { createStackNavigator } from '@react-navigation/stack';
import DetailCountry from '../views/Countries/DetailCountry';
import { Countries } from '../interfaces/Countrires';
import ListSearchItems from '../components/Navbar/ListSeach';

export type RootStackParams ={
    countries : undefined,
    detail : {country : Countries},
    search : {filteredData : Countries[]}
}
const Stack = createStackNavigator<RootStackParams>();

const Routes = () => {

    return (
     <Stack.Navigator initialRouteName='countries'>
        <Stack.Screen name='countries' 
            component={ListCoutries}
            options={{
                headerShown :false
            }}/>
        <Stack.Screen name='detail' 
            component={DetailCountry}
            options={{
                headerShown : false
            }}/>
        <Stack.Screen name='search' component={ListSearchItems}
            options={{
                headerShown : false
            }}
        />    
     </Stack.Navigator>

    )}

export default Routes