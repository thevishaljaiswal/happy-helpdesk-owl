
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Collaborator {
  id: number;
  activityDescription: string;
  assigned: string;
  department: string;
  comments?: string;
  timestamp: Date;
}

interface CollaboratorListProps {
  collaborators: Collaborator[];
}

const CollaboratorList: React.FC<CollaboratorListProps> = ({ collaborators }) => {
  if (collaborators.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        No collaborators have been added yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-md font-medium flex items-center gap-2">
        <Users className="h-4 w-4" />
        Collaborators ({collaborators.length})
      </h3>
      
      {collaborators.map((collaborator) => (
        <Card key={collaborator.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div className="font-medium">{collaborator.assigned}</div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formatDistanceToNow(new Date(collaborator.timestamp), { addSuffix: true })}
                </div>
              </div>
              
              <div className="text-sm">
                <span className="text-gray-600 mr-2">Activity:</span>
                {collaborator.activityDescription}
              </div>
              
              <div className="text-sm">
                <span className="text-gray-600 mr-2">Department:</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                  {collaborator.department}
                </span>
              </div>
              
              {collaborator.comments && (
                <div className="text-sm mt-1">
                  <span className="text-gray-600 block mb-1">Comments:</span>
                  <div className="bg-gray-50 p-2 rounded text-gray-700 text-xs">
                    {collaborator.comments}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CollaboratorList;
