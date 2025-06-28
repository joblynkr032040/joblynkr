import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import HomePage from './components/pages/HomePage';
import PricingPage from './components/pages/PricingPage';
import BlogPage from './components/pages/BlogPage';
import NotFound from './components/pages/NotFound';
import SupportPage from './components/pages/SupportPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="connect" element={<SupportPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
