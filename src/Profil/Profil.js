import React from "react";  
import propTypes from "prop-types";

function Profil (props){
    return(
        <div>
        <h1> {props.fullName} </h1>
        <h4> {props.profession} </h4>
        <h5> {props.bio} </h5>
        <div> {props.children} </div>
        </div>
    );
}

export default Profil;