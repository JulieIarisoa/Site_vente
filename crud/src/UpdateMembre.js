import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateMembre(){
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');
    const {NUMERO} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put("http://localhost:8081/update"+NUMERO, {nom, prenom, adresse})
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }
    
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Update membre</h2>
                    <div className="mb-2">
                        <label>Nom</label>
                        <input type="text" placeholder="Entrer votre nom" className="form-control" 
                        onChange={e => setNom(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label>Prénom</label>
                        <input type="text" placeholder="Entrer votre prénom" className="form-control" 
                        onChange={e => setPrenom(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label>Adresse</label>
                        <input type="text" placeholder="Entrer votre adresse" className="form-control" 
                        onChange={e => setAdresse(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success ">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateMembre;