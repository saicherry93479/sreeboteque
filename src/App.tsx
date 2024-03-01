import "./App.css";
import Home from "./Pages/Home";
import ProductItem from "./Pages/ProductItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ProductList from "./Pages/ProductList";
import AdminPage from "./Pages/AdminPage";

function App() {


  return (
    <>
    <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>

        </Route>
        <Route path="/product" element={<ProductItem></ProductItem>}></Route>
        <Route path="/aboutus" element={<AboutUsPage></AboutUsPage>}></Route>
        <Route path="/contactus" element={<ContactUsPage></ContactUsPage>}></Route>
        <Route path="/productlist" element={<ProductList></ProductList>}></Route>
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      </Routes>
    </BrowserRouter>
     <Footer></Footer>
      <a
        href="https://api.whatsapp.com/send?phone=9515235212&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        className="float h-[30px] w-[30px] p-[25px] text-[30px]  lg:p-[30px]  lg:text-[30px]   "
        target="_blank"
      >
        <i className="fa fa-whatsapp" />
      </a>
    </>
  );
}

export default App;
