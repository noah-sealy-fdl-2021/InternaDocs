import SearchResultListing from '../Components/SearchResultListing';
import MainNavBar from '../Components/MainNavBar';
import SearchBar from '../Components/SearchBar';
import { useState, useEffect } from 'react';

const Found = () => {

  const [found, setFound] = useState([]);

  //similar to a mountComponent, but for functions (not classes), hooks!
  useEffect(() => {
      fetchItem();
  }, []);

  const fetchItem = async () => {
      const fetchItem = await fetch(`http://127.0.0.1:8000/docs/`)
      const item = await fetchItem.json();
      setFound(item);
  };

  return (
      <div>
          <MainNavBar pageName={'Search Results Example'} />
          <br />
          <br />
          <SearchBar />
          <br />
          <br />
          {<SearchResultListing listing={found} />}
      </div>
  )
}

export default Found
