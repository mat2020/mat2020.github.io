import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import lieu from './photo/lieu.png';
import { withTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Acc.css';


class AccAventure extends Component {
    render(){
        const {t} = this.props;
    return(
        <div className="container">
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div id="title">
                        {t('rigaud.accAventure')}
                    </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <div id="lieu" style={{
                            backgroundImage: 'url(' + require('./photo/rigaud.png') + ')',
                            backgroundSize: '100%', 
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            
                        }}>
                        <Row>
                            <Col xs={3}>
                                <img className="profilpic" src={lieu} alt='not available' />
                            </Col>
                            <Col>
                                <div style={{
                                    paddingTop: '50px',
                                }}>
                                <p>{t('niv1.accAventure')} </p>
                                <p>{t('app1.accAventure')} </p>
                                <p>{t('haut1.accAventure')} </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    <div id="title">
                        {t('argent.accAventure')}
                    </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <div id="lieu" style={{
                            backgroundImage: 'url(' + require('./photo/rigaud.png') + ')',
                            backgroundSize: '100%', 
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            
                        }}>
                        <Row>
                            <Col xs={3}>
                                <img className="profilpic" src={lieu} alt='not available' />
                            </Col>
                            <Col>
                                <div style={{
                                    paddingTop: '50px',
                                }}>
                                <p>{t('niv2.accAventure')} </p>
                                <p>{t('app2.accAventure')} </p>
                                <p>{t('haut2.accAventure')} </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                    <div id="title">
                        {t('calabogie.accAventure')}
                    </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    <div id="lieu" style={{
                            backgroundImage: 'url(' + require('./photo/rigaud.png') + ')',
                            backgroundSize: '100%', 
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            
                        }}>
                        <Row>
                            <Col xs={3}>
                                <img className="profilpic" src={lieu} alt='not available' />
                            </Col>
                            <Col>
                                <div style={{
                                    paddingTop: '50px',
                                }}>
                                <p>{t('niv1.accAventure')} </p>
                                <p>{t('app1.accAventure')} </p>
                                <p>{t('haut1.accAventure')} </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
           
        </div>
    );
    }
}    
export default withTranslation()(AccAventure);