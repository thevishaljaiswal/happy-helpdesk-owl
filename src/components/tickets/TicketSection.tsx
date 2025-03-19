
import React, { useState } from 'react';
import TicketForm from './TicketForm';
import TicketInfoCard from './TicketInfoCard';
import EscalationTimeline from './EscalationTimeline';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from 'lucide-react';

// Sample ticket data
const sampleTicket = {
  id: 'HD-1234',
  category: 'Software',
  subcategory: 'Email',
  status: 'in-progress',
  description: 'I am unable to access my Outlook email. When I try to log in, I receive an authentication error. I have already tried restarting my computer and clearing browser cache.',
  createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
  updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  assignedTo: 'John Smith',
  priority: 'high' as const,
};

const TicketSection: React.FC = () => {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [showTicketInfo, setShowTicketInfo] = useState(true);
  
  return (
    <div className="space-y-4 bg-gray-50 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Ticket Information</h2>
        <div className="flex gap-2">
          <Button 
            onClick={() => setShowTicketForm(!showTicketForm)}
            variant="outline"
            size="sm"
          >
            {showTicketForm ? 'Hide Form' : 'Create/Update Ticket'}
          </Button>
          {showTicketInfo && (
            <Button 
              onClick={() => setShowTicketInfo(false)}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700"
            >
              Hide Details
            </Button>
          )}
          {!showTicketInfo && (
            <Button 
              onClick={() => setShowTicketInfo(true)}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700"
            >
              Show Details
            </Button>
          )}
          <Button 
            onClick={() => { setShowTicketForm(false); setShowTicketInfo(false); }}
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700"
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {showTicketForm && (
        <div className="animate-accordion-down">
          <TicketForm />
        </div>
      )}
      
      {showTicketInfo && (
        <div className="space-y-4 animate-accordion-down">
          <TicketInfoCard ticket={sampleTicket} />
          <EscalationTimeline createdAt={sampleTicket.createdAt} />
        </div>
      )}
    </div>
  );
};

export default TicketSection;
