import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700 flex items-center gap-3">
          <img src={Logo} className="w-10 h-10" />
          <span className="text-lg font-semibold">Dashboard</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link to="/" className="block p-2 rounded hover:bg-gray-700">
            Home
          </Link>
          <Link to="/users" className="block p-2 rounded hover:bg-gray-700">
            Users
          </Link>
          <Link to="/settings" className="block p-2 rounded hover:bg-gray-700">
            Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button className="w-full bg-red-500 py-2 rounded">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}