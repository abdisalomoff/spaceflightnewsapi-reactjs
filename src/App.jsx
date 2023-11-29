import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import HomePage from './components/HomePage'
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/article/:articleId' element={<ArticlePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
