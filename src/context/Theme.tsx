
import { createContext, ReactNode,  useState } from "react";


interface ThemeProps {
    children: ReactNode;
}

type themeType = "light" | "dark";

const ThemeContextV = createContext({
    theme: "light" as themeType,
    toggleMode: () => {},
})

export const ThemeContextProvider = ({ children }: ThemeProps) => {
    const [theme, setTheme] = useState<themeType>("light");

    const toggleMode = () => {
        setTheme((prev) => (
            prev === "light" ? "dark" : "light"
        ));
    };

    return (
        <ThemeContextV.Provider value = {{theme, toggleMode}}>
            {children}
        </ThemeContextV.Provider>
    );
}

export default ThemeContextV;