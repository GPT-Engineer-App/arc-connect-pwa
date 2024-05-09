import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostQueries from './pages/PostQueries.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/post-queries" element={<PostQueries />} />
      </Routes>
    </Router>
  );
}

export default App;
