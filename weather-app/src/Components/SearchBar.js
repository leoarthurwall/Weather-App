import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder, data}) {
    return (
        <div className='search-component-container'>
            <div className='search-input-container'>
                <input className='search-input' type='text' placeholder={placeholder}/>
                <div className='search-icon'>
                    <SearchIcon /> 
                </div>
            </div>
            <div className='data-result'></div>
        </div>
    );
}

export default SearchBar;