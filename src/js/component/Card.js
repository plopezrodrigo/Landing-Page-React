import React from "react";
import imagen from "../../img/500x325.png";

const Card = () => {
	return (
		<div className="card h-100 mb-sm-4 mb-md-4 mb-lg-4" id="cardbox">
			<div className="row pb-5">
				<div className="col-xl-3 col-md-4 col-lg-3">
					<div className="card">
					<img src={imagen} className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Card Title</h5>
							<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
							<a href="#" className="btn btn-primary">Find out more!</a>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-md-4 col-lg-3">
					<div className="card">
						<img src={imagen} className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Card Title</h5>
							<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
							<a href="#" className="btn btn-primary">Find out more!</a>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-md-4 col-lg-3">
					<div className="card">
						<img src={imagen} className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Card Title</h5>
							<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
							<a href="#" className="btn btn-primary">Find out more!</a>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-md-4 col-lg-3">
					<div className="card">
						<img src={imagen} className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Card Title</h5>
							<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
							<a href="#" className="btn btn-primary">Find out more!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card