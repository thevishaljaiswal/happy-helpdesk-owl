
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface EmailAttachmentProps {
  filename: string;
  size: string;
}

const EmailAttachment: React.FC<EmailAttachmentProps> = ({ filename, size }) => {
  return (
    <div className="email-attachment group">
      <FileText className="h-4 w-4 text-gray-500" />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium truncate" title={filename}>
          {filename}
        </div>
        <div className="text-xs text-gray-500">{size}</div>
      </div>
      <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <Download className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
};

export default EmailAttachment;
