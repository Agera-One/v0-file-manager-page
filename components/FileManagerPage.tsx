"use client"

import type React from "react"
import { useState } from "react"
import {
  Search,
  Plus,
  Bell,
  Sun,
  ChevronDown,
  Menu,
  Home,
  ChevronRight,
  MoreVertical,
  Folder,
  Play,
  Music,
  Grid3x3,
} from "lucide-react"

interface MediaCard {
  id: string
  title: string
  icon: React.ReactNode
  iconBg: string
  iconColor: string
  percentUsed: string
  files: number
  size: string
}

interface FolderCard {
  id: string
  name: string
  files: number
  size: string
}

const FileManagerPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const mediaCards: MediaCard[] = [
    {
      id: "1",
      title: "Image",
      icon: <Folder className="w-6 h-6" />,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
      percentUsed: "17% Used",
      files: 245,
      size: "26.40 GB",
    },
    {
      id: "2",
      title: "Videos",
      icon: <Play className="w-6 h-6" />,
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500",
      percentUsed: "22% Used",
      files: 245,
      size: "26.40 GB",
    },
    {
      id: "3",
      title: "Audio",
      icon: <Music className="w-6 h-6" />,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
      percentUsed: "24% Used",
      files: 245,
      size: "26.40 GB",
    },
    {
      id: "4",
      title: "Apps",
      icon: <Grid3x3 className="w-6 h-6" />,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-500",
      percentUsed: "46% Used",
      files: 245,
      size: "26.40 GB",
    },
  ]

  const folders: FolderCard[] = [
    { id: "1", name: "Image", files: 345, size: "26.40 GB" },
    { id: "2", name: "Documents", files: 130, size: "26.40 GB" },
    { id: "3", name: "Apps", files: 130, size: "26.40 GB" },
    { id: "4", name: "Downloads", files: 345, size: "26.40 GB" },
  ]

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:relative lg:translate-x-0 z-50 w-64 h-full bg-slate-800/50 border-r border-slate-700/50 transition-transform duration-300`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 p-6 border-b border-slate-700/50">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white/20 rounded"></div>
            </div>
            <span className="text-xl font-semibold">TailAdmin</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="text-xs text-slate-500 uppercase mb-3">Menu</div>
            <ul className="space-y-1">
              <li>
                <button className="w-full flex items-center justify-between px-3 py-2 text-slate-300 hover:bg-slate-700/50 rounded-lg">
                  <span className="flex items-center gap-3">
                    <Grid3x3 className="w-5 h-5" />
                    Dashboard
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
              <li>
                <button className="w-full flex items-center justify-between px-3 py-2 text-slate-300 hover:bg-slate-700/50 rounded-lg">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    AI Assistant
                  </span>
                  <span className="px-2 py-0.5 bg-blue-500 text-xs rounded text-white">NEW</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center justify-between px-3 py-2 text-slate-300 hover:bg-slate-700/50 rounded-lg">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    E-commerce
                  </span>
                  <span className="px-2 py-0.5 bg-blue-500 text-xs rounded text-white">NEW</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-300 hover:bg-slate-700/50 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Calendar
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-300 hover:bg-slate-700/50 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  User Profile
                </button>
              </li>
              <li>
                <button className="w-full flex items-center justify-between px-3 py-2 text-slate-300 hover:bg-slate-700/50 rounded-lg">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Task
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
              <li>
                <button className="w-full flex items-center justify-between px-3 py-2 text-slate-300 hover:bg-slate-700/50 rounded-lg">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2 2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Forms
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
              <li>
                <button className="w-full flex items-center justify-between px-3 py-2 text-slate-300 hover:bg-slate-700/50 rounded-lg">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Tables
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </li>
              <li>
                <button className="w-full flex items-center justify-between px-3 py-2 text-blue-400 bg-slate-700/50 rounded-lg">
                  <span className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    Pages
                  </span>
                  <ChevronDown className="w-4 h-4 rotate-180" />
                </button>
                <ul className="ml-8 mt-1 space-y-1">
                  <li>
                    <button className="w-full text-left px-3 py-2 text-sm text-blue-400 bg-blue-500/10 rounded-lg">
                      File Manager
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left px-3 py-2 text-sm text-slate-400 hover:bg-slate-700/50 rounded-lg">
                      Pricing Tables
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left px-3 py-2 text-sm text-slate-400 hover:bg-slate-700/50 rounded-lg">
                      Faqs
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left px-3 py-2 text-sm text-slate-400 hover:bg-slate-700/50 rounded-lg flex items-center justify-between">
                      API Keys
                      <span className="px-2 py-0.5 bg-emerald-500 text-xs rounded text-white">NEW</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-slate-800/30 border-b border-slate-700/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 hover:bg-slate-700/50 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search or type command..."
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg pl-10 pr-16 py-2 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-700/50 border border-slate-600/50 rounded text-xs text-slate-400">
                  ⌘K
                </kbd>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-slate-700/50 rounded-lg">
                <Sun className="w-5 h-5 text-slate-400" />
              </button>
              <button className="relative p-2 hover:bg-slate-700/50 rounded-lg">
                <Bell className="w-5 h-5 text-slate-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
              </button>
              <button className="flex items-center gap-2 hover:bg-slate-700/50 rounded-lg px-3 py-2">
                <img src="/user-profile-illustration.png" alt="User" className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium">Musharof</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                <Home className="w-4 h-4" />
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-300">File manager</span>
              </div>
              <h1 className="text-3xl font-bold">File manager</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 space-y-6">
              {/* All Media */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">All Media</h2>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 bg-slate-800/50 border border-slate-700/50 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      <Plus className="w-4 h-4" />
                      Upload File
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mediaCards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5 hover:border-slate-600/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`${card.iconBg} ${card.iconColor} p-3 rounded-lg`}>{card.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                      <p className="text-sm text-slate-400 mb-3">{card.percentUsed}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">{card.files} files</span>
                        <span className="text-slate-300 font-medium">{card.size}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Folders */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">All Folders</h2>
                  <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-300">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {folders.map((folder) => (
                    <div
                      key={folder.id}
                      className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5 hover:border-slate-600/50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <Folder className="w-12 h-12 text-yellow-500" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{folder.name}</h3>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-400">{folder.files} Files</span>
                            <span className="text-slate-300">{folder.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Files */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Recent Files</h2>
                  <button className="text-sm text-slate-400 hover:text-slate-300">View All</button>
                </div>

                <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">File Name</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Category</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Size</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Date Modified</th>
                        <th className="text-left px-6 py-4 text-sm font-medium text-slate-400">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Empty state - add rows as needed */}
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                          No recent files
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Storage Details Sidebar */}
            <div className="xl:col-span-1">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Storage Details</h2>
                  <button className="p-1 hover:bg-slate-700/50 rounded">
                    <MoreVertical className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                <p className="text-sm text-slate-400 mb-8">585 GB Free space left</p>

                {/* Donut Chart */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                    {/* Background circle */}
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#1e293b" strokeWidth="30" />
                    {/* Downloads - Purple */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="30"
                      strokeDasharray="125.6 376.8"
                      strokeDashoffset="0"
                      className="transition-all duration-1000"
                    />
                    {/* Apps - Orange */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="30"
                      strokeDasharray="94.2 408.2"
                      strokeDashoffset="-125.6"
                      className="transition-all duration-1000"
                    />
                    {/* Documents - Yellow */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#eab308"
                      strokeWidth="30"
                      strokeDasharray="75.36 426.84"
                      strokeDashoffset="-219.8"
                      className="transition-all duration-1000"
                    />
                    {/* Media - Green */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="30"
                      strokeDasharray="62.8 439.4"
                      strokeDashoffset="-295.16"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold">Total 135 GB</div>
                    <div className="text-sm text-slate-400">160</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">Downloads</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">Apps</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">Documents</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">Media</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={() => setIsSidebarOpen(false)} />
      )}
    </div>
  )
}

export default FileManagerPage
