import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { Layout } from './layout/layout';
import { Provider } from './Provider';
import { Landing } from './pages/Landing/Landing';

// =================
// Base
// =================

import './App.css';


function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Provider>
          <Layout>
            <Routes>
              <Route path='/' element={<Landing></Landing>}></Route>
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;

