import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import ForgotPass from "./views/ForgotPass/forgot_pass";
import FPassSuccess from "./views/FPassSuccess/FPassSuccess";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="/reset-password-success" element={<FPassSuccess />} />
            {/* Add other routes here if necessary */}
          </Routes>
        </header>
        <ToastContainer
          position="bottom-center"
          autoClose={800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </Router>
  );
}

export default App;
