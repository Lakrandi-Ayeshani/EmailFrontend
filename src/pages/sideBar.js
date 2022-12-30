import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../styles.css';


function Sidebar() {
    const [activeLink, setActiveLink] = useState('');

    const getClassName = (arg) => {
        console.log(arg);
        setActiveLink(arg);
        return "";
    };

    return(
        <Container className='ml-0'>
            <Col>
                <Row>
                    <Col className={activeLink === 'inbox' ? 'active' : 'inactive'}>
                        <NavLink 
                            to="/" 
                            className={
                                (isActive)=> isActive ? getClassName("inbox") : ""
                            } 
                        >
                            Inbox
                        </NavLink>
                    </Col>
                </Row>
                <Row className='mail'>
                    <Col>Starred</Col>
                </Row>
                <Row>
                    <Col>Snoozed</Col>
                </Row>
                <Row>
                    <Col className={activeLink === 'Sent' ? 'active' : 'inactive'}>
                        <NavLink 
                            to='/sent' 
                            className={
                                (isActive) => isActive ? getClassName("Sent") : ""
                            }
                        >
                            Sent
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col>Draft</Col>
                </Row>
                <Row>
                    <Col>More...</Col>
                </Row>
            </Col>
        </Container>
    )
}
export default Sidebar;