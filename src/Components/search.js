import React from 'react';

const Search = ({onChangeSearch}) => {
    return <div className="pa2"> 
        <input type= "search" 
        placeholder="Search Player" 
        className="pa3 ba b--green bg-lightest-blue"
        onChange = {onChangeSearch}
        />
        
    </div>;
    
}

export default Search;