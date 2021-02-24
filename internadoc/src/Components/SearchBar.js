import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

const SearchBar = () => {
    return (
        <div>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Row>
                            <Col xs={11} md={11} lg={11}>
                                <Form.Control type='text' placeholder='Doc Search Query'/>
                            </Col>
                            <Col xs={1} md={1} lg={1}>
                                <Link to='/found'>
                                    <Button type='submit'> Go! </Button>
                                </Link>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Text className='text-muted'>Please enter your query for documentation.</Form.Text>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default SearchBar
