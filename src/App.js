import React, {useEffect, useState} from "react";
import Navbar from "./Components/NavBar";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import "./Style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          updateLoad(false);
      }, 1200);

      return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
          <div className="App" id={load ? "no-scroll" : "scroll"}>
              <Navbar/>
              {/*<Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/projects" element={<Projects/>}/>
                  <Route path="/resume" element={<Resume/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/about" element={<About/>}/>
              </Routes>*/}
          </div>
      </Router>
  );
}

export default App;