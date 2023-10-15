import React from "react";
import "./Form.css"
export default function header() {
   
   return (
  <>
     <div id="contact">
      <div className="m-3">
   <div className="card bg-warning text-dark">
        <div className="card-body text-center">Contact</div>
      </div>
        </div>
      </div>
    <div>
    <section name="contact" >
  <div className="wrapper">
        <div className="logo">
          <img src="https://i.ibb.co/7YBDmgk/logo-modified.png" alt="" />
        </div>
        <div className="text-center mt-4 name">
         Get in Touch
        </div>
        <form action="https://formsubmit.co/engineeringkeda@gmail.com" method="POST" className="p-3 mt-3">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://first-react.codewithmoru.repl.co/" />
          <input type="hidden" name="_subject" value="E-Keda New submission!" />
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user" />
            <input type="text" name="userName" id="userName" placeholder="Name" required/>
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-envelope" />
            <input type="email" name="userEmail" id="userEmail" placeholder="Email" required/>
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-mobile" />
            <input type="number" name="userMobile" id="userMobile" placeholder="Mobile Number" required/>
          </div>
      
           <h3 className="text-center">Select The Following Services That You Want</h3>
          
         
          <div className="checkbox  ">
          <label><input className="form-check-inline" name="userselect1" id="userselect1" type="checkbox" defaultValue={"Mini-Project's"} />Mini-Project's.</label>
        </div>
        <div className="checkbox ">
          <label><input className="form-check-inline" name="userselect2" id="userselect2" type="checkbox" defaultValue={"Last-Year Project's"} />Last-Year Project's.</label>
        </div>
          <div className="checkbox ">
          <label><input className="form-check-inline" name="userselect3" id="userselect3" type="checkbox" defaultValue={"Mini-Project's Reports"} />Mini-Project's Reports.</label>
        </div>
        <div className="checkbox ">
          <label><input className="form-check-inline" name="userselect4" id="userselect4" type="checkbox" defaultValue={"Last-Year Project's Reports"} />Last-Year Project's Reports.</label>   
     </div>
          <div className="checkbox ">
          <label><input className="form-check-inline" name="userselect5" id="userselect5" type="checkbox" defaultValue={"Letex Reports"} />Letex Reports.</label>
        </div>
        <div className="checkbox ">
          <label><input className="form-check-inline" name="userselect6" id="userselect6" type="checkbox" defaultValue={"Documents Reports"} />Documents Reports.</label>
        </div>
         <div className="checkbox ">
          <label><input className="form-check-inline" name="userselect7" id="userselect7" type="checkbox" defaultValue={"Research Peper Reports"} />Research Peper Reports.</label>
        </div>
        <div className="checkbox ">
          <label><input className="form-check-inline" name="userselect8" id="userselect8" type="checkbox" defaultValue={"Website Devlopment"} />Website Devlopment</label>
        </div>
          <div className="checkbox ">
          <label><input className="form-check-inline" name="userselect9" id="userselect9" type="checkbox" defaultValue={"Website Coustomization"} />Website Coustomization</label>
        </div>
        <div className="checkbox ">
          <label><input className="form-check-inline" name="userselect10" id="userselect10" type="checkbox" defaultValue={"Deployment"} />Deployment</label>
        </div>
          <div className="checkbox ">
          <label><input className="form-check-inline" name="userselect0" id="userselect0" type="checkbox" defaultValue={"Ohter"} />Ohter</label>
        </div>
            <div className="d-flex align-items-center">
        <textarea className="form-field d-flex align-items-center w-100 m-2" name="userOther" id="userOther" rows={3} placeholder="How can i help you..!"/>
          </div>
          <button className="btn mt-3">Submit</button>
          
        </form>
    
        <div className="text-center fs-6">
         <a href="gmai.com">engineeringkida@gmail.com</a>
        </div>
      </div>
    </section>
      <div>
   <div className="card bg-warning text-dark m-4">
        <div className="card-body text-center">Note : After submission of form you will get back response within 24 hr from Ear-Kids...Thank you..! </div>
      </div>
        </div>
      </div>
  
      
  </>
)
}
