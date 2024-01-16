import "./App.css";
import Product from "./Product";
import User from "./User";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserInfo from "./UserInfo";
import ProductInfo from "./ProductInfo";
function App() {
  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}/>
          <Route path="users" element={<User />}/>
          <Route path="users/:userId" element={<UserInfo />}/>
          <Route path="products/:userId" element={<ProductInfo />}/>
          <Route path="product" element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
