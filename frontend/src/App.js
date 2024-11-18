import Navigation from './components/Header/Navbar/navbar2';
import Custombar from './components/Header/Custombar/custombar';
import Footer from './components/Footer/footer';
import Carousel1 from './components/Body/Carousel/carousel';
import Cards1 from './components/Body/Cards/cards';
import GradientBar from './components/Body/Bar/bar';
import Underbar from './components/Header/Underbar/underbar';
import Sale from './components/Body/Sale/sale';


        
function App() {
  return (
    <>
      <Navigation />,

      <Custombar />,

      <Underbar />,
      <GradientBar/>,

      <Carousel1 />,
      <Cards1 />,
      <Sale />,
      <Footer />
    </>
  );
}

export default App;
