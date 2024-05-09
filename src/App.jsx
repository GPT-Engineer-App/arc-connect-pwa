import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostQueries from './pages/PostQueries.jsx';
import AnalyzeDWG from './pages/AnalyzeDWG.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/post-queries" element={<PostQueries />} />
        <Route path="/analyze-dwg" element={<AnalyzeDWG />} />
      </Routes>
    </Router>
  );
}

export default App;
