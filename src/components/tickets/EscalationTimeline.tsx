
import React from 'react';
import { Clock, AlertTriangle, Users, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format, addHours } from "date-fns";

interface EscalationLevel {
  role: string;
  time: Date;
  icon: React.ReactNode;
  isActive: boolean;
}

interface EscalationTimelineProps {
  createdAt: Date;
}

const EscalationTimeline: React.FC<EscalationTimelineProps> = ({ createdAt }) => {
  // Define escalation levels and their time frames
  const getEscalationLevels = (startTime: Date): EscalationLevel[] => {
    return [
      { 
        role: "Relationship Manager", 
        time: startTime, 
        icon: <UserCheck size={18} />, 
        isActive: true 
      },
      { 
        role: "Team Lead", 
        time: addHours(startTime, 4), 
        icon: <UserCheck size={18} />, 
        isActive: new Date() >= addHours(startTime, 4) 
      },
      { 
        role: "General Manager", 
        time: addHours(startTime, 12), 
        icon: <UserCheck size={18} />, 
        isActive: new Date() >= addHours(startTime, 12) 
      },
      { 
        role: "Head of Department", 
        time: addHours(startTime, 24), 
        icon: <Users size={18} />, 
        isActive: new Date() >= addHours(startTime, 24) 
      },
      { 
        role: "VP", 
        time: addHours(startTime, 48), 
        icon: <Users size={18} />, 
        isActive: new Date() >= addHours(startTime, 48) 
      },
      { 
        role: "CEO", 
        time: addHours(startTime, 72), 
        icon: <AlertTriangle size={18} />, 
        isActive: new Date() >= addHours(startTime, 72) 
      },
    ];
  };

  const escalationLevels = getEscalationLevels(createdAt);

  return (
    <Card className="w-full shadow-sm border-gray-200 mt-6">
      <CardHeader className="bg-gray-50 border-b border-gray-100">
        <CardTitle className="text-lg flex items-center">
          <Clock className="h-5 w-5 mr-2 text-mail-blue" />
          Escalation Timeline
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute w-0.5 bg-gray-200 h-full left-[27px] top-0 z-0"></div>
          
          {/* Timeline items */}
          <div className="space-y-6">
            {escalationLevels.map((level, index) => (
              <div key={index} className="flex items-start">
                <div className={`z-10 w-6 h-6 mr-4 flex items-center justify-center rounded-full ${level.isActive ? 'bg-mail-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {level.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className={`font-medium ${level.isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                      {level.role}
                    </h4>
                    <span className={`text-sm ${level.isActive ? 'text-mail-blue' : 'text-gray-400'}`}>
                      {format(level.time, "MMM d, h:mm a")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {level.isActive 
                      ? `Ticket has been escalated to this level` 
                      : `Will be escalated at this time if unresolved`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EscalationTimeline;
