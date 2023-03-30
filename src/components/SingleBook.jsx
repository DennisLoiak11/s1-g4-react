import { Component } from 'react';
import books from '../data/fantasy.json'
import { Col } from 'react-bootstrap';
import { Card, Badge } from 'react-bootstrap';

class SingleBook extends Component {
    state = {
        selected: false
    };

    render() {
        return (
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={books.img}
                        onClick={() => {this.setState({selected: !this.state.selected})}}
                        style={{border:this. state.selected ? '5px solid orange' : 'unset' }} />
                        <Card.Title>{books.title}</Card.Title>
                        <Badge pill bg="dark">{books.price}</Badge>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default SingleBook;