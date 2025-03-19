
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import EmailItem from '../emails/EmailItem';
import { emails } from '@/utils/dummyData';

const Sidebar: React.FC = () => {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['Today']);
  
  const toggleGroup = (group: string) => {
    if (expandedGroups.includes(group)) {
      setExpandedGroups(expandedGroups.filter(g => g !== group));
    } else {
      setExpandedGroups([...expandedGroups, group]);
    }
  };
  
  // Group emails by date category
  const groupedEmails = {
    'Today': emails.filter(email => email.dateCategory === 'Today'),
    'Yesterday': emails.filter(email => email.dateCategory === 'Yesterday'),
    'This Week': emails.filter(email => email.dateCategory === 'This Week'),
    'Earlier': emails.filter(email => email.dateCategory === 'Earlier'),
  };
  
  return (
    <div className="w-full md:w-80 lg:w-96 border-r border-gray-200 h-full overflow-y-auto scrollbar-thin bg-white animate-fade-in">
      {Object.entries(groupedEmails).map(([group, groupEmails]) => (
        <div key={group} className="email-group">
          <div 
            className="flex items-center px-4 py-2 text-sm font-medium cursor-pointer border-b border-gray-100 hover:bg-gray-50"
            onClick={() => toggleGroup(group)}
          >
            {expandedGroups.includes(group) ? (
              <ChevronDown className="h-4 w-4 mr-1 text-gray-500" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-1 text-gray-500" />
            )}
            <span>{group}</span>
          </div>
          
          {expandedGroups.includes(group) && (
            <div className="group-emails animate-fade-in">
              {groupEmails.map(email => (
                <EmailItem 
                  key={email.id} 
                  email={email}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
