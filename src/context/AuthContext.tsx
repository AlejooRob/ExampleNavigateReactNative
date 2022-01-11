import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

//Definir el Context
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Initial State
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

//interface context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUsername: (userName: string) => void;
}

// crear el context
export const AuthContext = createContext({} as AuthContextProps );

// Component del context

export const AuthProvider = ({ children }: { children: JSX.Element}) => {

    const [authState , dispatch] = useReducer( authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn'})
    }

    const changeFavoriteIcon = ( iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName})
    }

    const logout = () => {
        dispatch({ type: 'logout'})
    }

    const changeUsername = (userName: string) => {
        dispatch({ type: 'changeUsername', payload: userName })
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                changeFavoriteIcon,
                changeUsername,
                logout,
                signIn
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}