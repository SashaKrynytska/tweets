import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './components/Layout/Layout';
const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Tweets = lazy(() => import('./pages/TweetsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} replace={true} />
      </Route>
    </Routes>
  );
};

export default App;