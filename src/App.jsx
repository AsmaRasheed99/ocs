import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";



function App() {

  
    return (
      <BrowserRouter>
      <Nav/>
        <Routes>
        <Route index element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    ); 


}

export default App;
