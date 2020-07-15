import React, { Component } from 'react'
import { UncontrolledTooltip } from 'reactstrap';
import { withTranslation } from 'react-i18next';

class Experience extends Component{
    state ={
        check: "Submit"
    }
    changeText = (check) => {

        this.setState({ check }); 
      }

    handleSubmit = (e) => {
        e.preventDefault();
        
    }
    render(){
        const{check} = this.state
        const {t} = this.props;
    return(
        <form onSubmit={this.handleSubmit}>
            <div className="container">
            <h1 className="center"> {t('Texperience.experience')}</h1>
                <div id="question">
                    <h4>{t('Tq1.experience')}</h4>

                        <div className="form-check">
                            <label><input type="radio" name="grimpe" value="1"  className="form-check-input" onChange={this.handleChange} />
                                <span style={{textDecoration: "underline"}} href="#" id="Premier_de_cordée">{t('Tq1r1.experience')}</span>
                                <UncontrolledTooltip placement="right" target="Premier_de_cordée">
                                {t('Tq1r1tip.experience')}
                                </UncontrolledTooltip>

                            </label>
                        </div>

                        <div className="form-check">
                            <label><input type="radio" name="grimpe" value="1"  className="form-check-input" onChange={this.handleChange}/>
                               
                                <span style={{textDecoration: "underline"}} href="#" id="Moulinette">{t('Tq1r2.experience')} </span>
                                <UncontrolledTooltip placement="right" target="Moulinette">
                                {t('Tq1r2tip.experience')} 
                                </UncontrolledTooltip>
                            </label>
                        </div>

                        <div className="form-check">
                        <label><input type="radio" name="grimpe" value="1" className="form-check-input" onChange={this.handleChange}/>
                            <span style={{textDecoration: "underline"}} href="#" id="trad"> {t('Tq1r3.experience')}</span>
                                <UncontrolledTooltip placement="right" target="trad">
                                {t('Tq1r3tip.experience')} 
                                </UncontrolledTooltip>
                        </label>
                        </div>            

                </div>
                <div id="question">
                    <h4>{t('Tq2.experience')}
                        <span style={{textDecoration: "underline"}} href="#" id="niveau"> {t('')}niveau de grimpe?</span>
                            <UncontrolledTooltip placement="right" target="niveau">
                            {t('Tq2tip.experience')}  
                            </UncontrolledTooltip>
                    </h4>
                    <select type="text" id="lieu">
                            <option value=" " onChange={this.handleChange}> 5.5-5.10</option>
                            <option value="0" onChange={this.handleChange}>5.5</option>
                            <option value="1"onChange={this.handleChange}>5.6</option>
                            <option value="2"onChange={this.handleChange}>5.7</option>
                            <option value="3"onChange={this.handleChange}>5.8</option>
                            <option value="4"onChange={this.handleChange}>5.9</option>
                            <option value="5"onChange={this.handleChange}>5.10</option>
                            <option value="6"onChange={this.handleChange}>5.11</option>
                            <option value="7"onChange={this.handleChange}>5.12</option>
                            <option value="8"onChange={this.handleChange}>5.13</option>
                            <option value="9"onChange={this.handleChange}>5.14</option>
                            <option value="10"onChange={this.handleChange}>5.15</option>     
                    </select>
                </div>

                <div id="question">
                    <h4>{t('Tq3.experience')}</h4>
                    <div className="form-check">
                        <label><input type="radio" name="yn" value="1" checked={true} className="form-check-input" onChange={this.handleChange}/>
                        {t('Tq3oui.experience')} 
                        </label>
                        </div>

                        <div className="form-check">
                        <label><input type="radio" name="yn" value="1"  className="form-check-input" onChange={this.handleChange}/>
                        {t('Tq3non.experience')} 
                        </label>
                        </div> 
                </div>
                <div id="question">
                    <h4>{t('Tq4.experience')}</h4>
                    <div className="form-check">
                        <label><input type="checkbox" name="equip" value="1" className="form-check-input" onChange={this.handleChange}/>
                        {t('Tq4Chk1.experience')} 
                        </label>
                    </div>
                    <div className="form-check">
                        <label><input type="checkbox" name="equip" value="1" className="form-check-input" onChange={this.handleChange}/>
                        {t('Tq4Chk2.experience')} 
                        </label>
                    </div>
                    <div className="form-check">
                        <label><input type="checkbox" name="equip" value="1" className="form-check-input" onChange={this.handleChange}/>
                        {t('Tq4Chk3.experience')} 
                        </label>
                    </div>
                    <div className="form-check">
                        <label><input type="checkbox" name="equip" value="1" className="form-check-input" onChange={this.handleChange}/>
                        {t('Tq4Chk4.experience')} 
                        </label>
                    </div>
                    <div className="form-check">
                        <label><input type="checkbox" name="equip" value="1" className="form-check-input" onChange={this.handleChange}/>
                        {t('Tq4Chk5.experience')}
                        </label>
                    </div>
                </div>
                
                <button onClick={ () => { this.changeText( t('exbutton.experience')) }  }> {check} </button>
            
            </div>
        </form>
    );
    }
}
export default withTranslation()(Experience);