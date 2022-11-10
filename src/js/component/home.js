import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div class="container">
		<Jumbotron/>
		<Card/>
		</div>
		<Footer/>
		</>
	);
};

export default Home;