import {Routes, Route} from  'react-router-dom'
import Home from "./routes/home/home.component";
import Navigation from './routes/Navigation/Navigation.component';
import Authentication from './routes/Authentication/Authentication.component';
const Shop=()=>{
  return(
    <h1> I'am the shop</h1>
  )
};


const App=()=>{
  

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={ <Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
