import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import CardItems from './Components/CardItems/CardItems';
import ClientsComponent from './Components/ClientsComponent/ClientsComponent';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import HomePageHero from './Components/HomePageHero/HomePageHero';
import NavBar from './Components/Nav/NavBar';
import SectionBreaker from './Components/SectionBreaker/SectionBreaker';
import StepCards from './Components/StepCards/StepCards';
import Title from './Components/Title/Title';

function App() {
  return (
    <>  
      <Router>
        <NavBar/>
      </Router>
    <HomePageHero/>
    <Title/>
    <StepCards/>
    <SectionBreaker/>
    <ClientsComponent/>
    <SectionBreaker/>
    <CardItems/>
    <SectionBreaker/>
    <ContactUs/>
    <Footer/>

    </>
  );
}

export default App;
