import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="search">
            <input 
            className="input"
            types="search"
            placeholder="Search restaurant"
            onChange={searchChange}/>
        </div>
    )
};

export default SearchBox;