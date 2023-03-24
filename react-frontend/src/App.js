import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListClientComponent from './components/ListClientComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateClientComponent from './components/CreateClientComponent';
import UpdateClientComponent from './components/UpdateClientComponent';
import ViewClientComponent from './components/ViewClientComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <Routes>
          <Route path="/" element={<ListClientComponent />} />
          <Route path="/clients" element={<ListClientComponent />} />
          <Route path="/add-client" element={<CreateClientComponent/>} />
          <Route path="/update-client/:id" element={<UpdateClientComponent/>} />
          <Route path="/view-client/:id" element={<ViewClientComponent/>} />
        </Routes>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
