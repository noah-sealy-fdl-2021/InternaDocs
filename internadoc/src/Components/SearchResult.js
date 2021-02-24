import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { Link, Route } from 'react-router-dom';
import ViewDoc from '../Pages/ViewDoc';

const SearchResult = ({ result }) => {
    return (
        <Container>
            <ListGroup horizontal>
                <ListGroup.Item>{ result.name }</ListGroup.Item>
                <ListGroup.Item>{ result.docType }</ListGroup.Item>
                <ListGroup.Item><Link to={`/viewdoc${result.id}`}>View Doc</Link></ListGroup.Item>
                <ListGroup.Item>{ result.accessLevel }</ListGroup.Item>
                <ListGroup.Item>{ result.author }</ListGroup.Item>
                <ListGroup.Item>{ result.dateCreated }</ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

export default SearchResult
