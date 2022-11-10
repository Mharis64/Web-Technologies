import { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
function Menu1() {
    
    const [menuItem,setItem]=useState(

        [

            {id:1,name:"Pizza",size:"mediam",price:"950/-" },
            {id:2,name:"Burger",size:"Large",price:"450/-" },
            {id:3,name:"Shwarma",size:"Mediam",price:"250/-" },
            {id:4,name:"French Fries",size:"150gm",price:"150/-" },
        ]
    )


    
    
   
    const add=(number)=>{
              setItem( 
                 menuItem.filter(
                    
                    (sr)=>(sr.id!==number))
                 )

    }
    
    
    return (

        <div>
          

            {
                menuItem.map((rf)=>
                (

                    <div  id="item">

                       <h3>
                        {rf.name}
                       </h3>

                       <h4>
                        {rf.price}
                       </h4>

                       <h4>
                        {rf.size}
                       </h4>

                       <div>
                         <Link to="/order">

                            <button class ="btn btn-primary" onClick={(sr)=>add(rf.id)}>
                            Order Send
                        </button>
                         </Link>
                        
                        
                        </div>

                    </div>

                )
                )
            }


        </div>

      );
}

export default Menu1;