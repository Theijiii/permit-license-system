import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/sidebar/sidebar'
import Dashboard from './pages/Dashboard'
import GeneralSettings from './pages/settings/General'
import SecuritySettings from './pages/settings/Security'
import Header from './components/header/Header'
import sidebarItems from './components/sidebar/sidebarItems'
import Module2 from './pages/Module2'
import Submodule1 from './pages/module1/Submodule1'
import Submodule2 from './pages/module1/Submodule2'
import Submodule3 from './pages/module1/Submodule3'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const location = useLocation()

  // Helper to find breadcrumb path from sidebarItems
  function getBreadcrumb() {
    for (const item of sidebarItems) {
      if (item.path === location.pathname) return [item.label]
      if (item.subItems) {
        const sub = item.subItems.find(sub => sub.path === location.pathname)
        if (sub) return [item.label, sub.label]
      }
    }
    return ['Dashboard']
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 transition-colors duration-200">
      <div className='flex h-screen overflow-hidden'>
        <Sidebar collapsed={sidebarCollapsed} />
        <div className='flex-1 flex flex-col'>
          <Header
            sidebarCollapsed={sidebarCollapsed}
            onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
            breadcrumb={getBreadcrumb()}
          />
          <main className="flex-1 overflow-auto p-8 dark:bg-slate-800">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/module1/submodule1" element={<Submodule1 />} />
              <Route path="/module1/submodule2" element={<Submodule2 />} />
              <Route path="/module1/submodule3" element={<Submodule3 />} />
              <Route path="/module2" element={<Module2 />} />
              <Route path="/settings/general" element={<GeneralSettings />} />
              <Route path="/settings/security" element={<SecuritySettings />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App