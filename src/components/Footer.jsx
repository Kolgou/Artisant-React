import React from "react";
import '../css/Footer.css';
import Twitter from '../images/twitter.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import LinkedIn from '../images/linkedin.png';
import YouTube from '../images/youtube.png';
import Whatsapp from '../images/whatsapp.png';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
        <div className="legals-pages">
            <h2>LYON</h2>
            <ul className="address">
                <li>101 cours Charlemagne</li>
                <li>CS 20033</li>
                <li>69269 LYON CEDEX 02</li>
                <li>France</li>
                <li>+33 (0)4 26 73 40 00</li>
            </ul>
            <ul className="legal-links">
                <li><Link to="/404">Mentions Légales</Link></li>
                <li><Link to="/404">Données Personnelles</Link></li>
                <li><Link to="/404">Accessibilité</Link></li>
                <li><Link to="/404">Cookies</Link></li>
            </ul>
            <p>&copy; {new Date().getFullYear()} Artisant. Tous droits réservés.</p>
        </div>
        <div className="social-media">
            <img src={Twitter} alt="Twitter" />
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
            <img src={YouTube} alt="YouTube" />
            <img src={Whatsapp} alt="Whatsapp" />
        </div>
    </div>
  );
}

export default Footer;