import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

/* COMPONENTS */
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Footer from './components/Footer';

/* PAGES */
import HomePage from './pages/HomePage';

/* BLOG PAGES */
import BestCommerceClasses from './pages/blog/BestCommerceClasses';
import Score100Accounts from './pages/blog/Score100Accounts';
import WeeklyTestsImportance from './pages/blog/WeeklyTestsImportance';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setIsLoading(false);

    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  /* LOADING SCREEN */
  if (isLoading) {

    return <LoadingScreen />;

  }

  return (

    <Router>

      {/* GLOBAL SEO */}
      <Helmet>

        <title>
          Dattu Sir's Commerce Academy | Best Commerce Classes In Ahmedabad
        </title>

        <meta
          name="description"
          content="
          Dattu Sir's Commerce Academy Ahmedabad provides expert coaching for
          Class 11 & 12 Commerce students. Trusted since 2003 for Accounts,
          Statistics, Economics & Board Exam Preparation in Maninagar Ahmedabad.
          "
        />

        <meta
          name="keywords"
          content="
          Commerce Classes Ahmedabad,
          Best Commerce Coaching Ahmedabad,
          Class 11 Commerce Coaching,
          Class 12 Commerce Coaching,
          Accounts Coaching Ahmedabad,
          Statistics Coaching Ahmedabad,
          Economics Tuition Ahmedabad,
          Commerce Tuition Maninagar,
          Dattu Sir Commerce Academy,
          Board Exam Coaching Ahmedabad
          "
        />

        <meta
          name="author"
          content="Dattu Sir's Commerce Academy"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="theme-color"
          content="#061547"
        />

        <link
          rel="canonical"
          href="https://dattusiracademy.com/"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Dattu Sir's Commerce Academy"
        />

        <meta
          property="og:description"
          content="
          Premium Commerce Coaching For Class 11 & 12 Students
          In Ahmedabad Since 2003.
          "
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://dattusiracademy.com/"
        />

        <meta
          property="og:image"
          content="https://dattusiracademy.com/logo.png"
        />

        {/* TWITTER */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Dattu Sir's Commerce Academy"
        />

        <meta
          name="twitter:description"
          content="
          Best Commerce Coaching Classes In Ahmedabad
          For Class 11 & 12 Students.
          "
        />

        <meta
          name="twitter:image"
          content="https://dattusiracademy.com/logo.png"
        />

        {/* FAVICON */}
        <link
          rel="icon"
          type="image/png"
          href="/logo.png"
        />

        {/* FONTS */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* STRUCTURED DATA */}
        <script type="application/ld+json">

          {JSON.stringify({

            "@context": "https://schema.org",

            "@type": "EducationalOrganization",

            name: "Dattu Sir's Commerce Academy",

            url: "https://dattusiracademy.com/",

            logo: "https://dattusiracademy.com/logo.png",

            image: "https://dattusiracademy.com/logo.png",

            telephone: "+91 98252 49281",

            description:
              "Trusted Commerce Coaching Academy in Ahmedabad since 2003 for Class 11 & 12 students.",

            address: {

              "@type": "PostalAddress",

              streetAddress:
                "3rd Floor, Purushottam Mahal, Beside Swaminarayan Clock Tower, Near Jayhind Char Rasta",

              addressLocality: "Maninagar",

              addressRegion: "Ahmedabad",

              postalCode: "380008",

              addressCountry: "IN",

            },

            areaServed: "Ahmedabad",

          })}

        </script>

      </Helmet>

      {/* MAIN APP */}
      <div
        className="
        min-h-screen
        flex
        flex-col
        bg-[#061547]
        text-white
        overflow-hidden
        "
      >

        {/* HEADER */}
        <Header />

        {/* ROUTES */}
        <main className="flex-1">

          <Routes>

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/blog/best-commerce-classes-ahmedabad"
              element={<BestCommerceClasses />}
            />

            <Route
              path="/blog/how-to-score-100-in-accounts"
              element={<Score100Accounts />}
            />

            <Route
              path="/blog/importance-of-weekly-tests"
              element={<WeeklyTestsImportance />}
            />

          </Routes>

        </main>

        {/* FOOTER */}
        <Footer />

      </div>

    </Router>

  );

}

export default App;