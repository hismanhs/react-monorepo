import * as React from 'react';
import NxWelcome from './nx-welcome';
import '@salt-ds/theme/index.css';
import { Link, Route, Routes } from 'react-router-dom';
const AnalyticsApi = React.lazy(() => import('analyticsApi/Module'));
const ReferenceData = React.lazy(() => import('referenceData/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/analyticsApi">AnalyticsApi</Link>
        </li>
        <li>
          <Link to="/referenceData">ReferenceData</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<NxWelcome title="@react-monorepo/graphite" />}
        />
        <Route path="/analyticsApi" element={<AnalyticsApi />} />
        <Route path="/referenceData" element={<ReferenceData />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
