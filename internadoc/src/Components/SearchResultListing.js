// componenets
import SearchResult from '../Components/SearchResult';
// bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

const SearchResultListing = ({listing}) => {
    return (
        <Container>
            <ListGroup variant='flush'>
                {listing.map((result) => (<ListGroup.Item key={result.id}><SearchResult key={result.id} result={result}/></ListGroup.Item>))}
            </ListGroup>
        </Container>
    )
}

export default SearchResultListing
