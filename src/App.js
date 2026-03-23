import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Flex column container so footer sticks to bottom */}
      <div className="app-container d-flex flex-column min-vh-100">
        
        <header className="App-header p-3 bg-dark text-light text-center">
          <h2>Welcome to X-Gaming where you get to be you</h2>
        </header>

        <nav className='p-2 bg-secondary text-center'>
          <Link to="/" className='btn btn-primary btn-sm m-2'> Home </Link>
          <Link to="/addproducts" className='btn btn-success btn-sm m-2'> Add Products </Link>
          <Link to="/signin" className='btn btn-info btn-sm m-2'> Signin </Link>
          <Link to="/signup" className='btn btn-danger btn-sm m-2'> Signup </Link>
        </nav>

        {/* Main content grows to push footer down */}
        <div className="content-wrap flex-grow-1">
          <Routes>
            <Route path='/' element={<Getproducts/>}/>
            <Route path='/addproducts' element={<Addproducts/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/makepayment' element={<Makepayment/>}/>
            <Route path='*' element={<Notfound/>}/> 
          </Routes>
        </div>

        {/* Footer appears on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;