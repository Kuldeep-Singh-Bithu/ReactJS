import Home from "./routes/home/home.componenet";
import {Routes,Route} from 'react-router-dom'; 
import Navigation from "./routes/navigation/navigation.componenet";

const Shop = () => {
  return <h1>I am the Shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='Shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );
};

export default App;
