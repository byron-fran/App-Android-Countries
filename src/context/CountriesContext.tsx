import {useState, useEffect, createContext, Dispatch,SetStateAction, ReactNode } from 'react';
import { Countries } from '../interfaces/Countrires';

export type CountriesContextType ={
    countries : Countries[];
    refreshaData : boolean;
    setCountries : Dispatch<SetStateAction <Countries[]>>
    currentPage : number,
    setCurrentPage : Dispatch<SetStateAction<number>>,
    setRefreshData : Dispatch<SetStateAction<boolean>>,
    countriesPerPage : Countries[],
    setCountriesPerPage : Dispatch<SetStateAction <Countries[]>>

};

export const defaultContextValue : CountriesContextType = {
    countries : [],
    refreshaData : false,
    setCountries : () => {},
    currentPage : 1,
    setCurrentPage : () => {},
    setRefreshData : () => {},
    countriesPerPage: [],
    setCountriesPerPage: () => {}
}
export const CountriesContext = createContext(defaultContextValue);

type PropsProvider ={
    children : ReactNode
}

export const CountriesProvider : React.FC<PropsProvider> = ({children}) => {
    const [countries, setCountries] = useState<Countries[]>(defaultContextValue.countries)
    const [refreshaData, setRefreshData] = useState<boolean>(defaultContextValue.refreshaData);
    const [currentPage, setCurrentPage] = useState<number>(defaultContextValue.currentPage);
    const [ countriesPerPage, setCountriesPerPage] = useState<Countries[]>(defaultContextValue.countriesPerPage)
    //console.log(countries) array vacio
    return (
        <CountriesContext.Provider value={{
            countries,
            refreshaData, 
            setCountries, 
            setRefreshData,
            currentPage,
            setCurrentPage,
            setCountriesPerPage,
            countriesPerPage
            }}>
            {children}
        </CountriesContext.Provider>
    )
}