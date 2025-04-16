
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Inbox, 
  Users, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3,
  Mail,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Dashboard: React.FC = () => {
  // Sample stats for dashboard
  const stats = [
    { 
      title: "Total Tickets", 
      value: "156", 
      change: "+12% from last month", 
      icon: Inbox,
      color: "text-blue-500"
    },
    { 
      title: "Open Tickets", 
      value: "42", 
      change: "-5% from last month", 
      icon: AlertTriangle,
      color: "text-amber-500"
    },
    { 
      title: "Resolved Tickets", 
      value: "114", 
      change: "+18% from last month", 
      icon: CheckCircle,
      color: "text-green-500"
    },
    { 
      title: "Average Response Time", 
      value: "2.4h", 
      change: "-0.3h from last month", 
      icon: Clock,
      color: "text-indigo-500"
    }
  ];

  // Sample category distribution
  const categories = [
    { name: "Technical Support", percentage: 45 },
    { name: "Billing Inquiries", percentage: 25 },
    { name: "Account Issues", percentage: 15 },
    { name: "Feature Requests", percentage: 10 },
    { name: "Other", percentage: 5 }
  ];
  
  // Sample escalated tickets data
  const escalatedTickets = [
    {
      id: "HD-1089",
      title: "Unable to access customer database",
      priority: "Critical",
      escalatedTo: "Head of Department",
      timeToResolve: "4h remaining",
      owner: "Sarah Chen",
      department: "IT Support"
    },
    {
      id: "HD-1045",
      title: "Payment gateway integration failure",
      priority: "High",
      escalatedTo: "General Manager",
      timeToResolve: "2h remaining",
      owner: "Michael Rodriguez",
      department: "Payments"
    },
    {
      id: "HD-1092",
      title: "Data synchronization error affecting customer accounts",
      priority: "Critical",
      escalatedTo: "VP",
      timeToResolve: "12h remaining",
      owner: "James Wilson",
      department: "Data Operations"
    },
    {
      id: "HD-1076",
      title: "Security vulnerability in user authentication",
      priority: "High",
      escalatedTo: "General Manager",
      timeToResolve: "6h remaining",
      owner: "Emma Johnson",
      department: "Security"
    },
    {
      id: "HD-1103",
      title: "Production server outage affecting 30% of users",
      priority: "Critical",
      escalatedTo: "CEO",
      timeToResolve: "1h remaining",
      owner: "David Patel",
      department: "Infrastructure"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6 bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Helpdesk Dashboard</h1>
          <Link 
            to="/helpdesk" 
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Go to Helpdesk
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Ticket Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Ticket Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-sm text-gray-500">{category.percentage}%</span>
                    </div>
                    <Progress value={category.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Escalated Tickets Dashboard - New Component */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <ArrowUpRight className="h-5 w-5 text-red-500" />
                <span>Escalated Tickets</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500 mb-3">
                Showing tickets escalated to stakeholders that require immediate attention
              </div>
              <div className="overflow-auto max-h-[250px] pr-2">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">ID</TableHead>
                      <TableHead>Issue</TableHead>
                      <TableHead className="text-right">Escalated To</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {escalatedTickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-medium">{ticket.id}</TableCell>
                        <TableCell>
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <div className="cursor-help">
                                <div className="font-medium text-sm truncate max-w-[180px]">
                                  {ticket.title}
                                </div>
                                <div className={`text-xs ${
                                  ticket.priority === 'Critical' ? 'text-red-500' : 'text-amber-500'
                                }`}>
                                  {ticket.priority} • {ticket.timeToResolve}
                                </div>
                              </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                              <div className="space-y-2">
                                <h4 className="font-semibold">{ticket.title}</h4>
                                <div className="text-sm grid grid-cols-2 gap-1">
                                  <div className="text-gray-500">Owner:</div>
                                  <div>{ticket.owner}</div>
                                  <div className="text-gray-500">Department:</div>
                                  <div>{ticket.department}</div>
                                  <div className="text-gray-500">Priority:</div>
                                  <div className={`${
                                    ticket.priority === 'Critical' ? 'text-red-500' : 'text-amber-500'
                                  }`}>{ticket.priority}</div>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        </TableCell>
                        <TableCell className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            ticket.escalatedTo === 'CEO' ? 'bg-red-100 text-red-800' : 
                            ticket.escalatedTo === 'VP' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {ticket.escalatedTo}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                <span>Recent Activity</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    index % 3 === 0 ? "bg-green-500" : 
                    index % 3 === 1 ? "bg-amber-500" : "bg-blue-500"
                  }`}></div>
                  <div className="flex-1">
                    <div className="font-medium">
                      {index % 3 === 0 ? "Ticket #1089 resolved" : 
                       index % 3 === 1 ? "New ticket #1095 created" : 
                       "Ticket #1092 escalated to Level 2"}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {index % 2 === 0 ? "John Doe" : "Jane Smith"} • {index + 1} hour{index !== 0 ? "s" : ""} ago
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
