import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import books from '../data/fantasy.json'

const BookList = (props) => (
    <Container>
        <Row className='g-4'>
            {props.books.map((elemento, index) => (
                <Col key={`elemento-${index}`}>
                    <SingleBook books={elemento}/>
                </Col>
            ))}
        </Row>
    </Container>
);

export default BookList;