import React from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';

import Layout from './layout/Layout';
// import * as Pages from './page';
import Home from './page/Home';
import NotFound from './page/404';

const Contact = React.lazy(() => import('./page/Contact'));
const Profile = React.lazy(() => import('./page/Profile'));
const Login = React.lazy(() => import('./page/login'));
const Invoices = React.lazy(() => import('./page/invoice/Invoices'));
const InvoiceDetail = React.lazy(() => import('./page/invoice/InvoiceDetail'));
const Expenses = React.lazy(() => import('./page/Expenses'));

const App = () => {
  // const loc = useLocation();
  // console.log('location: ', loc);

  // const params = useParams();
  // console.log('params: ', params);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index */}
          <Route index element={<Home />} />

          {/* Info  */}
          <Route
            path="login"
            element={
              <React.Suspense fallback={<>...</>}>
                <Login />
              </React.Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <React.Suspense fallback={<>...</>}>
                <Contact />
              </React.Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <React.Suspense fallback={<>...</>}>
                <Profile />
              </React.Suspense>
            }
          />

          {/* Business Pages */}
          <Route
            path="invoices"
            element={
              <React.Suspense fallback={<>...</>}>
                <Invoices />
              </React.Suspense>
            }
          >
            <Route
              path=":invoiceId"
              element={
                <React.Suspense fallback={<>...</>}>
                  <InvoiceDetail />
                </React.Suspense>
              }
            />
          </Route>
          <Route
            path="expenses"
            element={
              <React.Suspense fallback={<>...</>}>
                <Expenses />
              </React.Suspense>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
