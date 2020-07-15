import React, { Component } from 'react'
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import { withTranslation } from 'react-i18next';

class Commentaire extends Component {
  state = {
    ninjas : [
      {name: 'Belly', lieu: 30, guide: 'Guilliaum', commentaire: 'Très bonne agence nous avons eux du plaisir.', id: 1},
      
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
    render(){
      const {t} = this.props;
        return (
        <div className="container">
          <h1 className="center">{t('Tcommentaire.1')}</h1>
          <AddNinja addNinja={this.addNinja} />
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        </div>
        );
    }
}
export default withTranslation()(Commentaire);