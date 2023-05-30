import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './elements/Header.jsx'
import Home from './pages/Home.jsx'
import Landing from './pages/Landing.jsx'
import BookDetails from './pages/BookDetails.jsx'
import AddBook from './pages/AddBook.jsx'

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route index element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/addBook' element={<AddBook/>}/>
        <Route path='/details/:bookId' element={<BookDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
