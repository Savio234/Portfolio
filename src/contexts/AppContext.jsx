import React, { useContext, createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider =  ({children}) => {

    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            return (storedTheme === 'dark' || storedTheme === 'light') ? storedTheme : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <AppContext.Provider 
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider }
