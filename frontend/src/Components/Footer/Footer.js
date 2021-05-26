import React from 'react'
import './Footer.css'


const Footer = () => {
    return (
        <footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Tangent<span>.</span></h3>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> Home</li>
              <li><i className="bx bx-chevron-right"></i> About us</li>
              <li><i className="bx bx-chevron-right"></i> Services</li>
              <li><i className="bx bx-chevron-right"></i> Terms of service</li>
              <li><i className="bx bx-chevron-right"></i> Privacy policy</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> Web Design</li>
              <li><i className="bx bx-chevron-right"></i> Web Development</li>
              <li><i className="bx bx-chevron-right"></i> Product Management</li>
              <li><i className="bx bx-chevron-right"></i> Marketing</li>
              <li><i className="bx bx-chevron-right"></i> Graphic Design</li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>
    </footer>
    );
}

export default Footer
