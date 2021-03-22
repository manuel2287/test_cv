import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Row, Col, Spinner } from 'react-bootstrap';
import { getUserInfo } from '../../service/github';
import './Person.css';

const Person = () => {
    const [person, setPerson] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        getUserInfo(id)
            .then(person =>  {
                setLoading(false);
                setPerson(person);
            })
    }, []);

    if(loading) {
        return <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
    }

    return !loading && <Container fluid="md">
                <Row className="person-box">
                    <Col className="image-cropper" xs lg="3">
                        <img src={person.avatar_url} className="rounded" />
                    </Col>
                    <Col>
                        <div className="person-name"> {person.name} </div>
                        <div className="person-location"> {person.location} </div>
                    </Col>
                </Row>
            </Container>
};

export default Person;