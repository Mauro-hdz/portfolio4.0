import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Portfolio from './Components/Portfolio/portfolio';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import AOS from 'aos';

function App() {

  AOS.init();

  return (
    <div className="App">
      <HashRouter >
        <Navbar />
        {/* <Switch> */}
          <Route exact path="/">
            <Home />
            <About />
            <Footer />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio />
            <Contact />
            <Footer />
          </Route>
        {/* </Switch> */}
      </HashRouter>
    </div>
  );
}

export default App;
