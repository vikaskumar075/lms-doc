import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Overview from "./pages/Overview";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          {/* <Route path="/overview" exact element={<Overview  name={"overview"}/>} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
