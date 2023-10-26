import { createContext, useState } from 'react';

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
    const [HTML, setHTML] = useState('');
    const [JS, setJS] = useState('');
    const [CSS, setCSS] = useState('');
    return (
        <DataContext.Provider value={{
            HTML,
            setHTML,
            CSS,
            setCSS,
            JS,
            setJS
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider;

