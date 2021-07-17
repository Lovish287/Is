import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./style.css";
import { TiArrowForwardOutline } from "react-icons/ti";

function Home() {
  return (
    <div className="landing">
      <Navbar />
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Interest Space</h1>

              <p className="lead">
                <i>
                  “Social media is the ultimate equalizer. <br /> It gives a
                  voice and a platform to anyone willing to engage.”
                </i>
              </p>

              <hr />
              <br />

              <Link to="/UserSignup">
                <button type="button" className="btn btn-info btn-lg">
                  GET STARTED <TiArrowForwardOutline size={30} />
                </button>
              </Link>
              <div class="footer">
                <p>
                  Copyright &copy; {new Date().getFullYear()} Interest Space
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
