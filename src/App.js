import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ListBusiness from "./pages/ListBusiness";

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ListBusiness />} />
        {/* <Route path="/detail" element={<DetailBusiness />} /> */}
      </Routes>
    </Suspense>
  </Router>
);

export default App;
