// Mock Data for the Admin Engine

export const metrics = {
  totalOshc: 12450,
  conversionRate: 14.2,
  atRisk: 840,
  graduatingSoon: 2100
};

export const todaysPriorities = [
  { id: 1, title: '2,100 students nearing expiry', type: 'urgent', insight: 'Immediate action required to prevent churn to competitors.', action: 'Push OVHC Offer' },
  { id: 2, title: '840 at-risk users identified', type: 'warning', insight: 'Engagement dropped significantly in the last 7 days.', action: 'Trigger Re-engagement' },
  { id: 3, title: 'High engagement cohort spike', type: 'opportunity', insight: '300 users actively exploring health content.', action: 'Send Nudge' }
];

export const nextBestActions = [
  { id: 1, title: 'Launch "Graduation Ready" Push', target: '2,100 graduating students', impact: '+3.2% Conversion Lift', priority: 'High', reasoning: 'AI models show 80% propensity to convert if nudged 45 days prior to expiry.', actionText: 'Execute Nudge' },
  { id: 2, title: 'Automated Check-in Email', target: '840 at-risk users', impact: '-12% Churn Risk', priority: 'Medium', reasoning: 'Users haven\'t opened the app in 14 days; personalized check-in increases retention.', actionText: 'Start Sequence' },
  { id: 3, title: 'Invite to "Navigating Healthcare" Webinar', target: 'New Arrivals Cohort', impact: '+15% Engagement', priority: 'Low', reasoning: 'Early engagement drives long-term brand loyalty.', actionText: 'Send Invites' }
];

export const behaviourInsights = [
  { id: 1, metric: 'App Engagement', trend: '+12%', context: 'Driven by new rewards program' },
  { id: 2, metric: 'OVHC Page Views', trend: '+45%', context: 'Spike from Indian student cohort' },
  { id: 3, metric: 'Funnel Drop-off', trend: '-8%', context: 'Checkout flow improvements working' }
];

export const momentTracker = {
  exploringPlans: 124,
  inCheckout: 18,
  recentDropoffs: 42
};

export const studentSegments = [
  {
    id: 1,
    name: 'Dropped from Conversion Flow',
    description: 'Users dropped at pricing or checkout in the last 48 hours.',
    category: 'critical',
    count: 320,
    revenueOpp: '$210K',
    conversionPotential: 'High',
    behaviourContext: 'Dropped at pricing · Within last 48h',
    trend: '+15%',
    trendDirection: 'negative', // Note: negative business meaning, but we display red
    readinessScore: 82,
    readinessContext: 'Readiness to convert',
    action: 'Recover 320 users',
    drillDown: {
      insights: [
        'Highest drop-off occurs on the "Compare Plans" step.',
        '55% of this cohort are nursing students.',
        'Majority are accessing via iOS devices.'
      ],
      suggestedActions: [
        { title: 'Send abandoned cart email', impact: 'High' },
        { title: 'Trigger in-app discount notification', impact: 'Medium' }
      ],
      campaignHistory: [
        { name: 'End of Semester Nudge', date: 'Oct 12', conversion: '4.2%' }
      ]
    }
  },
  {
    id: 2,
    name: 'Low Engagement, At Risk',
    description: 'Inactive users for 14+ days with unread notifications.',
    category: 'critical',
    count: 840,
    revenueOpp: 'Churn Risk',
    conversionPotential: 'Medium',
    behaviourContext: 'Inactive 14+ days · Ignoring notifications',
    trend: '-5%',
    trendDirection: 'negative',
    readinessScore: 24,
    readinessContext: 'Engagement health',
    action: 'Re-activate users',
    drillDown: {
      insights: [
        'Engagement drops sharply after the first 30 days of arrival.',
        'Push notification open rates are below 5% for this group.'
      ],
      suggestedActions: [
        { title: 'Deploy "We miss you" re-engagement sequence', impact: 'High' },
        { title: 'Offer double health points for next login', impact: 'Medium' }
      ],
      campaignHistory: [
        { name: 'Re-engagement Q3', date: 'Sep 01', conversion: '1.8%' }
      ]
    }
  },
  {
    id: 3,
    name: 'Graduating in 60 Days',
    description: 'Highly active students nearing the end of their studies.',
    category: 'opportunity',
    count: 2100,
    revenueOpp: '$1.4M',
    conversionPotential: 'High',
    behaviourContext: 'Active weekly · Haven\'t explored OVHC yet',
    trend: '+40%',
    trendDirection: 'positive',
    readinessScore: 88,
    readinessContext: 'Readiness to convert',
    action: 'Convert 2,100 users',
    drillDown: {
      insights: [
        'This cohort has a 80% propensity to convert if nudged correctly.',
        'Most frequent app usage is checking rewards and health points.'
      ],
      suggestedActions: [
        { title: 'Push OVHC "Graduation Ready" offer', impact: 'High' },
        { title: 'Invite to "Graduate Visa Q&A" webinar', impact: 'High' }
      ],
      campaignHistory: [
        { name: 'Early Bird Graduate Offer', date: 'Oct 01', conversion: '12.4%' }
      ]
    }
  },
  {
    id: 4,
    name: 'High Engagement, Not Converted',
    description: 'Engaged users exploring app features but not OVHC.',
    category: 'opportunity',
    count: 3450,
    revenueOpp: '$2.1M',
    conversionPotential: 'Medium',
    behaviourContext: 'Exploring content · Checking app weekly',
    trend: '+12%',
    trendDirection: 'positive',
    readinessScore: 65,
    readinessContext: 'Readiness to convert',
    action: 'Nudge to convert',
    drillDown: {
      insights: [
        'High engagement with Mediguide AI assistant.',
        'Price sensitivity seems to be the main blocker.'
      ],
      suggestedActions: [
        { title: 'Trigger value-prop educational carousel', impact: 'Medium' },
        { title: 'Highlight "Extras" benefits via email', impact: 'Medium' }
      ],
      campaignHistory: [
        { name: 'Health Rewards Promo', date: 'Aug 15', conversion: '6.7%' }
      ]
    }
  },
  {
    id: 5,
    name: 'New Arrivals Cohort',
    description: 'Arrived in Australia in the last 30 days. High checklist usage.',
    category: 'growth',
    count: 4200,
    revenueOpp: 'LTV Building',
    conversionPotential: 'Low',
    behaviourContext: 'Arrived <30 days · High checklist usage',
    trend: '+22%',
    trendDirection: 'positive',
    readinessScore: 15,
    readinessContext: 'Readiness to convert',
    action: 'Foster engagement',
    drillDown: {
      insights: [
        '90% completion rate on the Pre-Arrival Checklist.',
        'High interest in finding local GPs and clinics.'
      ],
      suggestedActions: [
        { title: 'Send "First 30 Days" milestone badge', impact: 'Medium' },
        { title: 'Invite to University-specific community groups', impact: 'High' }
      ],
      campaignHistory: [
        { name: 'Welcome to Aus Onboarding', date: 'Continuous', conversion: 'N/A' }
      ]
    }
  },
  {
    id: 6,
    name: 'Community Leaders',
    description: 'Highly active in community forums and events. Frequently refers friends.',
    category: 'growth',
    count: 450,
    revenueOpp: 'Advocacy',
    conversionPotential: 'High',
    behaviourContext: 'High forum activity · Drives referrals',
    trend: 'Stable',
    trendDirection: 'neutral',
    readinessScore: 95,
    readinessContext: 'Readiness to convert',
    action: 'Reward advocacy',
    drillDown: {
      insights: [
        'Generates 3x more referrals than average users.',
        'Often answers questions in the "Navigating Healthcare" forum.'
      ],
      suggestedActions: [
        { title: 'Grant "Community Ambassador" status', impact: 'High' },
        { title: 'Send exclusive event invitations', impact: 'Medium' }
      ],
      campaignHistory: [
        { name: 'Refer-a-friend Boost', date: 'Jul 20', conversion: '24.5%' }
      ]
    }
  }
];

export const activeCampaigns = [
  { id: 1, name: 'Graduation Prep Nudge', channel: 'In-App', conversion: '8.4%', uplift: '+2.1%', revenue: '+$142k', status: 'Active' },
  { id: 2, name: 'Welcome to Australia', channel: 'Push', conversion: '12.1%', uplift: '+1.5%', revenue: '--', status: 'Active' },
  { id: 3, name: 'Visa Expiring Soon', channel: 'Email', conversion: '15.2%', uplift: '+4.8%', revenue: '+$315k', status: 'Active' }
];

export const funnelData = [
  { name: 'Eligible', value: 10000 },
  { name: 'Saw Nudge', value: 7500 },
  { name: 'Clicked', value: 4200 },
  { name: 'Viewed Plans', value: 2800 },
  { name: 'Started Checkout', value: 1500 },
  { name: 'Converted', value: 1420 }
];

export const recentActivity = [
  { id: 1, user: 'Student #4921', action: 'Viewed OVHC Plans', time: '2 mins ago' },
  { id: 2, user: 'Student #1103', action: 'Completed "First 30 Days" Journey', time: '15 mins ago' },
  { id: 3, user: 'Segment "At Risk"', action: 'Automated re-engagement push sent', time: '1 hr ago' },
  { id: 4, user: 'Student #8822', action: 'Converted to OVHC', time: '2 hrs ago' }
];
