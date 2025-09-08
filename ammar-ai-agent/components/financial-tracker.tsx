'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DollarSign, TrendingUp, TrendingDown, PieChart, Calendar } from 'lucide-react'

export function FinancialTracker() {
  const monthlyData = {
    revenue: 45230,
    expenses: 28150,
    profit: 17080,
    growth: 12.5
  }

  const revenueBreakdown = [
    { client: 'NS Coaching Institute', amount: 8500, status: 'paid', date: '2024-01-15' },
    { client: 'IIT Academy', amount: 6200, status: 'pending', date: '2024-01-18' },
    { client: 'Tech Solutions Ltd', amount: 12000, status: 'paid', date: '2024-01-12' },
    { client: 'Hostel Management Co', amount: 4200, status: 'paid', date: '2024-01-10' },
    { client: 'Digital Marketing Pro', amount: 7500, status: 'overdue', date: '2024-01-08' },
    { client: 'E-learning Platform', amount: 6830, status: 'paid', date: '2024-01-14' }
  ]

  const expenses = [
    { category: 'Developer Salaries', amount: 15000, percentage: 53 },
    { category: 'Hosting & Infrastructure', amount: 3200, percentage: 11 },
    { category: 'Marketing & Ads', amount: 4500, percentage: 16 },
    { category: 'Software Licenses', amount: 2800, percentage: 10 },
    { category: 'Office & Utilities', amount: 2650, percentage: 10 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'default'
      case 'pending': return 'secondary'
      case 'overdue': return 'destructive'
      default: return 'secondary'
    }
  }

  return (
    <div className="space-y-6">
      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${monthlyData.revenue.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              ${monthlyData.expenses.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              ${monthlyData.profit.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500">
              {((monthlyData.profit / monthlyData.revenue) * 100).toFixed(1)}% margin
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <PieChart className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              +{monthlyData.growth}%
            </div>
            <p className="text-xs text-gray-500">vs last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="revenue" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="revenue">Revenue Breakdown</TabsTrigger>
          <TabsTrigger value="expenses">Expense Analysis</TabsTrigger>
          <TabsTrigger value="projections">Projections</TabsTrigger>
        </TabsList>
        
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Client Revenue Breakdown</CardTitle>
              <CardDescription>Revenue from individual clients this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {revenueBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{item.client}</p>
                      <p className="text-sm text-gray-500">
                        <Calendar className="inline h-3 w-3 mr-1" />
                        {item.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                      <span className="font-semibold text-lg">
                        ${item.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expense Categories</CardTitle>
              <CardDescription>Breakdown of monthly expenses by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenses.map((expense, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{expense.category}</span>
                      <span className="text-sm text-gray-500">
                        ${expense.amount.toLocaleString()} ({expense.percentage}%)
                      </span>
                    </div>
                    <Progress value={expense.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="projections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Projections</CardTitle>
              <CardDescription>Projected revenue and growth for next quarter</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Next Month Projection</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Expected Revenue</span>
                      <span className="font-semibold text-green-600">$52,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Expenses</span>
                      <span className="font-semibold text-red-600">$30,500</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-semibold">Projected Profit</span>
                      <span className="font-semibold text-blue-600">$21,500</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Growth Opportunities</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Focus on high-value corporate clients (+25% revenue)</p>
                    <p>• Optimize hosting costs (-15% expenses)</p>
                    <p>• Expand coaching institute market (+30% leads)</p>
                    <p>• Implement recurring maintenance contracts</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
