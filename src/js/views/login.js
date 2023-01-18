import { useState , useEffect, useContext} from "react";
import React from "react";
import { Context } from "../store/appContext";

export const Login = () => {
  
    const {store, actions} = useContext(Context)
  return (
    <div className="container">
      <form onSubmit={(evento)=>{
        evento.preventDefault();
        let m= evento.target[0].value
        let p =evento.target[1].value

        if(m=='' || p=='' ){
            alert("debe completar datos")
        }
        else{
            actions.login(m,p);
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
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
