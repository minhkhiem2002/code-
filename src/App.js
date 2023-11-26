// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Page/Sidebar';
import Page1 from './components/Page/Page1';
import Login from "./components/Login/Login";
import Pages from './components/Page/Pages';

const App = () => {
  return (
    // <div style={{ display: 'flex' }}>
    //   <Sidebar />
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route
    //       path="/"
    //       element={
    //         <Content>
    //           <Pages/>
    //         </Content>
    //       }
    //     />
    //     <Route
    //       path="/page1"
    //       element={
    //         <Content>
    //           <Page1 />
    //         </Content>
    //       }
    //     />
    //     <Route
    //       path="/page2"
    //       element={
    //         <Content>
    //           <Page2 />
    //         </Content>
    //       }
    //     />
    //     <Route
    //       path="/page3"
    //       element={
    //         <Content>
    //           <Page3 />
    //         </Content>
    //       }
    //     />
    //   </Routes>
    // </div>
    <Routes>
      <Route path = "/" element = {<Pages/>}/>
      <Route path="/login" element={<Login />} />
      <Route path = "/network-devices" element = {<Page1/>}/>
    </Routes>
  );
};

export default App;
