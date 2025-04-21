import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';
import Gallery from './components/Gallery';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FestivalDetail from './pages/festival';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Search />
        <Gallery />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/festival/:id" element={<FestivalDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;