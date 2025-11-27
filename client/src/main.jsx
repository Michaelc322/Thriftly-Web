import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import Terms from "./Pages/Terms.jsx";
import ResetPassword from "./Pages/ResetPassword.jsx";
import AdminLogin from "./Pages/AdminLogin.jsx";
import AdminCreateAccount from "./Pages/AdminCreateAccount.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";

import { Navigate, Outlet } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import BusinessDashboard from "./Pages/BusinessSuite/BusinessDashboard.jsx";
const PrivateRoutes = () => {
  const { admin } = useAuth();
  return admin ? <Outlet /> : <Navigate to="/admin/login" />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<Terms />} />
      <Route path="/*" element={<Home />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      {/* <Route element={<PrivateRoutes />}>
        <Route path="/admin/create-account" element={<AdminCreateAccount />} />
      </Route> */}
      <Route path="/admin/create-account" element={<AdminCreateAccount />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      <Route path="/business-suite/dashboard" element={<BusinessDashboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
