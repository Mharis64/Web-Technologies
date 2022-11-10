import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {

    return ( 
       

        <div id='mm'>
        <li >
    
            
            <Link to="Book" id='menu1' >Book</Link>

            <Link to="Manage" id='menu1' >Manage</Link>
            
            <Link to="Experiance" id='menu1' >Experiance</Link>
            
            <Link to="Fly" id='menu1' >where we fly </Link>
            
            <Link to="Loyalty" id='menu1' >Loyalty</Link>
            
            <Link to="Help" id='menu1' >Help </Link>
<Link to={"Search"}>
<button id=" menu1" class="Login Button" type="submit" style={{display:"inline",borderRadius:".5em", textDecoration:"none",marginLeft:"45vw"}}>
Search
</button>


</Link>

<Link to="/Login">
<button id=" menu1" class="Login Button" type="submit" style={{display:"inline",borderRadius:".5em", textDecoration:"none",}}>Login</button>
           

</Link> 
<Link to="SignUp">
<button id=" menu1" class="Login Button" type="submit" style={{display:"inline",borderRadius:".5em", textDecoration:"none"}}>SignUp</button>
           

</Link> 
<Link to="Home">
<button id=" menu1" class="Login Button" type="submit" style={{display:"inline",borderRadius:".5em", textDecoration:"none"}}>Home</button>
           

</Link> 
           
            </li>
            </div>

     );
}

export default Menu;