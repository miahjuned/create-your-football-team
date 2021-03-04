import React from 'react';
import logo from '../../image/logo.png';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';



const nav = () => {
    return (
        <nav className="navbar-expand-sm navBar ">    
           <ul className="navbar-nav navItem nav-pills">
               {/* Navbar All list item */}
                    <a class="navbar-brand" href="#"><img className="logo" src={logo} alt=""/></a>
                    <li className="nav-item NevItem">
                        <a class="text-white nav-link" href="#"><h5><FontAwesomeIcon icon={faHome} />  Home</h5></a>
                    </li>
                    <li className="nav-item NevItem">
                        <a class="text-white nav-link" href="#"><h5>Gallery</h5></a>
                    </li>
                    <li className="nav-item NevItem">
                        <a class="text-white nav-link" href="#"><h5>Top 10</h5></a>
                    </li>
                    <li className="nav-item NevItem">
                         <a class="text-white nav-link" href="#"><h5>About us</h5></a>
                    </li>
                    <li className="nav-item ">
                         <a class="text-white Live nav-link" href="#"><h5>LIVE</h5></a>
                    </li>
                    
                   

                   {/* navbar srarch box */}
                <form class="form-inline searchBox" action="/action_page.php">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                    <button class="btn btn-success" type="submit">Search</button>
                </form>



                 {/* Social Meadia Icon */}
                <li className="nav-item ">
                    <a class="text-white nav-link facebook" href="#"><h5><FontAwesomeIcon icon={ faFacebookSquare} /></h5></a>
                </li>
                <li className="nav-item ">
                    <a class="text-white nav-link twitter" href="#"><h5><FontAwesomeIcon icon={faTwitterSquare} /></h5></a>
                </li>
                <li className="nav-item ">
                    <a class="text-white nav-link github" href="#"><h5><FontAwesomeIcon icon={ faGithubSquare} /></h5></a>
                </li>

                {/* Social Icon */}
                
            </ul>
        </nav>
    );
};

export default nav;