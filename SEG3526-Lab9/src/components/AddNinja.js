/**Code pour X inspiré de NetNinja -> https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG**/
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row'


class AddNinja extends Component {
    state = {
        nom: null,
        lieu: null,
        guide: null,
        commentaire: null
    }
    handleChange = (e) =>{
        this.setState({
        [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    render(){
        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <Row>
                    <div style={{
                        padding: '10px',
                    }}>
                        <label htmlFor="nom"></label>
                        <input type="text" id="name" placeholder='Nom:' onChange={this.handleChange}/>
                    </div>
                </Row>
                <Row>
                <div style={{
                        padding: '10px',
                    }}>
                    <select type="text" id="lieu" onChange={this.handleChange} style={{paddingRight: '15px' }}>
                        <option value="" disabled selected > Lieu:</option>
                        <option value="rigaud">Rigaud</option>
                        <option value="montagne_d_argent">Montagne d'argent</option>
                        <option value="calabogie">Calabogie</option>
                    </select>
                </div>
                </Row>
                <Row>
                <div style={{
                        padding: '10px',
                    }}>
                    <select type="text" id="guide" onChange={this.handleChange} style={{paddingRight: '89px' }}>
                        <option value="" disabled selected>Guide:</option>
                        <option value="Guillaum">Guillaum</option>
                        <option value="alex">Alex</option>
                        <option value="marc">Marc</option>
                    </select>
                </div>
                </Row>
                <Row>
                <div style={{
                        padding: '10px',
                    }}>
                    <label htmlFor="commentaire"></label>
                    <input type="text" id="commentaire" placeholder='Commentaire:' onChange={this.handleChange}
                    style={{paddingRight: '200px', paddingBottom: '200px', 
                    
                    }}

                    />
                </div>
                </Row>
                    <button
                    style={{
                        padding: '10px',
                    }}
                    >Submit</button>
                </form>
            </div>
        );
    }
}
export default withTranslation()(AddNinja);