
import { createContext, ReactNode, useState } from "react";


interface ThemeProps {
    children: ReactNode;
}

type themeType = "light" | "dark";

const ThemeContext = createContext({
    theme: "light" as themeType,
    toggleMode: () => {},
})

export const ThemeContextProvider = ({ children }: ThemeProps) => {
    const [theme, setTheme] = useState<themeType>(
        window.localStorage.getItem("theme")  as themeType || "light");

    const toggleMode = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;