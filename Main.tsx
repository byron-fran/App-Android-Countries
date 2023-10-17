import { View, Text } from 'react-native'
import { CountriesProvider } from './src/context/CountriesContext';
import { FavoritesProvider } from './src/context/FavoritesContext';
import App from './App';
const Main = () => {

    return (

        <CountriesProvider>
            <FavoritesProvider>
                <App />
            </FavoritesProvider>
        </CountriesProvider>
    )
}

export default Main