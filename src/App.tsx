
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ContinentPage from './Pages/ContinentPage';
import CountryPage from './Pages/CountryPage';

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/continent/:code" element={<ContinentPage/>}/>
      <Route path="/country/:code" element={<CountryPage/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
