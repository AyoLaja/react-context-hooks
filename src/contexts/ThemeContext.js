import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: false,
        light: {
            syntax: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            syntax: '#b7b7b7',
            ui: '#333',
            bg: '#171717'
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;