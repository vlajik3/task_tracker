import './App.scss';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Router from './components/Router';
import { Navbar } from './components/Navbar/Navbar';
import { createContext } from 'react';

export const App = () => {
    const [isAuth, setIsAuth] = useState(true);
    type themeType = 'light' | 'dark';
    const [theme, setTheme] = useState<themeType>('light');

    interface IContext {
        isAuth: boolean;
        setIsAuth: Dispatch<SetStateAction<boolean>>;
        theme: themeType;
        setTheme: Dispatch<SetStateAction<themeType>>;
    }
    const defaultContext = {
        isAuth,
        setIsAuth,
        theme,
        setTheme,
    };
    const AppContext = createContext<IContext>(defaultContext);
    return (
        <AppContext.Provider value={{ isAuth, setIsAuth, theme, setTheme }}>
            <Navbar />
            <Router />
        </AppContext.Provider>
    );
};
