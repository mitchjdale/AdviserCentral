import type { Client, ContactEvent } from '../models';

/** Mock client list for engagement scoring. */
export const clients: Client[] = [
  { id: 'client-1', name: 'Olivia Bennett', role: 'Pre-Retiree', status: 'active' },
  { id: 'client-2', name: 'Marcus Nguyen', role: 'Business Owner', status: 'active' },
  { id: 'client-3', name: 'Sophie Patel', role: 'Family Office', status: 'active' },
  { id: 'client-4', name: 'Ethan Ward', role: 'Accumulation', status: 'dormant' },
  { id: 'client-5', name: 'Amelia Clarke', role: 'SMSF Trustee', status: 'active' },
  { id: 'client-6', name: 'Liam O\'Connor', role: 'Retiree', status: 'at-risk' },
  { id: 'client-7', name: 'Grace Kim', role: 'Executive', status: 'active' },
  { id: 'client-8', name: 'Noah Stewart', role: 'Young Professional', status: 'dormant' },
  { id: 'client-9', name: 'Charlotte Rossi', role: 'High Net Worth', status: 'active' },
  { id: 'client-10', name: 'Henry Collins', role: 'Retiree', status: 'at-risk' },
  { id: 'client-11', name: 'Mia Dawson', role: 'Medical Specialist', status: 'active' },
  { id: 'client-12', name: 'Jack Wilson', role: 'Mining Executive', status: 'dormant' },
  { id: 'client-13', name: 'Ella Price', role: 'Self-Employed', status: 'active' },
  { id: 'client-14', name: 'William Hart', role: 'Corporate', status: 'dormant' },
  { id: 'client-15', name: 'Isla Freeman', role: 'Retiree', status: 'at-risk' },
];

/** Mock engagement events across the past 12 months. */
export const contactEvents: ContactEvent[] = [
  { clientId: 'client-1', type: 'meeting', date: '2026-08-05', notes: 'Portfolio strategy check-in' },
  { clientId: 'client-1', type: 'review', date: '2026-05-14', notes: 'Annual review complete' },
  { clientId: 'client-1', type: 'communication', date: '2026-08-09', notes: 'Phone follow-up' },

  { clientId: 'client-2', type: 'meeting', date: '2026-07-22', notes: 'Insurance review discussion' },
  { clientId: 'client-2', type: 'review', date: '2025-12-02', notes: 'Annual review complete' },
  { clientId: 'client-2', type: 'communication', date: '2026-08-01', notes: 'Email update on strategy' },

  { clientId: 'client-3', type: 'meeting', date: '2026-06-29', notes: 'Tax planning session' },
  { clientId: 'client-3', type: 'review', date: '2026-01-15', notes: 'Annual review complete' },
  { clientId: 'client-3', type: 'communication', date: '2026-07-30', notes: 'Quarterly touchpoint call' },

  { clientId: 'client-4', type: 'meeting', date: '2026-03-12', notes: 'Retirement cashflow planning' },
  { clientId: 'client-4', type: 'review', date: '2025-09-18', notes: 'Review delayed' },
  { clientId: 'client-4', type: 'communication', date: '2026-04-10', notes: 'Missed callback attempt' },

  { clientId: 'client-5', type: 'meeting', date: '2026-08-10', notes: 'Risk profile refresh' },
  { clientId: 'client-5', type: 'review', date: '2026-04-01', notes: 'Annual review complete' },
  { clientId: 'client-5', type: 'communication', date: '2026-08-11', notes: 'Secure message follow-up' },

  { clientId: 'client-6', type: 'meeting', date: '2026-01-20', notes: 'Estate planning workshop' },
  { clientId: 'client-6', type: 'review', date: '2025-07-25', notes: 'Review overdue' },
  { clientId: 'client-6', type: 'communication', date: '2026-02-14', notes: 'Birthday outreach email' },

  { clientId: 'client-7', type: 'meeting', date: '2026-07-18', notes: 'Salary packaging update' },
  { clientId: 'client-7', type: 'review', date: '2026-03-09', notes: 'Annual review complete' },
  { clientId: 'client-7', type: 'communication', date: '2026-08-03', notes: 'LinkedIn message follow-up' },

  { clientId: 'client-8', type: 'meeting', date: '2026-02-07', notes: 'First-home buyer strategy' },
  { clientId: 'client-8', type: 'review', date: '2025-10-29', notes: 'Review scheduled but postponed' },
  { clientId: 'client-8', type: 'communication', date: '2026-03-15', notes: 'General email check-in' },

  { clientId: 'client-9', type: 'meeting', date: '2026-08-08', notes: 'Investment committee update' },
  { clientId: 'client-9', type: 'review', date: '2026-02-22', notes: 'Annual review complete' },
  { clientId: 'client-9', type: 'communication', date: '2026-08-10', notes: 'WhatsApp confirmation' },

  { clientId: 'client-10', type: 'meeting', date: '2025-12-15', notes: 'Pension income review' },
  { clientId: 'client-10', type: 'review', date: '2025-06-10', notes: 'Annual review missed' },
  { clientId: 'client-10', type: 'communication', date: '2026-01-05', notes: 'Unanswered voicemail' },

  { clientId: 'client-11', type: 'meeting', date: '2026-07-27', notes: 'Debt recycling plan' },
  { clientId: 'client-11', type: 'review', date: '2026-01-30', notes: 'Annual review complete' },
  { clientId: 'client-11', type: 'communication', date: '2026-08-07', notes: 'Pre-meeting prep email' },

  { clientId: 'client-12', type: 'meeting', date: '2026-04-05', notes: 'Super contribution strategy' },
  { clientId: 'client-12', type: 'review', date: '2025-08-12', notes: 'Annual review overdue' },
  { clientId: 'client-12', type: 'communication', date: '2026-04-30', notes: 'Text message check-in' },

  { clientId: 'client-13', type: 'meeting', date: '2026-08-02', notes: 'Business cashflow advisory' },
  { clientId: 'client-13', type: 'review', date: '2026-02-04', notes: 'Annual review complete' },
  { clientId: 'client-13', type: 'communication', date: '2026-08-12', notes: 'Email summary sent' },

  { clientId: 'client-14', type: 'meeting', date: '2026-03-24', notes: 'Succession planning' },
  { clientId: 'client-14', type: 'review', date: '2025-11-16', notes: 'Review deferred by client' },
  { clientId: 'client-14', type: 'communication', date: '2026-05-02', notes: 'Outbound call attempt' },

  { clientId: 'client-15', type: 'meeting', date: '2026-01-08', notes: 'Aged care planning session' },
  { clientId: 'client-15', type: 'review', date: '2025-06-29', notes: 'Annual review not completed' },
  { clientId: 'client-15', type: 'communication', date: '2026-02-02', notes: 'Check-in letter sent' },
];
