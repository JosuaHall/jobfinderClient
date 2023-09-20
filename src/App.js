import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import StartPage from "./components/StartPage";
import UploadResumee from "./components/UploadResumee";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/upload-resumee" element={<UploadResumee />} />
          <Route path="" element={<StartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
