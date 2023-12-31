import {useState, useEffect, createContext, Dispatch,SetStateAction, ReactNode } from 'react';
import { Countries } from '../interfaces/Countrires';
import axios, {AxiosError} from 'axios';
import { LOAD_SUBREGION, LOAD_DATA } from './reducers/types';
export type CountriesContextType ={
    countries : Countries[];
    refreshaData : boolean;
    setCountries : Dispatch<SetStateAction <Countries[]>>
    currentPage : number,
    setCurrentPage : Dispatch<SetStateAction<number>>,
    setRefreshData : Dispatch<SetStateAction<boolean>>,
    countriesPerPage : Countries[],
    setCountriesPerPage : Dispatch<SetStateAction <Countries[]>>,
    filteredData : Countries[],
    setFilteredData : Dispatch<SetStateAction<Countries[]>>

};

export const defaultContextValue : CountriesContextType = {
    countries : [],
    refreshaData : false,
    setCountries : () => {},
    currentPage : 1,
    setCurrentPage : () => {},
    setRefreshData : () => {},
    countriesPerPage: [],
    setCountriesPerPage: () => {},
    filteredData : [],
    setFilteredData : () => {}
}
export const CountriesContext = createContext(defaultContextValue);

type PropsProvider ={
    children : ReactNode
}

export const CountriesProvider : React.FC<PropsProvider> = ({children}) => {
    const [countries, setCountries] = useState<Countries[]>(defaultContextValue.countries)
    const [refreshaData, setRefreshData] = useState<boolean>(defaultContextValue.refreshaData);
    const [currentPage, setCurrentPage] = useState<number>(defaultContextValue.currentPage);
    const [ countriesPerPage, setCountriesPerPage] = useState<Countries[]>(defaultContextValue.countriesPerPage);
    const [filteredData, setFilteredData] = useState<Countries[]>(defaultContextValue.filteredData);
     
    useEffect(()  => {
        const getCountries = async () => {
      
            const url = `https://restcountries.com/v3.1/all`;
            try {
              setRefreshData(!false)
              const { data } = await axios(url);
              setCurrentPage(1)
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
            countriesPerPage,
            filteredData,
            setFilteredData,
  
            }}>
            {children}
        </CountriesContext.Provider>
    )
}