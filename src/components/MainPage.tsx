import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ListOfPosts } from './ListOfPosts';


export const MainPage = () => {
    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <h1 className="mb-5">Hello Vite + React 18!</h1>
                    <ListOfPosts />
                </Col>
            </Row>
        </Container>
    );
}