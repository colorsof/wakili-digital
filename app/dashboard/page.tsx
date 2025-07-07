'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Globe, 
  Users, 
  Calendar,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  ExternalLink,
  Edit3,
  Eye
} from 'lucide-react'

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  // Mock data - will be replaced with Supabase data
  const organization = {
    name: 'Wanjiru & Associates',
    plan: 'standard',
    subdomain: 'wanjiru',
    siteUrl: 'https://wanjiru.wakili.digital'
  }

  const stats = {
    totalBookings: 24,
    monthlyVisitors: 156,
    activeClients: 12,
    revenue: 'KES 5,000'
  }

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, current: true },
    { name: 'My Website', href: '/dashboard/website', icon: Globe, current: false },
    { name: 'Bookings', href: '/dashboard/bookings', icon: Calendar, current: false },
    { name: 'Clients', href: '/dashboard/clients', icon: Users, current: false },
    { name: 'Billing', href: '/dashboard/billing', icon: CreditCard, current: false },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings, current: false },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              onClick={() => setSidebarOpen(false)}
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <h1 className="text-xl font-bold text-blue-900">Wakili Digital</h1>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="mr-4 h-6 w-6" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <p className="text-sm font-medium text-gray-700">{organization.name}</p>
                  <p className="text-xs text-gray-500">{organization.plan} plan</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-xl font-bold text-blue-900">Wakili Digital</h1>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex-shrink-0 w-full group block">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">{organization.name}</p>
                  <p className="text-xs text-gray-500">{organization.plan} plan</p>
                </div>
                <button className="text-gray-400 hover:text-gray-500">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button
            onClick={() => setSidebarOpen(true)}
            className="mr-1 flex items-center justify-center h-10 w-10 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>

            {/* Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Bookings</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.totalBookings}</dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">Monthly Visitors</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.monthlyVisitors}</dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">Active Clients</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.activeClients}</dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">Monthly Revenue</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.revenue}</dd>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                  <h3 className="text-base font-medium text-gray-900 mb-2">Your Website</h3>
                  <p className="text-sm text-gray-500 mb-4">View and edit your live website</p>
                  <div className="flex space-x-3">
                    <a
                      href={organization.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View Site
                    </a>
                    <Link
                      href="/dashboard/website/edit"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
                    >
                      <Edit3 className="h-4 w-4 mr-1" />
                      Edit Site
                    </Link>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                  <h3 className="text-base font-medium text-gray-900 mb-2">Recent Bookings</h3>
                  <p className="text-sm text-gray-500 mb-4">You have 3 new booking requests</p>
                  <Link
                    href="/dashboard/bookings"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
                  >
                    View Bookings
                  </Link>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg p-6">
                  <h3 className="text-base font-medium text-gray-900 mb-2">Upgrade Your Plan</h3>
                  <p className="text-sm text-gray-500 mb-4">Get more features with Premium</p>
                  <Link
                    href="/dashboard/billing"
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    View Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}