// componenets
import SearchResult from '../Components/SearchResult';
// bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';


    /*
    GROUPING ALGO 

    track = 0
    for each result in results:
        <CardGroup>
        track += 1
        <Card id = track>
        if (track == 3 or !results)
            </CardGroup>
    */

const SearchResultListing = ({listing}) => {

    


    return (
        <Container>
            <CardColumns>
            {listing.map((result) => 
                    (<SearchResult key={result.id} result={result}>Hey</SearchResult>))}
            </CardColumns>
        </Container>
    )
}

export default SearchResultListing
