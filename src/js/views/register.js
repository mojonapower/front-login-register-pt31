import { useState , useEffect, useContext} from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";


export const Register = () => {

    let navigate = useNavigate();
    const {actions, store} = useContext(Context);
  return (
    <div className="container">
      <form onSubmit={(evento)=>{
        evento.preventDefault();
        let m= evento.target[0].value
        let p =evento.target[1].value
        let rp= evento.target[2].value
        if(p!=rp ){
            alert("las contraseñas deben ser identicas")
        }
        if(m=='' || p=='' || rp==''){
            alert("debe completar datos")
        }
        if(actions.register(m,p)){
            alert("Hola!")
            navigate('/login')
        }
        else{
            alert("error desconocido")
        }
      }}>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            email
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            contraseña
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword"/>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            repetir contraseña
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
