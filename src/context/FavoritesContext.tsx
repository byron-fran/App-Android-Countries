import React, {useState, useEffect, createContext, SetStateAction, Dispatch, ReactNode, useReducer} from 'react';
import { reducer, State as FavoriteState, Action as FavoriteAction } from './reducers/favoriterReducer';
import { Countries } from '../interfaces/Countrires';
import { ADD_FAVORITES, REMOVE_FAVORITES } from './types/typesFavorites';

interface FavoritesContextType {
    state : FavoriteState,
    dispatch : React.Dispatch<FavoriteAction>;
    setLike : React.Dispatch<React.SetStateAction<boolean>>
    like : boolean,
    addFavorites : (favorite : Countries) => void 
    removeFavorite : (favorite : Countries) => void
};


export  const defaultContextValue : FavoritesContextType = {
    state :{ favorites:[] },
    dispatch : () => {},
    setLike : () => {},
    like : false,
    addFavorites :( favorite :Countries) => {},
    removeFavorite : (favorite : Countries) => {}
};

export const FavoritesContext = createContext(defaultContextValue);

type PropsProvider ={
    children : ReactNode
};

export const FavoritesProvider : React.FC<PropsProvider>= ({children}) => {

    const [like, setLike] = useState<boolean>(false)
    const [state, dispatch] = useReducer(reducer, defaultContextValue.state);

    const addFavorites = (favorite : Countries)  => {
        dispatch({type : ADD_FAVORITES, payload : favorite})
    }
    const removeFavorite = (favorite : Countries) => {
        dispatch({type : REMOVE_FAVORITES, payload : favorite})
    }
    return (
        <FavoritesContext.Provider value={{
            setLike,
            like,
            state,
            dispatch,
            addFavorites,
            removeFavorite // Marca Rojo aquí
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}