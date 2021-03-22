import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { topFive } from '../../service/github';
import './Home.css';

const Home = () => {
    const history = useHistory();

    const redirect = (user) => {
        history.push(`/person/${user}`)
    }
    const getUserNames = () => topFive.map((val, index) => <Button className="usernames-box" key={index} onClick={e => { redirect(val) }}> {val} </Button>);

    return <Container fluid="md">
        <Row className="person-box">
            <Col>
                <h1> Top 5 GitHub Users </h1>
            </Col>
        </Row>
        <Row className="person-box">
            <Col>
                <span> Tap the username to see more information </span>
            </Col>
        </Row>
        <Row className="usernames">
            { getUserNames() }
        </Row>
    </Container>
};

export default Home;