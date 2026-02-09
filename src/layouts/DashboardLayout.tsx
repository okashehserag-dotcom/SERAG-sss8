import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../state/auth";

export function DashboardLayout() {
  const { logout, user } = useAuth();

  return (
    <div className="appShell">
      <aside className="sidebar">
        <h2>Seraj</h2>

        <NavLink to="/app/timer">Timer</NavLink>

        <button className="btn" onClick={logout}>
          Logout
        </button>

        <div style={{ fontSize: 12, marginTop: 10 }}>
          {user?.email}
        </div>
      </aside>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

