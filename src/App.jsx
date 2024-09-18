import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Expert from './Expert.jsx';
import Learner from './Learner.jsx';
import SignUp from './SignUp.jsx';
import Page2 from './pages/page2/Page2.jsx';
import Page3 from './pages/page3/Page3.jsx';
import Page4 from './pages/page4/Page4.jsx';

const App = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/expert">For Expert</Link>
            </li>
            <li>
              <Link to="/learner">For Learner</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<Page2 />} /> */}
          {/* <Route path="/" element={<Page3/>} /> */}
          <Route path="/" element={<Page4/>} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/learner" element={<Learner />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
