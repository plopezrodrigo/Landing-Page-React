import React from "react";

const Jumbotron = () => {
	return (
		//here you have to return expected html using the properties being passed to the component
		<div className="jumbotron jumbotron-fluid" id= "jumbocard">
			<div className="container" id= "jumbox">
    			<h1>A Warm Welcome</h1>      
    			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numqueat repellat.</p>
				<p><a className="btn btn-primary btn-lg" role="button">Call to action!</a></p>
			</div>
		</div>
	);
};

export default Jumbotron
