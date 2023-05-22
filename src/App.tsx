
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ContinentPage from './Pages/ContinentPage';

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/continent/:code" element={<ContinentPage/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
