
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Inbox, 
  Users, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3,
  Mail
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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

          {/* Agent Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Top Performing Agents</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                      JS
                    </div>
                    <div>
                      <div className="font-medium">Jane Smith</div>
                      <div className="text-xs text-gray-500">42 tickets resolved</div>
                    </div>
                  </div>
                  <div className="text-green-500 text-sm font-medium">98% satisfaction</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      JD
                    </div>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-gray-500">38 tickets resolved</div>
                    </div>
                  </div>
                  <div className="text-green-500 text-sm font-medium">95% satisfaction</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      AT
                    </div>
                    <div>
                      <div className="font-medium">Alice Thompson</div>
                      <div className="text-xs text-gray-500">35 tickets resolved</div>
                    </div>
                  </div>
                  <div className="text-green-500 text-sm font-medium">96% satisfaction</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      RM
                    </div>
                    <div>
                      <div className="font-medium">Robert Miller</div>
                      <div className="text-xs text-gray-500">32 tickets resolved</div>
                    </div>
                  </div>
                  <div className="text-green-500 text-sm font-medium">94% satisfaction</div>
                </div>
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
