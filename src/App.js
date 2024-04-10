import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import LoginPage from './Components/Login/LoginPage';
import ContentBanner from './Components/Content/ContentBanner';




function App() {
  return (
  <>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route exact path='Login' element={<LoginPage/>} />
    <Route exact path='Main' element={<ContentBanner/>} />
   </Routes>
  </>
  );
}
export default App;
