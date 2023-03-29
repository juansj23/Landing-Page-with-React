import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Navbar 
const Navbar =() =>{
	return(
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	<div className="container-fluid">
	  <a className="navbar-brand" href="#">Start Bootstrap</a>
	  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	  </button>
	  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
		<ul className="navbar-nav ">
		  <li className="nav-item">
			<a className="nav-link active" aria-current="page" href="#">Home</a>
		  </li>
		  <li className="nav-item">
			<a className="nav-link" href="#">About</a>
		  </li>
		  <li className="nav-item">
			<a className="nav-link" href="#">Service</a>
		  </li>
		  <li className="nav-item">
			<a className="nav-link" href="#">Contact</a>
		  </li>
		</ul>
	  </div>
	</div>
  </nav>)
}

//Jumbotrop
const Jumbotron=()=>{
return(
	<div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid justify-content-start">
        <h1 className="display-1">A Warm Welcome! </h1>
        <p className="col">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action</button>
      </div>
    </div>)
}

//Card
const Card = () => {
	return(
	<div className="row row-cols-1 row-cols-md-4 g-4 text-center">
	<div className="col">
	  <div className="card h-100">
	  <img
          src="https://via.placeholder.com/500x325"
          className="card-img-top"
          alt="Card Image"
        />
		<div className="card-body">
		  <h5 className="card-title">Card title</h5>
		  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		</div>
		<div className="card-footer">
		<button className="btn btn-primary" type="button">Button</button>
		</div>
	  </div>
	</div>
	<div className="col">
	  <div className="card h-100">
	  <img
          src="https://via.placeholder.com/500x325"
          className="card-img-top"
          alt="Card Image"
        />
		<div className="card-body">
		  <h5 className="card-title">Card title</h5>
		  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
		</div>
		<div className="card-footer">
		<button className="btn btn-primary" type="button">Button</button>
		</div>
	  </div>
	</div>
	<div className="col">
	  <div className="card h-100">
	  <img
          src="https://via.placeholder.com/500x325"
          className="card-img-top"
          alt="Card Image"
        />
		<div className="card-body">
		  <h5 className="card-title">Card title</h5>
		  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
		</div>
		<div className="card-footer">
		<button className="btn btn-primary" type="button">Button</button>
		</div>
	  </div>
	</div>	<div className="col">
	  <div className="card h-100">
	  <img
          src="https://via.placeholder.com/500x325"
          className="card-img-top"
          alt="Card Image"
        />
		<div className="card-body">
		  <h5 className="card-title">Card title</h5>
		  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
		</div>
		<div className="card-footer">
		<button className="btn btn-primary" type="button">Button</button>
		</div>
	  </div>
	</div>
  </div>
	)
}
//Footer
const Footer =()=>{
	return(	
	<div className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
		<span className="navbar-brand mt-3 fs-6" href="#">Start Bootstrap</span>
	</div>
	)
}

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
