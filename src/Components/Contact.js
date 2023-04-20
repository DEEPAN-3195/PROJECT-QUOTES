import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul>
              <li>Phone: 555-555-5555</li>
              <li>Email: info@example.com</li>
              <li>Address: 123 Main Street, Anytown USA 12345</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Other Information</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #f5f5f5;
          padding: 50px 0;
          margin-top: 50px;
          text-align: center;
        }

        .footer h4 {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .footer ul {
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: left;
        }

        .footer ul li {
          margin-bottom: 10px;
        }

        .footer ul li a {
          color: #333;
          text-decoration: none;
        }

        .footer ul li a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
