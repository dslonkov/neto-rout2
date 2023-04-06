import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import './App.css';
import Posts from './Components/Posts';
import New from './Components/New';

function App() {
  return (
    <Router>
      <div className="main">
        <>
          <Routes>
            <Route path="/" exact element={<Posts />}/>
            <Route path="/posts/new" element={<New />}/>
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
