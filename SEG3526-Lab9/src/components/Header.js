import React from 'react'
import grimpeur from './photo/grimpeur1.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './header.css';

const Header = ({t}) => {
    return(
        <div className="container fluid" style={{
                backgroundImage: 'url(' + require('./photo/montagne1.png') + ')',
                backgroundSize: '30%', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                
            }}>
            <Row>
                <Col xs={2}>
                    <img className="headerpic" src={grimpeur} fluid alt='not available' /> 
                </Col>
                <Col>
                    <p id="Title">{t('Titre.1')} </p>
                </Col>
           </Row>
        </div>
    );
}
export default Header