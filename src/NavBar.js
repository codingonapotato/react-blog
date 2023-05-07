import {Link} from 'react-router-dom';
/**
 * Defining a NavBar component which returns this JSX block which uses the Link component from the react-router-dom
 * package to link each nav button to the endpoint specified by the "to=" prop where props are just a way to pass along
 * data similar to attribute tags in HTNL
 */
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li> 
                    <Link to= "/"> Home </Link> 
                </li>
                <li> 
                    <Link to="/about"> About </Link> 
                </li>
                <li> 
                    <Link to="/articles"> Articles </Link>
                </li>
            </ul>
        </nav>
    )
}