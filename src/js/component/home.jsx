import React from "react";

//Navbar 
import Navbar from "./navbar.jsx";
//Jumbotrop
import Jumbotron from "./jumbotron.jsx";
//Card
import Card from "./card.jsx";
//Footer
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="container justify-content-center">
			<Jumbotron></Jumbotron>
			<Card></Card>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
