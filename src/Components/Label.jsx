import React from "react";
export default function header() {
     
  return (
    <>
     <div id="services">
      <div className="m-3">
   <div className="card bg-warning text-dark">
        <div className="card-body text-center">Service's</div>
      </div>
        </div>
      </div>
   <div className="container">
        
        
            <div className="card shadow mb-4 text-center">
              <div className="card-body p-2">
                <ul className="list-group">
                  <li className="list-group-item active">Project's</li>
                  <li className="list-group-item">Mini-Project's.</li>
                  <li className="mb-2 list-group-item">Last-Year Project's.</li>
                </ul>
               <a className="btn btn-primary" href="#contact" role="button">Contact</a> 
              </div>
            </div>
        
<div className="card shadow mb-4 text-center">
              <div className="card-body p-2">                
                <ul className="list-group">
                   <li className="list-group-item active">Report's</li>
                  <li className="list-group-item">Mini-Project's Reports.</li>
                  <li className="list-group-item">Last-Year Project's Reports.</li>
                  <li className="list-group-item">Letex Reports.</li>
                  <li className="list-group-item">Documents Reports.</li>
                  <li className="mb-2 list-group-item">Research Peper Reports.</li>      
                </ul>
             <a className="btn btn-primary" href="#contact" role="button">Contact</a>
              </div>
            </div>
          
            <div className="card shadow mb-4 text-center">
              <div className="card-body p-2">
                <ul className="list-group">
        <li className="list-group-item active">Web Service's</li>
        <li className="list-group-item">Website Devlopment</li>
        <li className="list-group-item">Website Coustomization</li>
        <li className="mb-2 list-group-item">Deployment</li>
      </ul>
             <a className="btn btn-primary" href="#contact" role="button">Contact</a>
      </div>
    </div>

      <div className="card shadow mb-4 text-center">
              <div className="card-body p-2">
                <ul className="list-group">
                  <li className="list-group-item active">Note's</li>
                  <li className="list-group-item">Syllabus.</li>
                  <li className="mb-2 list-group-item">All Eng Notes.</li>
                </ul>
                 <a className="btn btn-primary" href="#" role="button">Comming Soon..!</a>
              </div>
            </div>
     
     <div className="card shadow mb-4 text-center">
              <div className="card-body p-2">
                <ul className="list-group">
                  <li className="list-group-item active">Blog's</li>
                  <li className="list-group-item">Educational Information.</li>
                  <li className="mb-2 list-group-item">Global Information.</li>
                </ul>
                <a className="btn btn-primary" href="#" role="button">Comming Soon..!</a>
              </div>
            </div>
          </div>
      
      </>
    
    );
}