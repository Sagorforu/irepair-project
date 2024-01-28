import { cn } from "@/lib/utils";
import { CopyPlus, LayoutDashboard, LayoutList } from "lucide-react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto p-3 lg:p-5">
      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "p-4 bg-gray rounded-md transition-all flex items-center gap-2",
              { " bg-dark-gray text-white ": isActive }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "p-4 bg-gray rounded-md transition-all flex items-center gap-2",
              { " bg-dark-gray text-white ": isActive }
            )
          }
        >
          <CopyPlus className="shrink-0" />
          <span className="truncate">Add Service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "p-4 bg-gray rounded-md transition-all flex items-center gap-2",
              { " bg-dark-gray text-white ": isActive }
            )
          }
        >
          <LayoutList className="shrink-0" />
          <span className="truncate">Service List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
