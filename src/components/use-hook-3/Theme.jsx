import { createContext, use, useState } from "react";

const ThemeContext = createContext();

const ThemeCard = () => {
    const { theme, toggleTheme } = use(ThemeContext);

    return (
        <div className="flex flex-col gap-6">
            <div
                className={
                    theme === "light"
                        ? "rounded bg-gray-50 p-8 text-neutral-900 border border-gray-100"
                        : "rounded bg-gray-800 p-8 text-neutral-300 border-gray-900"
                }
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit dolores illo, reprehenderit voluptate recusandae
                perspiciatis quam, pariatur commodi possimus officiis quas vitae
                voluptatum. Magni aliquam eligendi itaque possimus sit dolorem.
            </div>
            <div>
                <button
                    onClick={toggleTheme}
                    className="rounded p-3 bg-blue-600 text-white"
                >
                    Change Theme
                </button>
            </div>
        </div>
    );
};

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default function Theme() {
    return (
        <ThemeProvider>
            <ThemeCard />
        </ThemeProvider>
    );
}
