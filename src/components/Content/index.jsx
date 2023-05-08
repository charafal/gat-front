import { Routes, Route } from "react-router";
import './test.js'
function Content() {
  return (
    <Routes>
        <Route path="/test" element={<h2>Test</h2>}></Route>
    </Routes>
  );
}

export default Content;
