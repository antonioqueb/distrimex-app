import React from 'react';
import DasboardSidebar from '@/components/component/dasboard-sidebar' // Asegúrate de que la ruta sea correcta
import DashboardNabvar from '@/components/component/dashboard-nabvar'

const LayoutDashboard = ({ children }) => {
  return (
    <div className="flex">
      <DasboardSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardNabvar className="sticky top-0 w-full z-50" />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

export default LayoutDashboard;
