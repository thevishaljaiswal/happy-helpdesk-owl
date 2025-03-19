
export interface Recipient {
  name: string;
  department?: string;
}

export interface Attachment {
  filename: string;
  size: string;
}

export interface Signature {
  name: string;
  title?: string;
  contact?: string;
  imageUrl?: string;
}

export interface EmailType {
  id: string;
  subject: string;
  sender: Recipient;
  to: Recipient[];
  cc?: Recipient[];
  date: string;
  dateCategory: 'Today' | 'Yesterday' | 'This Week' | 'Earlier';
  body: string;
  preview: string;
  unread: boolean;
  hasAttachment: boolean;
  attachments?: Attachment[];
  signature?: Signature;
}

export const emails: EmailType[] = [
  {
    id: '1',
    subject: 'IOJC API transaction',
    sender: { name: 'Kaustubh Mahajan', department: 'Gera Finance & Accounts' },
    to: [{ name: 'Harsha Mahajan' }],
    cc: [
      { name: 'Sanjay1 Shelke' },
      { name: 'Vishal Jaiswal', department: 'Gera IT' }
    ],
    date: '2023-03-19T17:53:00',
    dateCategory: 'Today',
    preview: 'As we discuss that IOJ C Collection transactions not hit in our SAP through API but amount credited in Bank Account.',
    body: `Madam,

As we discuss that IOJ C Collection transactions not hit in our SAP through API but amount credited in Bank Account.

Attached the MIS Sheet for your reference. Please check & revert.

Thanks`,
    unread: false,
    hasAttachment: true,
    attachments: [
      { filename: 'Copy of IOJ C Virtual MIS New.xls', size: '682 KB' }
    ],
    signature: {
      name: 'Kaustubh Mahajan',
      title: 'DGM Finance',
      contact: 'Mobile: 9763700812',
      imageUrl: 'https://lovable.dev/projects/79d8dc2e-fba3-461a-8a04-9839446ee13e/public/lovable-uploads/2898346a-8caa-4f4c-9bbd-643176a34e04.png'
    }
  },
  {
    id: '2',
    subject: 'CAM financial reporting',
    sender: { name: 'Chinmay Biswal', department: 'Gera Corporate Finance' },
    to: [{ name: 'You' }],
    date: '2023-03-19T17:48:00',
    dateCategory: 'Today',
    preview: 'Dear Vishal, Please update on the status of the CAM financial reporting module integration.',
    body: `Dear Vishal,

Please update on the status of the CAM financial reporting module integration. We need this to be completed by the end of this month to comply with the quarterly reporting requirements.

Can you provide a timeline for when this will be ready for testing?

Thanks,
Chinmay`,
    unread: true,
    hasAttachment: false,
    signature: {
      name: 'Chinmay Biswal',
      title: 'Senior Finance Manager',
      contact: 'Ext: 4532'
    }
  },
  {
    id: '3',
    subject: 'RCM self invoice 019032023',
    sender: { name: 'Palkesh Khandelwal', department: 'Gera Finance' },
    to: [{ name: 'You' }],
    date: '2023-03-19T17:47:00',
    dateCategory: 'Today',
    preview: 'Dear Zafar, Tried calling you regarding the RCM self invoice issue that we discussed yesterday.',
    body: `Dear Zafar,

Tried calling you regarding the RCM self invoice issue that we discussed yesterday. I've reviewed the logs and found that there appears to be a synchronization problem between the invoice generation system and the database.

Could you please help resolve this as soon as possible? It's blocking our month-end process.

Regards,
Palkesh`,
    unread: false,
    hasAttachment: false,
    signature: {
      name: 'Palkesh Khandelwal',
      title: 'Assistant Manager - Finance',
    }
  },
  {
    id: '4',
    subject: 'Possession Document Verification',
    sender: { name: 'Pallavi Ladikat', department: 'Gera Customer Relations' },
    to: [{ name: 'You' }],
    date: '2023-03-19T17:14:00',
    dateCategory: 'Today',
    preview: 'Dear Sandeep, Request you to please review the possession documents for unit A-701 before our meeting tomorrow.',
    body: `Dear Sandeep,

Request you to please review the possession documents for unit A-701 before our meeting tomorrow. The customer is coming at 11 AM and we need to have everything ready by then.

I've attached the checklist for your reference. Please let me know if anything is missing.

Thank you,
Pallavi`,
    unread: true,
    hasAttachment: true,
    attachments: [
      { filename: 'Possession_Checklist_A701.pdf', size: '243 KB' }
    ],
    signature: {
      name: 'Pallavi Ladikat',
      title: 'Customer Relations Executive',
      contact: 'Ext: 3241'
    }
  },
  {
    id: '5',
    subject: 'JOTT - Need company registration details',
    sender: { name: 'Ganesh Kamble', department: 'Gera Sales' },
    to: [{ name: 'You' }],
    date: '2023-03-19T17:07:00',
    dateCategory: 'Today',
    preview: 'Is this done? I need the company registration details for the JOTT system by tomorrow morning.',
    body: `Is this done? I need the company registration details for the JOTT system by tomorrow morning. The sales team is waiting for access to start entering the new leads from the property expo.

Let me know if you need any specific information from my end to complete this.

Thanks,
Ganesh`,
    unread: false,
    hasAttachment: false,
    signature: {
      name: 'Ganesh Kamble',
      title: 'Sales Manager',
      contact: 'Mobile: 8876543210'
    }
  },
  {
    id: '6',
    subject: 'Registration line up - updates',
    sender: { name: 'Pallavi Ladikat', department: 'Gera Customer Relations' },
    to: [{ name: 'You' }],
    date: '2023-03-18T16:12:00',
    dateCategory: 'Yesterday',
    preview: 'From: Pallavi Ladikat @ Gera, Here are the updates on the registration line up for next week.',
    body: `From: Pallavi Ladikat @ Gera

Here are the updates on the registration line up for next week. We have 5 confirmed registrations:

1. Mr. Sharma - Unit B403 - Monday 10AM
2. Mrs. Kapoor - Unit A204 - Monday 3PM
3. Dr. Reddy - Unit C101 - Tuesday 11AM
4. Mr. & Mrs. Joshi - Unit B601 - Wednesday 2PM
5. Ms. Mitra - Unit A505 - Friday 4PM

Please ensure all the documentation is ready a day in advance.

Regards,
Pallavi`,
    unread: false,
    hasAttachment: false,
    signature: {
      name: 'Pallavi Ladikat',
      title: 'Senior Customer Relations Manager',
      contact: 'Ext: 3241'
    }
  },
  {
    id: '7',
    subject: 'Error in Company code configuration',
    sender: { name: 'Nitin Shedge', department: 'Gera Finance & Accounts' },
    to: [{ name: 'You' }],
    date: '2023-03-18T15:44:00',
    dateCategory: 'Yesterday',
    preview: 'Dear Vishal, Pls allow tax code configuration for the new company entity as discussed yesterday.',
    body: `Dear Vishal,

Pls allow tax code configuration for the new company entity as discussed yesterday. We are unable to process any vendor bills without this setup.

The new company code is GEPL2023 and it needs to be configured with the same tax codes as the parent company GEPL2022.

Urgently required to process month-end payments.

Thanks,
Nitin`,
    unread: true,
    hasAttachment: false,
    signature: {
      name: 'Nitin Shedge',
      title: 'Finance Controller',
      contact: 'Ext: 4501'
    }
  },
  {
    id: '8',
    subject: 'MIS review- IT',
    sender: { name: 'Sabda Balakrishnan', department: 'Gera Corporate IT' },
    to: [{ name: 'Team IT' }, { name: 'You' }],
    date: '2023-03-18T15:32:00',
    dateCategory: 'Yesterday',
    preview: 'Monthly IT infrastructure review meeting scheduled for tomorrow at 2 PM in Conference Room B.',
    body: `Monthly IT infrastructure review meeting scheduled for tomorrow at 2 PM in Conference Room B.

Agenda:
1. Review of current infrastructure performance
2. Discussion on pending tickets
3. Update on cloud migration project
4. Budget allocation for Q2
5. AOB

Please come prepared with your respective data points.

Regards,
Sabda`,
    unread: false,
    hasAttachment: false,
    signature: {
      name: 'Sabda Balakrishnan',
      title: 'Head of IT Operations',
      contact: 'Ext: 4001'
    }
  }
];
