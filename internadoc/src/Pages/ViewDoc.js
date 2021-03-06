import MainNavBar from '../Components/MainNavBar';
import SearchBar from '../Components/SearchBar';
import WebViewer from '@pdftron/webviewer';
import { useState, useEffect, useRef } from 'react';
import pdf from '../pdf/p1.pdf'
import '../App.css';

const ViewDoc = ({ match }) => {
    
    const viewerDiv = useRef(null);

    const [doc, setDoc] = useState({
        name: '',
        author: '',
        accessLevel: '',
        docType: '',
        link: '',
    });

    // similar to a mountComponent, but for functions (not classes), hooks!
    // gets called on page load, otherwise specify when it gets called in the [] at the end
    useEffect(() => {

        WebViewer({path: 'lib', initialDoc: pdf}, viewerDiv.current)
            .then(instance => {
                // call pdf apis here
            });

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
            <h3>{doc.name} . {doc.author}</h3>
            {/* <h2>{doc.author}</h2>
            <h2>{doc.accessLevel}</h2>
            <h2>{doc.docType}</h2>
            <h2>{doc.link}</h2> */}

            <div className='webViewer' ref={viewerDiv}></div>

        </div>
    )
}

export default ViewDoc
