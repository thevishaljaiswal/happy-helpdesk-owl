
import React from 'react';
import { Clock, CalendarClock, Tag, MessageSquare, UserCircle, ClipboardList } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface TicketInfo {
  id: string;
  category: string;
  subcategory: string;
  status: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

interface TicketInfoCardProps {
  ticket: TicketInfo;
}

const TicketInfoCard: React.FC<TicketInfoCardProps> = ({ ticket }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-purple-100 text-purple-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="w-full shadow-sm border-gray-200">
      <CardHeader className="bg-gray-50 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <ClipboardList className="h-5 w-5 mr-2 text-mail-blue" />
            Ticket #{ticket.id}
          </CardTitle>
          <div className="flex space-x-2">
            <Badge className={getStatusColor(ticket.status)}>
              {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1).replace('-', ' ')}
            </Badge>
            <Badge className={getPriorityColor(ticket.priority)}>
              {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-sm text-gray-500 w-28">Category:</span>
              <span className="font-medium">{ticket.category}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-sm text-gray-500 w-28">Subcategory:</span>
              <span className="font-medium">{ticket.subcategory}</span>
            </div>
            {ticket.assignedTo && (
              <div className="flex items-center">
                <UserCircle className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-500 w-28">Assigned to:</span>
                <span className="font-medium">{ticket.assignedTo}</span>
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <CalendarClock className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-sm text-gray-500 w-28">Created:</span>
              <span className="font-medium">{format(ticket.createdAt, "MMM d, yyyy 'at' h:mm a")}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-gray-500" />
              <span className="text-sm text-gray-500 w-28">Last updated:</span>
              <span className="font-medium">{format(ticket.updatedAt, "MMM d, yyyy 'at' h:mm a")}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-sm font-semibold flex items-center mb-2">
            <MessageSquare className="h-4 w-4 mr-2 text-gray-500" />
            Description
          </h3>
          <div className="bg-gray-50 rounded-md p-3 text-sm">{ticket.description}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketInfoCard;
