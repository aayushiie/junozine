import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Issues from './components/Issues';
import Contact from './components/Contact';
import Masthead from './components/Masthead';
import Submission from './components/Submission';
import MastheadProfile from './components/MastheadProfile';
import Cursor from './components/Cursor';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Page wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

// Animated routes component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/issues" element={<PageWrapper><Issues /></PageWrapper>} />
        <Route path="/masthead" element={<PageWrapper><Masthead /></PageWrapper>} />
        <Route path="/masthead/:slug" element={<PageWrapper><MastheadProfile /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/submissionguidelines" element={<PageWrapper><Submission /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Cursor />
    </BrowserRouter>
  );
}
