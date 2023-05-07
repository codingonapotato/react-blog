/**
 * @note import all the routes for navigating to different pages
 */
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // named imports from react-router-dom module

// Entry-point
function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <h1> My Awesome Blog</h1>
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/articles" element={<ArticlesListPage/>} />
          <Route path="/articles/:articleId" element={<ArticlePage/>} /> {/** :articleId is a URL parameter*/}
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
