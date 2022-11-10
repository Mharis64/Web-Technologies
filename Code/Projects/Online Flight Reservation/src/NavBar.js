import { Link } from 'react-router-dom';

function NavBar() {
    return ( 

        <nav>
        <div class="nav-wrapper">
         
          <ul id="nav-mobile" class="left hide-on-med-and-down">

           <Link to="Book" id='bar' style={{display:"inline" , textDecoration:"none",marginLeft:"1em"}} >Book</Link>

           <Link to="FlightDeals"id='bar'  style={{display:"inline"}} >Flight Deals</Link>
            
           
            
            <Link to="Fly"id='bar' style={{display:"inline"}}>Destinations </Link>
            
            
            <Link to="Experiance"id='bar' style={{display:"inline"}}>Experiance </Link>


            <Link to="Login" id='bar' style={{display:"inline", marginLeft:"40rem"}}>Log In </Link>
            <Link to="SignUp"id='bar'  style={{display:"inline"}}>Sign Up</Link>
            {/* <Link to="Search"id='bar'  style={{display:"inline"}}>Search </Link> */}
            <Link to="Home" id='bar' style={{display:"inline"}}>Home </Link>



          </ul>


          
        </div>



      </nav>
    
     );
}

export default NavBar;