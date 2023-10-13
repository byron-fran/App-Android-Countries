import {useState, useEffect, createContext, Dispatch,SetStateAction, ReactNode } from 'react';
import { Countries } from '../interfaces/Countrires';

export type CountriesContextType ={
    countries : Countries[];
    refreshaData : boolean;
    setCountries : Dispatch<SetStateAction <Countries[]>>

    setRefreshData : Dispatch<SetStateAction<boolean>>

};

export const defaultContextValue : CountriesContextType = {
    countries : [],
    refreshaData : false,
    setCountries : () => {},
 
    setRefreshData : () => {}
}
export const CountriesContext = createContext<CountriesContextType>(defaultContextValue);

type PropsProvider ={
    children : ReactNode
}

export const CountriesProvider : React.FC<PropsProvider> = ({children}) => {
    const [countries, setCountries] = useState<Countries[]>(defaultContextValue.countries)
    const [refreshaData, setRefreshData] = useState<boolean>(defaultContextValue.refreshaData)
   
    return (
        <CountriesContext.Provider value={{
            countries,
            refreshaData, 
            setCountries, 
            setRefreshData 
            }}>
            {children}
        </CountriesContext.Provider>
    )
}