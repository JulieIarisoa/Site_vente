import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateMembre(){
    const {NUMERO} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put("http://localhost:8081/delete"+NUMERO)
        .then(res => {
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }
    
    return(
        <>
        </>
    )
}

export default UpdateMembre;