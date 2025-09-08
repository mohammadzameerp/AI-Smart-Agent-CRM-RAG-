'use client'

import { useState } from 'react'
import { useAuth } from '@/components/providers'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Bot, BarChart3, Users, Target, DollarSign, Calendar, MessageSquare, LogOut, Code, Bell } from 'lucide-react'
import { AmmarChat } from '@/components/ammar-chat'
import { BusinessDashboard } from '@/components/business-dashboard'
import { TeamDashboard } from '@/components/team-dashboard'
import { LeadManagement } from '@/components/lead-management'
import { ProductBuilder } from '@/components/product-builder'
import { FinancialTracker } from '@/components/financial-tracker'

export function Dashboard() {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('chat')

  const adminMenuItems = [
    { id: 'chat', label: 'Chat with Ammar', icon: MessageSquare },
    { id: 'business', label: 'Business Dashboard', icon: BarChart3 },
    { id: 'team', label: 'Team Management', icon: Users },
    { id: 'leads', label: 'Lead Management', icon: Target },
    { id: 'financial', label: 'Financial Tracker', icon: DollarSign },
    { id: 'builder', label: 'Product Builder', icon: Code },
    { id: 'alerts', label: 'Alerts & Reminders', icon: Bell },
  ]

  const teamMenuItems = [
    { id: 'chat', label: 'Chat with Ammar', icon: MessageSquare },
    { id: 'personal', label: 'My Dashboard', icon: BarChart3 },
    { id: 'leads', label: 'My Leads', icon: Target },
    { id: 'builder', label: 'Product Builder', icon: Code },
    { id: 'journal', label: 'Work Journal', icon: Calendar },
  ]

  const menuItems = user?.role === 'admin' ? adminMenuItems : teamMenuItems

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return <AmmarChat />
      case 'business':
        return <BusinessDashboard />
      case 'team':
        return <TeamDashboard />
      case 'personal':
        return <TeamDashboard personal />
      case 'leads':
        return <LeadManagement />
      case 'financial':
        return <FinancialTracker />
      case 'builder':
        return <ProductBuilder />
      default:
        return <AmmarChat />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Bot className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h2 className="font-semibold">Ammar AI</h2>
              <p className="text-sm text-gray-500">FiNix Digital</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
        
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 p-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role.replace('_', ' ')}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="h-8 w-8 p-0"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900">
            {menuItems.find(item => item.id === activeTab)?.label}
          </h1>
        </header>
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
