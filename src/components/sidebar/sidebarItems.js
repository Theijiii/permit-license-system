import { LayoutDashboard, Settings, Users, FileText } from 'lucide-react'

const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "module1",
    label: "Module1",
    icon: LayoutDashboard,
    subItems: [
      {
        id: "submodule1",
        label: "Submodule 1",
        path: "/module1/submodule1"
      },
      {
        id: "submodule2",
        label: "Submodule 2",
        path: "/module1/submodule2"
      },
      {
        id: "submodule3",
        label: "Submodule 3",
        path: "/module1/submodule3"
      }
    ]
  },
  {
    id: "module2",
    label: "Module2",
    icon: LayoutDashboard,
    path: "/module2"
  },

  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    subItems: [
      {
        id: "general-settings",
        label: "General",
        path: "/settings/general"
      },
      {
        id: "security-settings",
        label: "Security",
        path: "/settings/security"
      }
    ]
  }
]

export default sidebarItems