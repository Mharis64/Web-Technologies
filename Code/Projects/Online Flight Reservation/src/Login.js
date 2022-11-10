import { Link } from "react-router-dom";

const Login=()=> {
  return (
    <div style={{width:"60vw",marginLeft:"15rem",marginTop:"2rem", justifySelf:"center"}} id="container">
    <div class="row"  >
       <form class="col s12">
     {/* <div class="row" > */}
             <div class="input-field col s7 ">
                {/* <i class="material-icons prefix">account_circle</i> */}
                <input  id="name" type="text"  style={{color:"solid black"}}  placeholder="Username" class="  validate" required/>
                {/* <label for="name">Username</label> */}

             {/* </div> */}

             </div>
             
             <div class="input-field col s7 ">
                {/* <label for="password">Password</label> */}
                <input id="name" type="password" placeholder="Password" class="validate" required/>
            
          </div>
               
                </form>


                <div class="row">
             <div class="input-field col s12">
                
                   
                <Link to="SignUp">
<button  id=" menu1" class="Login Button" type="submit" style={{color:"white",width:"10rem", height:"3rem",textDecoration:"none",backgroundColor:"#ee6e73",alignSelf:"left"}}>Sign Up</button>
</Link> 

<Link to="/Login">
<button id=" menu1" class="Login Button" type="submit" style={{fontFamily:"serif", width:"10rem", height:"3rem",marginTop:"10px", color:"white", backgroundColor:"#ee6e73",marginLeft:"1rem"}}>Forgot Password</button>
</Link> 
<Link to="/Login">
<button id=" menu1" class="Login Button" type="submit" style={{fontFamily:"serif", width:"10rem", height:"3rem",  marginTop:"10px", color:"white", backgroundColor:"#ee6e73",marginLeft:"1rem"}}>Change Password</button>
</Link> 


               
              </div>
          </div>





    </div>
</div>


    );
}

export default Login;