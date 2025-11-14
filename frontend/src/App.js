import React from "react";
import { Routes, Route } from "react-router-dom";

// Компоненты 
import WelcomeSection from './components/WelcomeSection';
import Layout from "./components/Layout";
import PoseGallery from "./components/PoseGallery";
import HomePage from "./components/pages/HomePage";
import AsanasPage from "./components/pages/AsanasPage";
import MeditationPage from "./components/pages/MeditationPage";
import ContactsPage from "./components/pages/ContactsPage";

import "./App.css";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/asanas" element={<AsanasPage />} />
        <Route path="/meditation" element={<MeditationPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>

      {/* Кнопка для демонстрации ответа от Django */}
      <WelcomeSection />

      <PoseGallery />
    </Layout>
  );
}

export default App;