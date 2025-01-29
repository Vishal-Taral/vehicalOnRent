import React from 'react';
import Result from '../components/Result';

const SearchResultPage = ({searchData}) => {

    console.log(searchData);
    

  return (
    <div>
        <Result searchResult={searchData}/>
    </div>
  )
}

export default SearchResultPage