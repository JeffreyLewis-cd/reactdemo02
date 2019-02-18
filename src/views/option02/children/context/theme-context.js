import React from "react";


export const themes = {
    light: {
        font: '#000000',
        background: '#eeeeee',
    },
    dark: {
        font: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // default value
);