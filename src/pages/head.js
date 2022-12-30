import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function HeadComponents() {
    return(
        <Container>
            <Row>
                <Col xs={4} md={4}>Head</Col>
                <Col xs={8} md={8}>hello</Col>
            </Row>
        </Container>
    )
}
export default HeadComponents