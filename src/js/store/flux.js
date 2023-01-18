const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
	  user:null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      login: (mail,pass) => {
		const store = getStore()
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		
		var raw = JSON.stringify({
		  "email": mail,
		  "password": pass
		});
		
		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};
		
		fetch("https://3000-mojonapower-jwtback-wwet3rpadt4.ws-us82.gitpod.io/user", requestOptions)
		  .then(response => response.json())
		  .then(result => {setStore({user:result})
			console.log(result)
		  //window.location.href = "/";
		})
		  .catch(error => console.log('error', error));
      },
      register: (mail, pass) => {
		
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: mail,
          password: pass,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3000-mojonapower-jwtback-wwet3rpadt4.ws-us82.gitpod.io/registro",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));

		return true
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
