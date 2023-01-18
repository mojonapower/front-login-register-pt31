import React,{useContext, useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const {actions, store} = useContext(Context);
	const [users, setUsers]= useState([])
	useEffect(()=>{
	if(store.user?.info_user){
		fetch("https://3000-mojonapower-jwtback-wwet3rpadt4.ws-us82.gitpod.io/user")
		.then(response => response.json())
		.then(result => setUsers(result))
		.catch(error => console.log('error', error));
	}
	},[])
	return(
	<div className="text-center mt-5">
		<h1>Hello {store.user?.info_user?.email} ID {store.user?.info_user?.id}</h1>
		<button className={store.user?.info_user?.is_active ?"btn btn-success": "btn btn-warning"}>status user</button>
		<ul>
		{
			users.map((user,index)=>{
				return <li key={index}>
				{user.email}
			</li>
			})
		}
		</ul>
	</div>
	);
}
