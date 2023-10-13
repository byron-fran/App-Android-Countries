import { View, Text } from 'react-native'
import { CountriesProvider } from './src/context/CountriesContext';
import App from './App';
const Main = () => {

    return (

        <CountriesProvider>
            <App />
        </CountriesProvider>
    )
}

export default Main