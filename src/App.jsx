import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/* COMPONENTS */
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';

/* PAGES */
import HomePage from './pages/HomePage';
import BestCommerceClasses from './pages/blog/BestCommerceClasses';
import Score100Accounts from './pages/blog/Score100Accounts';
import WeeklyTestsImportance from './pages/blog/WeeklyTestsImportance';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has visited before using sessionStorage
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      {/* GLOBAL SEO - Schema and Meta tags remain same as yours */}
      <Helmet>
        {/* ... (आपके बाकी के SEO टैग्स यहाँ रहेंगे) ... */}
      </Helmet>

      <div className="min-h-screen flex flex-col bg-[#061547] text-white overflow-hidden">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/best-commerce-classes-ahmedabad" element={<BestCommerceClasses />} />
            <Route path="/blog/how-to-score-100-in-accounts" element={<Score100Accounts />} />
            <Route path="/blog/importance-of-weekly-tests" element={<WeeklyTestsImportance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;