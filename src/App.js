import './App.css';
import User from './User'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}>
          <Route path="users" element={<User />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;