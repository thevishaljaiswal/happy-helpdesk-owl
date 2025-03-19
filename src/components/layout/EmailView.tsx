
import React, { useState } from 'react';
import { ReplyAll, Reply, Forward, MoreHorizontal, Archive, X } from 'lucide-react';
import EmailDetail from '../emails/EmailDetail';
import ReplyComposer from '../emails/ReplyComposer';
import TicketSection from '../tickets/TicketSection';
import { Button } from "@/components/ui/button";
import { emails } from '@/utils/dummyData';

interface EmailViewProps {
  emailId: string | null;
  onClose: () => void;
}

const EmailView: React.FC<EmailViewProps> = ({ emailId, onClose }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isReplyAll, setIsReplyAll] = useState(false);
  const [isForwarding, setIsForwarding] = useState(false);
  
  const email = emails.find(e => e.id === emailId);
  
  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500 p-8 animate-fade-in">
        <p>Select an email to view its content</p>
      </div>
    );
  }
  
  const handleReply = () => {
    setIsReplying(true);
    setIsReplyAll(false);
    setIsForwarding(false);
  };
  
  const handleReplyAll = () => {
    setIsReplying(true);
    setIsReplyAll(true);
    setIsForwarding(false);
  };
  
  const handleForward = () => {
    setIsReplying(true);
    setIsReplyAll(false);
    setIsForwarding(true);
  };
  
  return (
    <div className="flex-1 overflow-auto animate-fade-in-up scrollbar-thin">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200 p-4 flex items-center justify-between">
        <h2 className="font-medium text-lg">{email.subject}</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Archive className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="p-4 md:p-6">
        {/* Add TicketSection at the top of the email body */}
        <div className="mb-6 border-b pb-6">
          <TicketSection />
        </div>
        
        <EmailDetail email={email} />
        
        <div className="flex flex-wrap gap-2 mt-6 mb-4">
          <Button 
            className="button-action flex items-center gap-2" 
            variant="outline"
            onClick={handleReply}
          >
            <Reply className="h-4 w-4" />
            <span>Reply</span>
          </Button>
          
          <Button 
            className="button-action flex items-center gap-2"
            variant="outline"
            onClick={handleReplyAll}
          >
            <ReplyAll className="h-4 w-4" />
            <span>Reply All</span>
          </Button>
          
          <Button 
            className="button-action flex items-center gap-2"
            variant="outline"
            onClick={handleForward}
          >
            <Forward className="h-4 w-4" />
            <span>Forward</span>
          </Button>
        </div>
        
        {isReplying && (
          <ReplyComposer 
            email={email} 
            isReplyAll={isReplyAll} 
            isForwarding={isForwarding}
            onCancel={() => setIsReplying(false)}
          />
        )}
      </div>
    </div>
  );
};

export default EmailView;
