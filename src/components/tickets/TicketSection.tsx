
import React, { useState } from 'react';
import TicketForm from './TicketForm';
import TicketInfoCard from './TicketInfoCard';
import EscalationTimeline from './EscalationTimeline';

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
  const [showSampleTicket, setShowSampleTicket] = useState(true);
  
  return (
    <div className="space-y-6">
      <TicketForm />
      
      {showSampleTicket && (
        <div className="space-y-6 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Ticket Information</h2>
            <button 
              onClick={() => setShowSampleTicket(false)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Hide Sample
            </button>
          </div>
          <TicketInfoCard ticket={sampleTicket} />
          <EscalationTimeline createdAt={sampleTicket.createdAt} />
        </div>
      )}
    </div>
  );
};

export default TicketSection;
