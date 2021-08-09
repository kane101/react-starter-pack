import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, setState] = useState('');
    const values = {};

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const GlobalContext = () => {
    return useContext(AppContext);
};
