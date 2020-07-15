import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class Acceuil extends Component {
    render(){
    const {t} = this.props;
    return(
        <div className="container">
            <h1>{t('Tacceuil.1')} </h1>
            <h2>{t('nous.1')}</h2>
            <p>{t('nousdef.1')}</p>

            <h2>{t('service.1')}</h2>
            <p>{t('servicedef.1')}</p>

            <h2>{t('coeur.1')}</h2>
            <p>{t('coeurdef.1')} </p>
        </div>
    );
    }
}
export default withTranslation()(Acceuil);