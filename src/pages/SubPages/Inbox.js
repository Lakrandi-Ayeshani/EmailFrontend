import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import { Emails } from '../../data/mails'

function MailList() {

    return(
        <Container>
                {Emails.map(data => {
                    return (
                        <div>
                            <Row>
                                <Col xs={12} md={4} >
                                    <Row>{data.from}</Row>
                                </Col>
                                <Col  md={8}>
                                    <Row>{data.Subject}</Row>
                                </Col>
                            </Row>
                        </div>
                    )
                })}
        </Container>
    )
}
export default MailList;