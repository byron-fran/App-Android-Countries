
import { LOAD_DATA } from "./types";
import { Countries } from "../../interfaces/Countrires";

interface Action {
    type: string;
    payload?: any;
};
interface State {
    countries: Countries[]; // Replace 'any' with the actual type of 'countries'
}

export const reducer = (state : State, action : Action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                countries: action.payload,
            }
    }
}