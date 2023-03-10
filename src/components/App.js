/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom';

import Categories from '../routes/Categories';
import Books from '../routes/Books';
import NotMatch from '../routes/NotMatch';
import Navbar from './Navbar';

import '../styles/App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
