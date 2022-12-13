import { Dispatch, SetStateAction } from 'react';

export interface INavBarItems {
    id: number;
    icon: any;
    label: string;
    route: string;
}

type themeType = 'light' | 'dark';

export interface IContext {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;
    theme: themeType;
    setTheme: Dispatch<SetStateAction<themeType>>;
}
