import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Register from "./components/Register";
import LoanReq from "./components/LoanReq";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/register" element={<Register></Register>}/>
          <Route exact path="/loanrequest" element={<LoanReq/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;