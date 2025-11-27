import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout';
import { DashboardLayout } from './components/layouts/DashboardLayout';
import { useUserStore } from './stores/userStore';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { ObjectiveI1 } from './pages/ObjectiveI1';

import { ObjectiveI2 } from './pages/ObjectiveI2';
import { ObjectiveI3 } from './pages/ObjectiveI3';
import { ObjectiveII1 } from './pages/ObjectiveII1';

function App() {
  const { userId } = useUserStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={userId ? <Navigate to="/dashboard" /> : <Home />} />
        </Route>

        <Route element={userId ? <DashboardLayout /> : <Navigate to="/" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/objective/i1" element={<ObjectiveI1 />} />
          <Route path="/objective/i2" element={<ObjectiveI2 />} />
          <Route path="/objective/i3" element={<ObjectiveI3 />} />
          <Route path="/objective/ii1" element={<ObjectiveII1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
