import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Mainbody from './components/Mainbody';
import Gallery from './components/Gallery';
import Posts from './components/Posts';
import Subscribe from './components/Subscribe';
import NotFound from './components/NotFound';


import Login from './components/Login';

function App() {
  return (
    <Container className='bg-subtle'>
      <Router>
        <Header />          
          <Routes>
            <Route path='/' element= {<Login />} />
            <Route path='/home' element= {<Mainbody />} />
            <Route path='/gallery' element= {<Gallery />} />
            <Route path='/posts' element= {<Posts />} />
            <Route path='/subscribe' element= {<Subscribe />} />
            <Route path='*' element= {<NotFound />} />
          </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
