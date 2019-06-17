import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() { 
    return (
<footer className="flex-rw">
  
  <ul className="footer-list-top">
      <li><a href='www.google.com' className="generic-anchor footer-list-anchor">Link</a></li>
      <li><a href='www.google.com' className="generic-anchor footer-list-anchor">Link</a></li>
      <li><a href='www.google.com' className="generic-anchor footer-list-anchor">Link</a></li>
  </ul>

  <ul className="footer-list-top">
      <li><a href='www.google.com' className="generic-anchor footer-list-anchor">Link</a></li>
      <li><a href='www.google.com' className="generic-anchor footer-list-anchor">Link</a></li>
      <li><a href='www.google.com' className="generic-anchor footer-list-anchor">Link</a></li>
  </ul>

  <ul className="footer-list-top">
      <li><a href='www.google.com' className="generic-anchor footer-list-anchor">Link</a></li>
      <li><a href='www.google.com' className="generic-anchor footer-list-anchor">Link</a></li>
      <li><a href='www.google.com' className="generic-anchor footer-list-anchor">Link</a></li>
  </ul>

  <section className="footer-bottom-section flex-rw">
    <div className="footer-bottom-wrapper">   
      <i className="fa fa-copyright" role="copyright">
      </i> 2019 BourbonCoin <address className="footer-address" role="company address">Akron, OH</address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>
    <div className="footer-bottom-wrapper">
      <a href="/terms-of-use.html" className="generic-anchor" rel="nofollow">Terms</a> | <a href="www.google.com" className="generic-anchor" rel="nofollow">Privacy</a>
    </div>
  </section>
</footer>
    );
  }
}

export default Footer;