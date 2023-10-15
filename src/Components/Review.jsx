import React from "react";
import "./App.css"
export default function header() {
  return (
    <>
    <div id="client">
      <div className="m-3">
   <div className="card bg-warning text-dark">
        <div className="card-body text-center">Our Happy Clints</div>
      </div>
        </div>
      </div>
     <div className="container">  
        <div id="demo" className="carousel slide" data-ride="carousel">  
          <div className="carousel-inner">  
            <div className="carousel-item active">  
              <div className="carousel-caption">  
                <p> I will contact for final year project and i will get 100% satisfaction from 'Er-Kida'. </p> <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" />  
                <div id="image-caption"> Client1 </div>  
              </div>  
            </div>  
            <div className="carousel-item">  
              <div className="carousel-caption">  
                <p> I will contact for 'Letex Report' and i will get best costomization and best creative report form 'Er-Kida'. </p> <img src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" className="img-fluid" />  
                <div id="image-caption"> Client2 </div>  
              </div>  
            </div>  
            <div className="carousel-item">  
              <div className="carousel-caption">  
                <p> I will contact for 'Prosonal web site', i will get reponsive site and best work form 'Er-Kida' . </p> <img src="https://cdn-icons-png.flaticon.com/512/4139/4139951.png" className="img-fluid" />  
                <div id="image-caption"> Client3 </div>  
              </div>  
            </div>  
          </div> <a className="carousel-control-prev" href="#demo" data-slide="prev"> <i className="fas fa-arrow-left"> </i> </a> <a className="carousel-control-next" href="#demo" data-slide="next"> <i className="fas fa-arrow-right"> </i> </a>  
        </div>  
      </div>
    </>
  );
}