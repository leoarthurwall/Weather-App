import React from 'react';
import './SearchBar.css';

function SearchBar({placeholder, data}) {
    return (
        <div className='new-search'>
            <div className='new-search-input'>
                <input type='text' placeholder={placeholder}/>
                <div className='new-search-icon'></div>
            </div>
            <div className='data-result'></div>
        </div>
    );
}

export default SearchBar;