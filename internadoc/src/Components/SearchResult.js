import { Link, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import pdf_icon from '../icons/docTypes/pdf_icon.png';
import video_icon from '../icons/docTypes/video_icon.png';
import one from '../icons/accessLevels/1.png';
import two from '../icons/accessLevels/2.png';
import three from '../icons/accessLevels/3.png';
import four from '../icons/accessLevels/4.png';
import five from '../icons/accessLevels/5.png';
import six from '../icons/accessLevels/6.png';
import seven from '../icons/accessLevels/7.png';

const SearchResult = ({ result }) => {

    const date = new Date(result.date);

    let typeIcon = '';
    let typeAlt = '';
    if (result.docType == 0) {
        typeIcon = pdf_icon;        
        typeAlt = 'PDF';
    } else {
        typeIcon = video_icon;
        typeAlt = 'Video';
    }

    let accessIcon = '';
    let accessAlt = '';
    if (result.accessLevel == 0) {
        accessIcon = one;
        accessAlt = 'Level One';
    } else if (result.accessLevel == 1) {
        accessIcon = two;
        accessAlt = 'Level Two';
    } else if (result.accessLevel == 2) {
        accessIcon = three;
        accessAlt = 'Level Three';
    } else if (result.accessLevel == 3) {
        accessIcon = four;
        accessAlt = 'Level Four';
    } else if (result.accessLevel == 4) {
        accessIcon = five;
        accessAlt = 'Level Five';
    } else if (result.accessLevel == 5) {
        accessIcon = six;
        accessAlt = 'Level Six';
    } else {
        accessIcon = seven;
        accessAlt = 'Level Seven';   
    }

    return (
        <Container style={{padding:'0'}}>
            <Card style={{height:'20rem', width:'22rem'}}>
                <Card.Body>
                    <Card.Title><h3><Link to={`/viewdoc${result.id}`}>{result.name}</Link></h3></Card.Title>
                    <Card.Text>{result.author}</Card.Text>
                    <Card.Text>
                        {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                            }).format(date)}  
                    </Card.Text>
                    <Row style={{padding:'0'}}>
                        <Col md={3}></Col>
                        <Col md={3}><Card.Img src={typeIcon} alt={typeAlt} style={{height: '60px', width: '60px', padding:'0'}}/></Col>
                        <Col md={3}><Card.Img src={accessIcon} alt={accessAlt} style={{height: '60px', width: '60px', padding:'0'}}/></Col>
                        <Col md={3}></Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SearchResult
