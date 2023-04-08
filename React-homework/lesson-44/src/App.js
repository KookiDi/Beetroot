import React from 'react';
import './App.css';
import Header from './Header.js';
import './Header.css';
import Banner from './Banner.js';
import './Banner.css';
import Blog from './Blog.js';
import './Blog.css';
import News from "./News";
import './News.css';

function App() {
  return (
      <div className="App">
            <Header />
            <Banner />
          <div className="holder">
            <Blog />
            <News />
          </div>
      </div>
  );
}





export default App;
