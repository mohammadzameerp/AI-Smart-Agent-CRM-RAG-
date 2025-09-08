'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Target, CheckCircle, TrendingUp } from 'lucide-react'

interface TeamDashboardProps {
  personal?: boolean
}

export function TeamDashboard({ personal = false }: TeamDashboardProps) {
  if (personal) {
    // Personal dashboard for team members
    const personalStats = {
      leadsWorked: 15,
      clientsClosed: 8,
      conversionRate: 53,
      monthlyGoal: 12,
      tasksCompleted: 24,
      pendingTasks: 6
    }

    const recentActivities = [
      { action: 'Called NS Coaching', time: '2 hours ago', status: 'completed' },
      { action: 'Sent proposal to IIT Academy', time: '4 hours ago', status: 'completed' },
      { action: 'Follow up with Tech Solutions', time: '1 day ago', status: 'pending' },
      { action: 'Website delivery to Hostel Mgmt', time: '2 days ago', status: 'overdue' }
    ]

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leads Worked</CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{personalStats.leadsWorked}</div>
              <p className="text-xs text-gray-500">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clients Closed</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{personalStats.clientsClosed}</div>
              <p className="text-xs text-gray-500">
                Goal: {personalStats.monthlyGoal}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{personalStats.conversionRate}%</div>
              <p className="text-xs text-gray-500">+5% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Progress</CardTitle>
              <CardDescription>Your progress towards monthly goals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Clients Closed</span>
                  <span className="text-sm text-gray-500">
                    {personalStats.clientsClosed}/{personalStats.monthlyGoal}
                  </span>
                </div>
                <Progress value={(personalStats.clientsClosed / personalStats.monthlyGoal) * 100} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Tasks Completed</span>
                  <span className="text-sm text-gray-500">
                    {personalStats.tasksCompleted}/{personalStats.tasksCompleted + personalStats.pendingTasks}
                  </span>
                </div>
                <Progress value={(personalStats.tasksCompleted / (personalStats.tasksCompleted + personalStats.pendingTasks)) * 100} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your recent work and follow-ups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg border">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <Badge 
                    variant={
                      activity.status === 'completed' ? 'default' : 
                      activity.status === 'pending' ? 'secondary' : 'destructive'
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Admin team overview
  const teamMembers = [
    { 
      name: 'Kiran', 
      role: 'Sales Executive',
      leads: 15, 
      closed: 8, 
      rate: 53,
      lastActive: '2 hours ago',
      status: 'active'
    },
    { 
      name: 'Ravi', 
      role: 'Developer',
      leads: 12, 
      closed: 5, 
      rate: 42,
      lastActive: '1 hour ago',
      status: 'active'
    },
    { 
      name: 'Priya', 
      role: 'Sales Executive',
      leads: 18, 
      closed: 11, 
      rate: 61,
      lastActive: '30 minutes ago',
      status: 'active'
    },
    { 
      name: 'Arjun', 
      role: 'Developer',
      leads: 9, 
      closed: 4, 
      rate: 44,
      lastActive: '4 hours ago',
      status: 'inactive'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={member.status === 'active' ? 'default' : 'secondary'}>
                    {member.status}
                  </Badge>
                  <span className="text-xs text-gray-500">{member.lastActive}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{member.leads}</p>
                  <p className="text-xs text-gray-500">Leads Worked</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{member.closed}</p>
                  <p className="text-xs text-gray-500">Clients Closed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{member.rate}%</p>
                  <p className="text-xs text-gray-500">Conversion Rate</p>
                </div>
                <div className="flex items-center justify-center">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
