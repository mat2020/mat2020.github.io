import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import guide1 from './photo/guide1.png';
import guide2 from './photo/guide2.png';
import guide3 from './photo/guide3.png';
import { withTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Acc.css';

class AccGuide extends Component {
      render(){
        const {t} = this.props;
    return(
        <div className="container">
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div id="title">
                        {t('nom1.accGuide')}
                    </div>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <div id="guide" style={{
                            backgroundImage: 'url(' + require('./photo/rigaud.png') + ')',
                            backgroundSize: '100%', 
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            
                        }}>
                        <Row>
                            <Col xs={3}>
                                <img className="profilpic" src={guide1} alt='not available' />
                            </Col>
                            <Col>
                                <div style={{
                                    paddingTop: '50px',
                                }}>
                                <p>{t('from1.accGuide')}</p>
                                <p>{t('exp1.accGuide')}</p>
                                <p>{t('desc1.accGuide')}</p>
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
                        {t('nom2.accGuide')}
                    </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <div id="guide" style={{
                            backgroundImage: 'url(' + require('./photo/rigaud.png') + ')',
                            backgroundSize: '100%', 
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            
                        }}>
                        <Row>
                            <Col xs={3}>
                                <img className="profilpic" src={guide1} alt='not available' />
                            </Col>
                            <Col>
                                <div style={{
                                    paddingTop: '50px',
                                }}>
                                <p>{t('from2.accGuide')}</p>
                                <p>{t('exp2.accGuide')}</p>
                                <p>{t('desc2.accGuide')}</p>
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
                        {t('nom3.accGuide')}
                    </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    <div id="guide" style={{
                            backgroundImage: 'url(' + require('./photo/rigaud.png') + ')',
                            backgroundSize: '100%', 
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            
                        }}>
                        <Row>
                            <Col xs={3}>
                                <img className="profilpic" src={guide1} alt='not available' />
                            </Col>
                            <Col>
                                <div style={{
                                    paddingTop: '50px',
                                }}>
                                <p>{t('from3.accGuide')}</p>
                                <p>{t('exp3.accGuide')}</p>
                                <p>{t('desc3.accGuide')}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
           
        </div>
    )
      }
}    
export default withTranslation()(AccGuide);