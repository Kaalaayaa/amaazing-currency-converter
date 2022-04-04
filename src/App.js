import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Converter from "./Components/Converter"
import History from './Components/History';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/history" element={<History />}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
