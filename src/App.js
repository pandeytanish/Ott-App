import './App.css';
import Home from './Components/Home/Home';
import BannerFirst from './Components/Banners/BannerFirst';
import BannerFourth from './Components/Banners/BannerFourth';
import BannerSecond from './Components/Banners/BannerSecond';
import BannerThird from './Components/Banners/BannerThird';
import Questions from './Components/Questions/Questions';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <Home/>
   <BannerFirst/>
   <BannerSecond/>
   <BannerThird/>
   <BannerFourth/>
   <Questions/>
   <Footer/>
    </div>
  );
}
export default App;
