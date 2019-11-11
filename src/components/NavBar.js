import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class NavBar extends Component {
    render() { 
        return ( 
            <ThemeContext.Consumer>{(context) => {
                const  { isLightTheme, dark, light } = context
                const theme = isLightTheme ? light : dark
                return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>Context app</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )
            }}
            </ThemeContext.Consumer>
         );
    }
}
 
export default NavBar;
