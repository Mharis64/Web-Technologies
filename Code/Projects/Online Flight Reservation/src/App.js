
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 import { Routes,Route } from 'react-router-dom';
//  import Menu from './menu';
 import Login from './Login';
 import SignUp from './SignUp';
 import Fly from './Fly';
 import Home from './Home';
 import Book from './Book';
  import Experiance from './Experiance';
 import FlightDeals from './FlightDeals';
import NavBar from './NavBar';



function App() {
  return (
   

   <div>
    
    <NavBar/>
   <Home/>
 {/* <Menu/>  */}
 <Routes> 


<Route path='/Login' element={<Login/>}   />
<Route path='/SignUp' element={<SignUp/>}   />
<Route path='/Fly' element={<Fly/>}   />
<Route path='/Home' element={<Home/>}   />
<Route path='/Book' element={<Book/>}   />

<Route path='/Experiance' element={<Experiance/>}   />
<Route path='/FlightDeals' element={<FlightDeals/>}   />






 </Routes> 


 
    </div> 
    
  );
}

export default App;
