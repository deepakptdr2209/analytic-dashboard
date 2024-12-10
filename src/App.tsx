import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store/store';
import DashboardLayout from './components/layout/DashboardLayout';
import UsersPage from './pages/UsersPage';
import AnalyticsPage from './pages/AnalyticsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route element={<DashboardLayout />}>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;