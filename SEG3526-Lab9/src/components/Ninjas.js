/**Code pour X inspiré de NetNinja -> https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG**/

import React from 'react';
import { withTranslation } from 'react-i18next';


const Ninjas = ({ninjas, deleteNinja} ) => {
    
    const ninjaList = ninjas.map(ninja => {
        return(
            <div className="ninja" key={ninja.id}
            style={{
                margin: '10px',
                padding: '20px',
                border: '2px solid black',
                fontSize: '20px',
            }}
            >
                <div>Nom: {ninja.name}</div>
                <div>Lieu: {ninja.lieu}</div>
                <div>Guide: {ninja.guide}</div>
                <div style={{
                        paddingBottom: '20px',
                    }}>
                    Commentaire: {ninja.commentaire}
                </div>
                <button onClick={() => {deleteNinja(ninja.id)}} style={{
                    fontSize:'18px',
                }}>
                    Suprimer le commentaire
                </button>
            </div>
        )
    })
    
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    );
}
export default withTranslation()(Ninjas);