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


import Router from "./Routers/Route"
// Pages

const App = () => {
  return (
    <div className="overflow-x-hidden scrollbar-none">
      <Router />
    </div>
 
  );
};

export default App;
