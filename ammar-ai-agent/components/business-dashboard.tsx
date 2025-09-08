'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { DollarSign, Users, Target, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'

export function BusinessDashboard() {
  const metrics = [
    {
      title: 'Monthly Revenue',
      value: '$45,230',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Clients Closed',
      value: '23',
      change: '+8 this month',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Leads',
      value: '67',
      change: '15 hot leads',
      icon: Target,
      color: 'text-orange-600'
    },
    {
      title: 'Growth Rate',
      value: '18.2%',
      change: 'vs last month',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ]

  const teamPerformance = [
    { name: 'Kiran', leads: 15, closed: 8, rate: 53 },
    { name: 'Ravi', leads: 12, closed: 5, rate: 42 },
    { name: 'Priya', leads: 18, closed: 11, rate: 61 },
    { name: 'Arjun', leads: 9, closed: 4, rate: 44 }
  ]

  const recentAlerts = [
    { type: 'deadline', message: 'NS Coaching website due tomorrow', urgent: true },
    { type: 'follow-up', message: 'Follow up with IIT Academy pending', urgent: false },
    { type: 'payment', message: 'Payment received from Tech Solutions', urgent: false },
    { type: 'deadline', message: 'Hostel management system overdue', urgent: true }
  ]

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-gray-500">{metric.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
            <CardDescription>Lead conversion rates this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamPerformance.map((member, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{member.name}</span>
                  <span className="text-sm text-gray-500">
                    {member.closed}/{member.leads} leads
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={member.rate} className="flex-1" />
                  <span className="text-sm font-medium">{member.rate}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>Important notifications and reminders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                {alert.urgent ? (
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                ) : (
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="text-sm">{alert.message}</p>
                  <Badge variant={alert.urgent ? 'destructive' : 'secondary'} className="mt-1">
                    {alert.urgent ? 'Urgent' : 'Normal'}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Financial Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Overview</CardTitle>
          <CardDescription>Revenue breakdown for current month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Total Revenue</p>
              <p className="text-2xl font-bold text-green-600">$45,230</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Total Expenses</p>
              <p className="text-2xl font-bold text-red-600">$28,150</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Net Profit</p>
              <p className="text-2xl font-bold text-blue-600">$17,080</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
