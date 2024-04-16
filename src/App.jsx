// import React from 'react'
// import UserPage from './Container/UserPage'
// import { BrowserRouter ,Routes,Route,Redirect} from 'react-router-dom'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/username" element={<UserPage/>}/> */}
//         {/* <Route path="/username" element={<UserPage />} /> */}
//         <Route path="/:userName" element={<UserPage />} />
//         <Redirect to={"/khushiagrwal"}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// import React from 'react';
// import UserPage from './Container/UserPage';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// function App() {
//   return (
    // <BrowserRouter>
      {/* <Routes> */}
        {/* <Route path="/:userName" element={<UserPage />} />
        <Route path="*" element={<Navigate to="/khushiagrwal" />} /> */}
        <UserPage/>
      {/* </Routes> */}
//     </BrowserRouter>
//   );
// }

// export default App;






import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserPage from "./Container/UserPage";

import "./App.css";

function App() {
  const username = prompt("Enter Github Username");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:userName" element={<UserPage />} />
        <Route path="*" element={<Navigate to={`/${username}`} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

