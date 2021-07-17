import React, { useState } from 'react';
import Navbar from './Navbar';

function AdminLogin(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpass, setAdminPassword] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeAdminUserId = (e) => setAdminUserId(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${adminuserid}`);
    console.log(`PASS: ${adminpass}`);

    if ((adminuserid === "admin") && (adminpass=== "admin")) {
      sessionStorage.setItem("Key_Variable", 'ADMIN')
      setMessage('WELCOME ADMIN')
      props.history.push('/AdminDashboard')

    }
    else
      setMessage('Invalid Credentials')

    setAdminUserId('')
    setAdminPassword('')

  }

  return (
    <div >
    <Navbar/>
  <div className="l-container">
       <div className="col-md-4 offset-md-4 form-div">
           <form onSubmit={handleSubmit}>
               <div className="f-row"><div className="log">
                
              <h3 className="text-center">Admin Login</h3></div>
              <h5 style={{color:"red"}} className="text-center">{msg}</h5>
              <div className="form-group">        
                  <input type="text" value={adminuserid} onChange={onChangeAdminUserId} required className="form-control form-control-lg" placeholder="AdminUserId"></input>
              </div>
            
              <div className="form-group">
                  <input type="Password" required value={adminpass} onChange={(e)=>setAdminPassword(e.target.value)}  className="form-control form-control-lg" placeholder="AdminPassword"></input>
              </div>
              

              <div className="form-group">
                  <div className="d-grid gap-2 col-13">
                      <input type="submit" value="Login" className="btn btn-danger"></input>
                  </div>
                  
                  
                     
             </div>
             <br/>
             
         </div>
           </form>
       </div>
       </div>
   </div> 

  );
}
export default AdminLogin