import './App.scss';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Router from './components/Router';
import { Navbar } from './components/Navbar/Navbar';
import { createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { IContext } from './interfaces/interfaces';

export const App = () => {
    const [isAuth, setIsAuth] = useState(true);
    type themeType = 'light' | 'dark';
    const [theme, setTheme] = useState<themeType>('light');
    const navigation = useLocation();
    const arr = navigation.pathname.split('/');
    const pathName = arr[arr.length - 1];

    const defaultContext = {
        isAuth,
        setIsAuth,
        theme,
        setTheme,
    };
    const AppContext = createContext<IContext>(defaultContext);
    return (
        <AppContext.Provider value={{ isAuth, setIsAuth, theme, setTheme }}>
            <Navbar pathName={pathName} />
            <Router />
        </AppContext.Provider>
    );
};
