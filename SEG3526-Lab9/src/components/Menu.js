import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Menu ({handleClick, t}) {
   
    return (
        <div className="container">
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">{t('Acceuil.1')}</Nav.Link>
                        <Nav.Link href="/Aventure">{t('Aventure.1')}</Nav.Link>
                        <Nav.Link href="/Experience">{t('Experience.1')}</Nav.Link>
                        <Nav.Link href="/Commentaire">{t('Commentaire.1')}</Nav.Link>
                    </Nav>
                        <NavDropdown title="Language" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={()=>handleClick('fr')} >Francais</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>handleClick('en')}>English</NavDropdown.Item>
                        </NavDropdown>
                </Navbar>
        </div>
        
        
    );
    
}
export default Menu