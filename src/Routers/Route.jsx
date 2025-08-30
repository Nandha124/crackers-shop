// import React from 'react'
// import CrackersTable from './pages/CrackersTable'
// import Home from './pages/Home'
// import Header from './Components/Header'
// // import Footer from './Components/Footer'

// const App = () => {
//   return (
//     <div className='overflow-x-hidden '>
//   {/* <CrackersTable/> */}
//  <Route
//       {/* <Footer/> */}
//     </div>
//   )
// }

// export default App





import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Pages
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import CrackersTable from "../pages/CrackersTable";
import Contact from "../pages/Contact";
import WhatsAppButton from "../Components/Whatsapp";
import Detail from "../pages/Details";
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Redirect root → home */}
            <Route path="/" element={<Navigate to="/pages/home" replace />} />
            <Route path="/pages/home" element={<Home />} />
            <Route path="/pages/blog" element={<Blog />} />
            <Route path="/pages/CrackersTable" element={<CrackersTable />} />
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="/pages/detail" element={<Detail />} />
          </Routes>
        </main>
        <WhatsAppButton/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
