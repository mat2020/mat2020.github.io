import React, { Component } from 'react'
import Navbar from './components/Menu'
import {BrowserRouter, Route} from 'react-router-dom'
import Acceuil from './components/Acceuil'
import Aventure from './components/Aventure'
import Experience from './components/Experience'
import Commentaire from './components/Commentaire'
import Header from './components/Header'
import i18n from './i18n'
import { withTranslation } from 'react-i18next';

class App extends Component{
  handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }

  render(){
    const {t} = this.props;
    return (

      <BrowserRouter>
        <div className="App" style={{
                backgroundImage: 'url(' + require('./components/photo/foret2.png') + ')',
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                paddingBottom: '100px',
            }}
        
        >
          <Header t={t}/>
          <Navbar handleClick={this.handleClick} t={t} />

          <Route exact path='/' component={Acceuil} />
          <Route path='/Aventure' component={Aventure} />
          <Route path='/Experience' component={Experience} />
          <Route path='/Commentaire' component={Commentaire} />
        </div>
      </BrowserRouter>
    );
  }
}

export default withTranslation()(App);
