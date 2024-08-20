import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Membre(){

    const [membre, setMembre] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setMembre(res.data))
        .catch(err => console.log(err));
    }, [])

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to='/Formulaire' className="btn btn-success"> Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Adresse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            membre.map((data, i) => (
                                <tr key ={i}>
                                    <td>{data.NOM}</td>
                                    <td>{data.PRENOM}</td>
                                    <td>{data.ADRESSE}</td>
                                    <td>
                                        <Link to={`update/${data.NUMERO}`} className="btn btn-primary">Update</Link>
                                        <Link to={`delete/${data.NUMERO}`} className="btn btn-danger">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Membre;