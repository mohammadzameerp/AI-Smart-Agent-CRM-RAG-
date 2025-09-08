'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Plus, Search, Phone, Mail, Calendar, MoreHorizontal } from 'lucide-react'

export function LeadManagement() {
  const [searchTerm, setSearchTerm] = useState('')

  const leads = [
    {
      id: 1,
      name: 'NS Coaching Institute',
      contact: 'Rajesh Kumar',
      phone: '+91 9876543210',
      email: 'rajesh@nscoaching.com',
      status: 'hot',
      value: '$5,000',
      assignedTo: 'Kiran',
      lastContact: '2024-01-15',
      nextFollowUp: '2024-01-18',
      notes: 'Interested in complete website with student portal'
    },
    {
      id: 2,
      name: 'IIT Academy',
      contact: 'Priya Sharma',
      phone: '+91 9876543211',
      email: 'priya@iitacademy.com',
      status: 'warm',
      value: '$3,500',
      assignedTo: 'Ravi',
      lastContact: '2024-01-14',
      nextFollowUp: '2024-01-19',
      notes: 'Needs e-learning platform integration'
    },
    {
      id: 3,
      name: 'Tech Solutions Ltd',
      contact: 'Amit Patel',
      phone: '+91 9876543212',
      email: 'amit@techsolutions.com',
      status: 'cold',
      value: '$8,000',
      assignedTo: 'Priya',
      lastContact: '2024-01-10',
      nextFollowUp: '2024-01-20',
      notes: 'Corporate website with CRM integration'
    },
    {
      id: 4,
      name: 'Hostel Management Co',
      contact: 'Suresh Reddy',
      phone: '+91 9876543213',
      email: 'suresh@hostelmanagement.com',
      status: 'closed',
      value: '$4,200',
      assignedTo: 'Kiran',
      lastContact: '2024-01-12',
      nextFollowUp: null,
      notes: 'Project completed successfully'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'destructive'
      case 'warm': return 'default'
      case 'cold': return 'secondary'
      case 'closed': return 'outline'
      default: return 'secondary'
    }
  }

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.contact.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-64"
          />
        </div>
        
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button>
      </div>

      {/* Leads Grid */}
      <div className="grid gap-4">
        {filteredLeads.map((lead) => (
          <Card key={lead.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{lead.name}</CardTitle>
                  <CardDescription>{lead.contact}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getStatusColor(lead.status)}>
                    {lead.status.toUpperCase()}
                  </Badge>
                  <span className="font-semibold text-green-600">{lead.value}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{lead.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{lead.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Assigned to:</span>
                  <span className="text-sm">{lead.assignedTo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">
                    {lead.nextFollowUp ? `Follow up: ${lead.nextFollowUp}` : 'No follow-up scheduled'}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mb-4">{lead.notes}</p>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </Button>
                <Button size="sm" variant="outline">
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </Button>
                <Button size="sm" variant="outline">
                  <Calendar className="h-4 w-4 mr-1" />
                  Schedule
                </Button>
                <Button size="sm" variant="outline">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
