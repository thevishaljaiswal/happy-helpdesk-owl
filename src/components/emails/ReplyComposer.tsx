
import React, { useState } from 'react';
import { X, Paperclip, PaperPlane, Bold, Italic, List, Heading, Image } from 'lucide-react';
import { EmailType } from '@/utils/dummyData';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ReplyComposerProps {
  email: EmailType;
  isReplyAll: boolean;
  isForwarding: boolean;
  onCancel: () => void;
}

const ReplyComposer: React.FC<ReplyComposerProps> = ({ 
  email, 
  isReplyAll, 
  isForwarding,
  onCancel 
}) => {
  const [messageContent, setMessageContent] = useState('');
  
  const getReplyPrefix = () => {
    if (isForwarding) {
      return 'Fw: ';
    }
    return email.subject.startsWith('Re:') ? '' : 'Re: ';
  };
  
  const getRecipients = () => {
    if (isForwarding) {
      return '';
    } else if (isReplyAll) {
      const allRecipients = [
        email.sender.name,
        ...email.to.map(r => r.name).filter(n => n !== 'You'),
        ...(email.cc || []).map(r => r.name)
      ].join('; ');
      return allRecipients;
    } else {
      return email.sender.name;
    }
  };
  
  const handleSend = () => {
    toast.success("Email sent successfully");
    onCancel();
  };
  
  const defaultSignature = `
Thanks & Regards,
John Doe
Helpdesk Support
Mobile: +1 123-456-7890
  `;
  
  return (
    <div className="reply-composer animate-fade-in-up">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-sm">
          {isForwarding ? 'Forward' : isReplyAll ? 'Reply All' : 'Reply'}
          {' - '}
          {getReplyPrefix()}{email.subject}
        </h3>
        <Button variant="ghost" size="icon" onClick={onCancel}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="mb-3">
        <div className="flex text-sm mb-2">
          <span className="w-12 text-gray-500">To:</span>
          <div className="flex-1 font-medium">{getRecipients()}</div>
        </div>
        
        {isReplyAll && email.cc && email.cc.length > 0 && (
          <div className="flex text-sm">
            <span className="w-12 text-gray-500">Cc:</span>
            <div className="flex-1 font-medium">
              {email.cc.map(r => r.name).join('; ')}
            </div>
          </div>
        )}
      </div>
      
      <div className="email-formatting-toolbar flex flex-wrap gap-1 mb-2 border-b pb-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Heading className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Image className="h-4 w-4" />
        </Button>
      </div>
      
      <textarea
        className="w-full p-2 min-h-[150px] text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-mail-blue"
        placeholder="Write your reply here..."
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
      ></textarea>
      
      <div className="text-sm text-gray-600 mt-1 mb-4">
        <pre className="font-sans whitespace-pre-wrap">{defaultSignature}</pre>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Paperclip className="h-4 w-4" />
            <span>Attach</span>
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onCancel}>
            Discard
          </Button>
          <Button 
            onClick={handleSend}
            className="bg-mail-blue hover:bg-blue-700 transition-colors"
          >
            <PaperPlane className="h-4 w-4 mr-1" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReplyComposer;
