import React from "react"

//Estas son las tarjetas al final de la pagina
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
		  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur saepe nemo delectus reprehenderit id quasi laudantium porro blanditiis, deleniti nisi. Ducimus consectetur adipisci quos autem incidunt laudantium dicta consequuntur dolore.</p>
		</div>
		<div className="card-footer">
		<button className="btn btn-primary" type="button">Find Out More!</button>
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
		  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quidem rem vero sint asperiores, vitae magnam, reiciendis recusandae esse eius voluptas quam eligendi necessitatibus aspernatur! Eum ducimus quae in facilis.</p>
		</div>
		<div className="card-footer">
		<button className="btn btn-primary" type="button">Find Out More!</button>
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
		  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo unde quaerat corrupti rerum similique aspernatur nemo, saepe, totam odit fugiat quod blanditiis accusantium deleniti ab nisi, beatae dignissimos corporis!</p>
		</div>
		<div className="card-footer">
		<button className="btn btn-primary" type="button">Find Out More!</button>
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
		  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti error facere, fugiat repellat, accusamus, laudantium corrupti inventore sunt sed blanditiis aliquid illo dolores id? Accusantium nobis maiores cum distinctio voluptates?</p>
		</div>
		<div className="card-footer">
		<button className="btn btn-primary" type="button">Find Out More!</button>
		</div>
	  </div>
	</div>
  </div>
	)
}

export default Card;