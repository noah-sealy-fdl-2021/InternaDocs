import MainNavBar from '../Components/MainNavBar';
import SearchBar from '../Components/SearchBar';
import { useState, useEffect } from 'react';

const ViewDoc = ({ match }) => {

    const [doc, setDoc] = useState([]);

    //similar to a mountComponent, but for functions (not classes), hooks!
    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const id = match.params.id;
        const fetchItem = await fetch(`http://127.0.0.1:8000/docs/${id}`)
        const item = await fetchItem.json();
        setDoc(item);
    };

    return (
        <div>
            <MainNavBar pageName={'Search Results Example'} />
            <br />
            <br />
            <SearchBar />
            <br />
            <br />
            <h1>{doc.name}</h1>
            <h2>{doc.author}</h2>
            <h2>{doc.accessLevel}</h2>
            <h2>{doc.docType}</h2>
            <h2>{doc.link}</h2>

        </div>
    )
}

export default ViewDoc
