import { createBrowserRouter, Navigate } from "react-router-dom";
import { RequireAuth } from "../components/RequireAuth";
import { DashboardLayout } from "../layouts/DashboardLayout";

import { Login } from "../pages/Login";
import { TimerPage } from "../pages/Timer";
import { DashboardHome } from "../pages/DashboardHome";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/app/timer" /> },
  { path: "/login", element: <Login /> },

  {
    path: "/app",
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "timer", element: <TimerPage /> },
    ],
  },
]);

