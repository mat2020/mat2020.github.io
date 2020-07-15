import React, { Component } from 'react'
import AccGuide from './AccGuide'
import AccAventure from './AccAventure'
import { withTranslation } from 'react-i18next';


class Aventure extends Component{
    render(){
    const {t} = this.props;
    return(
        <div className="container">
            <h1 className="center"> {t('Taventure.aventure')}</h1>
            <h2> {t('guide.aventure')}</h2>
            <AccGuide />
            
            <h2> {t('nos.aventure')}</h2>
            <AccAventure />
            
        </div>
    );
    }
}    
export default withTranslation()(Aventure);