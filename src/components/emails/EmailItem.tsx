
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Paperclip } from 'lucide-react';
import { EmailType } from '@/utils/dummyData';
import { cn } from '@/lib/utils';

interface EmailItemProps {
  email: EmailType;
}

const EmailItem: React.FC<EmailItemProps> = ({ email }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentEmailId = searchParams.get('email');
  const isActive = currentEmailId === email.id;
  
  const handleClick = () => {
    navigate(`/?email=${email.id}`);
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
  // Format time from full date to just hours and minutes (HH:MM)
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };
  
  return (
    <div 
      className={cn(
        "email-list-item", 
        isActive && "active",
        "animate-fade-in"
      )}
      onClick={handleClick}
    >
      {email.unread && <div className="unread-dot" />}
      
      <div className="flex-1 min-w-0 ml-2">
        <div className="flex justify-between items-baseline mb-1">
          <div className="font-medium text-sm truncate pr-2">
            {email.sender.name}
          </div>
          <div className="text-mail-time text-xs shrink-0">
            {formatTime(email.date)}
          </div>
        </div>
        
        <div className="text-sm font-medium truncate mb-1">
          {email.subject}
        </div>
        
        <div className="flex items-baseline">
          <div className="text-sm text-gray-500 truncate">
            {email.preview}
          </div>
          
          {email.hasAttachment && (
            <div className="ml-2 shrink-0">
              <Paperclip className="h-3 w-3 text-gray-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailItem;
