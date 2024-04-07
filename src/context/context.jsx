import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const user = 'John Doe';
    const age = 54;
    const [name, setName] = useState("Peter")
    return <AppContext.Provider value={{user, age, name, setName}}>
    {children}
    </AppContext.Provider>
}

export default AppProvider