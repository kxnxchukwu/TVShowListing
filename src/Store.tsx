import React from "react";
import {IState, IAction} from './interfaces';

const initialState: IState = {
    episodes: [],
    favourites: []
};

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case "FETCH_DATA":
            return {...state, episodes: action.payload};
        case "ADD_FAVOURITE":
            return {...state, favourites: [...state.favourites, action.payload]};
        case "REMOVE_FAVOURITE":
                return {...state, favourites: action.payload};
        default:
            return state;
    }
}

export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}
