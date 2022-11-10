import { Link } from 'react-router-dom';


const SignUp=()=> {
    return ( 

      <div style={{width:"60%",marginLeft:"15rem",marginTop:"2rem"}} id="container">
      <div class="row"  >
         <form class="col s12">


         <div class="row" >
               <div class="input-field col s6 ">
                
                  <input  id="name" type="text"   placeholder="Firstname" class="  validate" required/>
                  {/* <label for="name">Username</label> */}

               </div>


               
               <div class="input-field col s6 ">
                  {/* <label for="password">Password</label> */}
                  <input id="name" type="text" placeholder="Lastname" class="validate" required/>
               </div>
            </div>




            <div class="row" >
               <div class="input-field col s6 ">
                  <i class="material-icons prefix">account_circle</i>
                  <input  id="name" type="text"   placeholder="Username" class="  validate" required/>
                  {/* <label for="name">Username</label> */}

               </div>


               
               <div class="input-field col s6 ">
                  {/* <label for="password">Password</label> */}
                  <input id="name" type="password" placeholder="Password" class="validate" required/>
               </div>
            </div>
            <div class="row">
               <div class="input-field col s10">
               <i class="material-icons prefix">email</i>
                  <input placeholder="Email" id="name" type="email" class="validate"/>
                  {/* <label for="email">Email</label> */}
               </div>
            </div>
            <div class="row">
               <div class="input-field col s10">
                  <i class="material-icons prefix">mode_edit</i>
                  <textarea id="address" class="materialize-textarea"></textarea>
                  <label for="address">Address</label>
               </div>
            </div>
           
            <div class="row">
               <div class="input-field col s12">
                  <p>
                     
                  <Link to="/Login">
<button id=" menu1" class="Login Button" type="submit" style={{display:"inline",fontFamily:"serif", fontSize:"2rem",border:"none", width:"15rem", height:"3rem",  marginLeft:"25rem", color:"white", backgroundColor:"#ee6e73"}}>Sign Up</button>
</Link> 

                  </p>
                </div>
            </div>
         </form>
      </div>
</div>



     );
}

export default SignUp;