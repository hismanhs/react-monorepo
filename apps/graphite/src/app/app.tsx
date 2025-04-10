import * as React from 'react';
import NxWelcome from './nx-welcome';
import '@salt-ds/theme/index.css';
import { Link, Route, Routes } from 'react-router-dom';
const AnalyticsApi = React.lazy(() => import('analyticsApi/Module'));
const ReferenceData = React.lazy(() => import('referenceData/Module'));
import { getPostsSuccess, postsSelector } from './analitic';
import { useSelector, useDispatch } from 'react-redux';
export function App() {
  const disptch = useDispatch();
  const { posts, loading } = useSelector(postsSelector);

  const handleAdd = () => {
    disptch(
      getPostsSuccess([
        { name: 'hisman', id: 1 },
        { name: 'oneMore', id: 2 },
      ])
    );
  };
  const handleClear = () => {
    localStorage.clear();
  };
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
      {JSON.stringify(posts)}
      {loading}
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear</button>

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
