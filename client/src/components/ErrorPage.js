import React from 'react'
import{Link} from 'react-router-dom'
import Navbar from './Navbar'



function ErrorPage() {
    return (
       
        <div>
             <Navbar/>
             <div  className="errort">
             <div className="text-center"> 
            <h1>404</h1>
            </div>
            <div className="text-center">
                <h3>Sorry Page Not Found</h3>
            </div>
            <div className="error-b">
            <Link to="/" className="nav-link"><button type="button" className="btn btn-outline-success">Back Home</button></Link>
            </div>
            </div>
        </div>

    )
}


export default ErrorPage