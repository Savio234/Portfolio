import React, { useContext, createContext, useState } from 'react';

const AppContext = createContext(null);

const AppProvider =  ({children}) => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');
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