
import React from 'react';
import { EmailType } from '@/utils/dummyData';
import EmailAttachment from '../ui/EmailAttachment';

interface EmailDetailProps {
  email: EmailType;
}

const EmailDetail: React.FC<EmailDetailProps> = ({ email }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  return (
    <div className="email-detail animate-fade-in">
      <div className="flex items-start mb-4">
        <div className="avatar-circle mr-3">
          {getInitials(email.sender.name)}
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-baseline">
            <div className="text-lg font-medium mb-1">
              {email.sender.name}
              {email.sender.department && <span className="text-gray-500 text-sm ml-2">@ {email.sender.department}</span>}
            </div>
            <div className="text-sm text-gray-500">
              {formatDate(email.date)}
            </div>
          </div>
          
          <div className="email-recipients mb-2">
            <div className="flex flex-wrap text-sm text-gray-600">
              <span className="w-8">To:</span>
              <div className="flex-1">
                {email.to.map((recipient, index) => (
                  <span key={index}>
                    {recipient.name}
                    {index < email.to.length - 1 && '; '}
                  </span>
                ))}
              </div>
            </div>
            
            {email.cc && email.cc.length > 0 && (
              <div className="flex flex-wrap text-sm text-gray-600">
                <span className="w-8">Cc:</span>
                <div className="flex-1">
                  {email.cc.map((recipient, index) => (
                    <span key={index}>
                      {recipient.name}
                      {recipient.department && ` @ ${recipient.department}`}
                      {index < email.cc.length - 1 && '; '}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {email.attachments && email.attachments.length > 0 && (
        <div className="email-attachments mb-4 flex flex-wrap gap-2">
          {email.attachments.map((attachment, index) => (
            <EmailAttachment 
              key={index}
              filename={attachment.filename}
              size={attachment.size}
            />
          ))}
        </div>
      )}
      
      <div className="email-body my-6 text-sm leading-relaxed whitespace-pre-line">
        {email.body.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      
      {email.signature && (
        <div className="email-signature">
          <p>{email.signature.name}</p>
          {email.signature.title && <p>{email.signature.title}</p>}
          {email.signature.contact && <p>{email.signature.contact}</p>}
          {email.signature.imageUrl && (
            <div className="mt-3">
              <img 
                src={email.signature.imageUrl} 
                alt="Signature" 
                className="max-w-full h-auto max-h-28"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailDetail;
