import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Header from './elements/Header.jsx'
import Home from './pages/Home.jsx'
import Landing from './pages/Landing.jsx'
import BookDetails from './pages/BookDetails.jsx'
import AddBook from './pages/AddBook.jsx'
import AuthContext from './store/authContext';
import { useContext } from 'react';

function App() {
  const {userId} = useContext(AuthContext)
  console.log(userId)
  return (
    <div >
      <Header/>
      <Routes>
        <Route index element={userId ? <Navigate to='/home'/> : <Landing/>}/>
        <Route path='/home' element={userId ? <Home/> : <Navigate to='/'/>}/>
        <Route path='/addBook' element={userId ? <AddBook/> : <Navigate to='/'/>}/>
        <Route path='/details/:bookId' element={userId ? <BookDetails/> : <Navigate to='/'/>}/>
      </Routes>
    </div>
  );
}

export default App;
