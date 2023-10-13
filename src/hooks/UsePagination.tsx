import { View, Text } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { CountriesContext } from '../context/CountriesContext';

const usePagination = () => {
    const {currentPage, countries, setCountriesPerPage, countriesPerPage, refreshaData} = useContext(CountriesContext);
    const data  = Array.from({length : countries.length}, (_, i) => i + 1);

    const itemsPerPage : number = 16;
    const totalPages : number = Math.ceil(data.length / itemsPerPage);

    const getIndexRange = (page : number) => {
        const startPage = (page + 1) * itemsPerPage;
        const endPage = startPage + itemsPerPage;
        return [startPage, endPage]

    };

    useEffect(() => {
        const [startPage, endPage] = getIndexRange(currentPage);
        setCountriesPerPage( countries.slice(startPage, endPage))
    }, [currentPage,refreshaData]);

    const pageButtoms = () => {
        let bottons = [];
        const start = Math.max(1, currentPage -2);
        const end = Math.min(totalPages, start + 4);
        for(let i = start; i<end; i++){
            bottons.push(i);

        };
        return bottons
    }
  
    return {
        pageButtoms,
        totalPages,
        countriesPerPage,
        currentPage
    }
}

export default usePagination