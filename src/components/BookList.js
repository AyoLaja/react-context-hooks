import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

class BookList extends Component {
    static contextType = ThemeContext   
    
    render() { 
        const  { isLightTheme, dark, light } = this.context
        const theme = isLightTheme ? light : dark

        return ( 
            <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
                <ul>
                    <li style={{ background: theme.ui }}>Alex Rider: Point Blanc</li>
                    <li style={{ background: theme.ui }}>Into the wind</li>
                    <li style={{ background: theme.ui }}>Harry Potter</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;