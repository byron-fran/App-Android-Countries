import { ADD_FAVORITES, REMOVE_FAVORITES } from "../types/typesFavorites";
import { Countries } from "../../interfaces/Countrires";

type ActionType = "ADD TO FAVORITES" | "REMOVE TO FAVORITES";


export interface Action {
    type: ActionType;
    payload:Countries;
};
export interface State {
    favorites: Countries[]; 
}

export const reducer = (state : State, action : Action) : State => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case  REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter((country) => country.cca3 !== action.payload.cca3)
            }    
        default:
            return state    
    }
 
}