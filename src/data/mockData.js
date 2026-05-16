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
  { 
    id: 1, 
    title: 'Launch "Graduation Ready" Push', 
    target: '2,100 graduating students', 
    impact: '+3.2% Conversion Lift', 
    impactValue: '+$240K',
    priority: 'High', 
    confidence: '91%',
    agent: 'Conversion Agent',
    reasoning: 'Students repeatedly explored OVHC pricing and attended visa webinars.', 
    actionText: 'Review Recommendation' 
  },
  { 
    id: 2, 
    title: 'Deploy WhatsApp Onboarding Sequence', 
    target: '840 at-risk users', 
    impact: '+18% Activation', 
    impactValue: '+$180K',
    priority: 'High', 
    confidence: '94%',
    agent: 'Activation Agent',
    reasoning: 'OTP verification failures impacting onboarding performance. WhatsApp outperforming email by 24%.', 
    actionText: 'Review & Approve' 
  },
  { 
    id: 3, 
    title: 'Invite to "Navigating Healthcare" Webinar', 
    target: 'New Arrivals Cohort', 
    impact: '+15% Engagement', 
    impactValue: 'LTV Boost',
    priority: 'Medium', 
    confidence: '88%',
    agent: 'Community Agent',
    reasoning: 'Students participating in community groups explore OVHC earlier.', 
    actionText: 'Review Recommendation' 
  }
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
    name: 'High-Intent OVHC Explorers',
    description: 'Highly active students exploring pricing and options.',
    generatedBy: 'Segmentation Agent',
    category: 'opportunity',
    count: 3450,
    revenueOpp: '+$2.1M',
    conversionPotential: 'High',
    trend: '+12%',
    trendDirection: 'positive',
    why: 'Users in this segment repeatedly explored OVHC pricing and participated in visa-related events.',
    signals: ['3+ OVHC page views', 'Visa webinar attendance', 'Active > 4x per week'],
    confidence: '94%',
    contributingAgents: ['Segmentation Agent', 'Conversion Agent'],
    recommendedActions: [
      { title: 'Trigger graduate transition campaign', impact: '+$180K', agent: 'Conversion Agent' }
    ],
    reviewDetails: {
      deepInsights: [
        '55% of this cohort are RMIT postgraduate nursing students.',
        'Highest exploration occurs on the "Compare Plans" step between 8 PM and 10 PM.',
        'Majority are accessing via iOS devices and checking rewards concurrently.'
      ],
      agentLogs: [
        { agent: 'Segmentation Agent', action: 'Clustered 3,450 users based on high weekly activity and visa status.', time: '2h ago' },
        { agent: 'Conversion Agent', action: 'Scored propensity to convert at 82% based on pricing page dwell time.', time: '1h ago' },
        { agent: 'Campaign Optimisation Agent', action: 'Determined in-app notifications outperform email by 3x for this cohort.', time: '30m ago' }
      ],
      projectedImpact: { metric: 'Conversion Rate', current: '4.2%', projected: '7.4%', timeframe: 'Next 14 Days' },
      executionSteps: [
        { step: 1, desc: 'Draft "Graduate Transition" in-app offer', status: 'ready' },
        { step: 2, desc: 'Target 3,450 users via iOS push', status: 'pending' },
        { step: 3, desc: 'Monitor conversion vs control group', status: 'pending' }
      ]
    }
  },
  {
    id: 2,
    name: 'Silent Churn Risk Cohort',
    description: 'Inactive users showing dropping engagement signals.',
    generatedBy: 'Retention Risk Agent',
    category: 'critical',
    count: 840,
    revenueOpp: '-$420K Risk',
    conversionPotential: 'Low',
    trend: '-5%',
    trendDirection: 'negative',
    why: 'Engagement dropped sharply after 30 days. Consistent ignoring of push notifications.',
    signals: ['0 logins in 14 days', 'Unread notifications > 5', 'Completed onboarding'],
    confidence: '88%',
    contributingAgents: ['Retention Risk Agent', 'Activation Agent'],
    recommendedActions: [
      { title: 'Deploy WhatsApp re-engagement sequence', impact: 'Recover 200 users', agent: 'Campaign Optimisation Agent' }
    ],
    reviewDetails: {
      deepInsights: [
        'Engagement drops sharply exactly 30 days after arrival in Australia.',
        'Push notification open rates are below 5% for this specific group.',
        'Most users in this cohort haven\'t completed their Medibank profile.'
      ],
      agentLogs: [
        { agent: 'Retention Risk Agent', action: 'Identified 840 users with dropping engagement signals over 14 days.', time: '5h ago' },
        { agent: 'Activation Agent', action: 'Correlated drop-off with incomplete profiles and unread notifications.', time: '4h ago' },
        { agent: 'Campaign Optimisation Agent', action: 'Recommended WhatsApp sequence to bypass ignored push notifications.', time: '3h ago' }
      ],
      projectedImpact: { metric: 'Re-activation Rate', current: '1.8%', projected: '12.5%', timeframe: 'Next 7 Days' },
      executionSteps: [
        { step: 1, desc: 'Generate personalized WhatsApp templates', status: 'ready' },
        { step: 2, desc: 'Deploy sequence to 840 users', status: 'pending' },
        { step: 3, desc: 'Track profile completion events', status: 'pending' }
      ]
    }
  },
  {
    id: 3,
    name: 'Community Ambassadors',
    description: 'Highly active in forums, driving peer referrals.',
    generatedBy: 'Referral Agent',
    category: 'growth',
    count: 450,
    revenueOpp: 'High LTV',
    conversionPotential: 'High',
    trend: '+18%',
    trendDirection: 'positive',
    why: 'Consistently answering forum questions and sharing referral links with peers.',
    signals: ['10+ forum posts', '3+ successful referrals', 'High MediGuide usage'],
    confidence: '96%',
    contributingAgents: ['Referral Agent', 'Community Agent'],
    recommendedActions: [
      { title: 'Grant "Community Ambassador" status', impact: '+35% referrals', agent: 'Referral Agent' }
    ],
    reviewDetails: {
      deepInsights: [
        'Generates 3x more referrals than average users.',
        'Often answers questions in the "Navigating Healthcare" forum.',
        'Highly responsive to gamification and point-based rewards.'
      ],
      agentLogs: [
        { agent: 'Referral Agent', action: 'Tracked a 38% increase in successful referrals from this cohort.', time: '1d ago' },
        { agent: 'Community Agent', action: 'Identified top 10% most active forum posters.', time: '20h ago' },
        { agent: 'Campaign Optimisation Agent', action: 'Suggested "Ambassador Status" badge to incentivize further sharing.', time: '18h ago' }
      ],
      projectedImpact: { metric: 'Referral Volume', current: '120/mo', projected: '250/mo', timeframe: 'Next 30 Days' },
      executionSteps: [
        { step: 1, desc: 'Create "Community Ambassador" badge', status: 'ready' },
        { step: 2, desc: 'Send exclusive event invitations to 450 users', status: 'pending' },
        { step: 3, desc: 'Increase referral bonus by 1.5x for this cohort', status: 'pending' }
      ]
    }
  },
  {
    id: 4,
    name: 'Activation Bottleneck Cohort',
    description: 'Users who dropped off during OTP verification.',
    generatedBy: 'Activation Agent',
    category: 'critical',
    count: 1200,
    revenueOpp: 'Blocked Value',
    conversionPotential: 'Medium',
    trend: '+8%',
    trendDirection: 'negative',
    why: 'High failure rate during international phone verification step.',
    signals: ['Failed OTP 2+ times', 'Abandoned at step 2', 'App deleted within 24h'],
    confidence: '92%',
    contributingAgents: ['Activation Agent', 'Segmentation Agent'],
    recommendedActions: [
      { title: 'Switch to email verification fallback', impact: '+12% activation', agent: 'Activation Agent' }
    ],
    reviewDetails: {
      deepInsights: [
        'High failure rate during international phone verification step.',
        '60% of failures are from users with Indian country codes.',
        'Users abandoning at this step rarely return without intervention.'
      ],
      agentLogs: [
        { agent: 'Activation Agent', action: 'Flagged 1,200 users stuck at OTP verification step 2.', time: '3h ago' },
        { agent: 'Segmentation Agent', action: 'Identified correlation with specific international country codes.', time: '2h ago' },
        { agent: 'Campaign Optimisation Agent', action: 'Recommended immediate switch to email verification fallback.', time: '1h ago' }
      ],
      projectedImpact: { metric: 'Activation Rate', current: '68%', projected: '80%', timeframe: 'Immediate' },
      executionSteps: [
        { step: 1, desc: 'Enable email verification fallback routing', status: 'ready' },
        { step: 2, desc: 'Send recovery email to 1,200 stuck users', status: 'pending' },
        { step: 3, desc: 'Monitor step 2 completion rates', status: 'pending' }
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

// --- NEW AI AGENT DATA ---

export const aiBriefing = {
  narrative: [
    "Referral-led OVHC conversions increased 18% this week.",
    "Students using MediGuide are converting 2.3x higher.",
    "OTP verification failures impacting onboarding performance."
  ],
  estimatedOpp: "+$420K",
  priorityCohort: "Monash Graduating Students",
  highestRisk: "Activation Drop-off",
  confidence: "92%"
};

export const aiFeed = [
  { id: 1, agent: 'Segmentation Agent', insight: 'Detected high-intent graduate cohort from RMIT.', impact: '+$120K opportunity', confidence: '88%', time: 'Just now' },
  { id: 2, agent: 'Referral Agent', insight: 'Ambassador activity increased 38% this week.', impact: 'High growth', confidence: '96%', time: '12m ago' },
  { id: 3, agent: 'Retention Risk Agent', insight: 'Silent churn risk detected among inactive students.', impact: '-$80K risk', confidence: '82%', time: '1h ago' },
  { id: 4, agent: 'Campaign Optimisation Agent', insight: 'WhatsApp onboarding sequence outperforming email by 24%.', impact: '+18% activation', confidence: '94%', time: '2h ago' }
];

export const approvalWorkflows = [
  { id: 1, action: 'Launch WhatsApp onboarding sequence', impact: '+18% activation uplift', agent: 'Activation Agent', status: 'Awaiting Review' },
  { id: 2, action: 'Trigger Monash Graduate Transition Campaign', impact: '+3.2% conversion uplift', agent: 'Conversion Agent', status: 'Awaiting Review' }
];

export const revenueImpactMetrics = {
  identifiedToday: '+$420K',
  referralProjected: '$1.2M',
  recoverableChurn: '$180K',
  conversionImprovement: '+2.4%'
};

export const agentCollaborationFlow = [
  { id: 1, agent: 'Segmentation Agent', action: 'identified high-intent graduate cohort' },
  { id: 2, agent: 'Conversion Agent', action: 'predicted strong OVHC likelihood' },
  { id: 3, agent: 'Campaign Optimisation Agent', action: 'recommended WhatsApp outreach' },
  { id: 4, agent: 'Referral Agent', action: 'suggested ambassador activation' },
  { id: 5, agent: 'Insight Narrator Agent', action: 'generated executive recommendation' }
];

export const executiveSummary = "Referral-led engagement continues to outperform traditional acquisition channels, while graduate transition cohorts remain the strongest near-term conversion opportunity. Overall system conversion tracking above target, offset by activation drop-offs needing intervention.";

// --- NEW SEGMENTATION AGENT DATA ---

export const segmentHero = {
  title: "Emerging High-Intent Cohort Detected",
  insight: "RMIT postgraduate students nearing graduation who attended healthcare webinars are showing 2.1x higher OVHC exploration behaviour.",
  revenueOpp: "+$420K",
  size: "3,240 students",
  conversionProb: "82%",
  confidence: "91%",
  agent: "Segmentation Agent",
  reviewDetails: {
    deepInsights: [
      'Webinar attendees spend 3x longer on the "Compare Plans" page than the average user.',
      '90% of this cohort will see their current student visa expire within 90 days.',
      'Significant overlap detected with high MediGuide interaction rates.'
    ],
    agentLogs: [
      { agent: 'Segmentation Agent', action: 'Correlated university CRM data with recent webinar attendance logs.', time: '12h ago' },
      { agent: 'Community Agent', action: 'Flagged a spike in visa-related forum questions from this specific group.', time: '8h ago' },
      { agent: 'Conversion Agent', action: 'Calculated an 82% propensity to convert if presented with an exclusive post-graduate offer.', time: '2h ago' }
    ],
    projectedImpact: { metric: 'Revenue Opportunity', current: '$0', projected: '+$420K', timeframe: 'Next 30 Days' },
    executionSteps: [
      { step: 1, desc: 'Generate "RMIT Graduate Exclusive" pricing tier', status: 'ready' },
      { step: 2, desc: 'Draft multi-channel campaign (Email + In-App)', status: 'ready' },
      { step: 3, desc: 'Deploy to 3,240 identified students', status: 'pending' }
    ]
  }
};

export const segmentEvolution = [
  { metric: "High-intent OVHC explorers", trend: "+22%", status: "growing" },
  { metric: "Community ambassadors", trend: "+18%", status: "growing" },
  { metric: "Silent churn risk users", trend: "-12%", status: "reducing" },
  { metric: "Activation drop-offs", trend: "+8%", status: "alert" }
];

export const behaviouralClusters = [
  { id: 'A', name: 'Cluster A: The Explorers', traits: ['Frequent MediGuide usage', 'High community activity', 'Strong OVHC intent'], size: '45%' },
  { id: 'B', name: 'Cluster B: The Disengaged', traits: ['Inactive after onboarding', 'No community engagement', 'High churn risk'], size: '20%' },
  { id: 'C', name: 'Cluster C: The Advocates', traits: ['Strong referral behaviour', 'High content sharing', 'Ambassador potential'], size: '35%' }
];

export const microSegments = [
  { insight: "Students attending visa webinars AND engaging with referral rewards convert 38% higher.", agent: "Conversion Agent" },
  { insight: "Users participating in community events show OVHC exploration 4 weeks earlier than average.", agent: "Community Agent" }
];

export const segmentActions = [
  { id: 1, recommendation: "Launch RMIT graduate transition campaign", impact: "+$240K", confidence: "91%", agent: "Conversion Agent" },
  { id: 2, recommendation: "Reward Monash ambassadors", impact: "+18% referrals", confidence: "96%", agent: "Referral Agent" },
  { id: 3, recommendation: "Push onboarding recovery sequence", impact: "Recover 6,200 users", confidence: "88%", agent: "Activation Agent" }
];

export const segmentSummaryStr = "Behaviour-driven segmentation indicates graduating students participating in community engagement and healthcare education content show the strongest OVHC conversion readiness. Prioritise RMIT and Monash transition campaigns to capture emerging intent.";

// --- ACTION STUDIO MOCK DATA ---

export const actionHero = {
  title: "Recommended High-Impact Intervention",
  action: "Launch a graduate transition sequence for Monash postgraduate students engaging with OVHC pricing content.",
  uplift: "+3.2%",
  revenue: "+$240K",
  size: "8,200 users",
  confidence: "91%",
  agents: ['Conversion Agent', 'Campaign Optimisation Agent', 'Referral Agent', 'Retention Risk Agent']
};

export const aiWorkflows = [
  {
    id: 1,
    name: "Graduate Transition Sequence",
    why: "Students repeatedly explored OVHC pricing and attended visa-related webinars.",
    agents: ['Conversion Agent', 'Segmentation Agent'],
    audience: "Final-year RMIT students",
    channels: "Email + In-App",
    timing: "45 days before expiry",
    impact: { uplift: "+12%", revenue: "+$180K" },
    confidence: "94%",
    triggerCondition: "Visa Expiry < 45 days AND Page Views include 'Pricing'",
    messageTitle: "Exclusive Graduate Offer",
    messageBody: "Congratulations on nearing graduation! Transition to our exclusive graduate OVHC tier today and get 2 months free."
  },
  {
    id: 2,
    name: "Silent Churn Re-engagement",
    why: "High drop-off detected after 30 days of inactivity, highly correlated with incomplete profiles.",
    agents: ['Retention Risk Agent', 'Campaign Optimisation Agent'],
    audience: "Inactive new arrivals (30+ days)",
    channels: "WhatsApp",
    timing: "Immediately",
    impact: { uplift: "Recover 400 users", revenue: "Mitigate -$85K risk" },
    confidence: "88%",
    triggerCondition: "Inactivity > 30 days AND Profile Status is 'Incomplete'",
    messageTitle: "Complete your Medibank Profile",
    messageBody: "Hey there! We noticed you haven't finished setting up your profile. Complete it today to unlock your full health cover benefits."
  },
  {
    id: 3,
    name: "Referral Ambassador Activation",
    why: "Referral momentum increased significantly among active community members answering forum queries.",
    agents: ['Referral Agent', 'Community Agent'],
    audience: "High-referral ambassadors",
    channels: "Push Notification",
    timing: "After 3rd successful referral",
    impact: { uplift: "+35% referral volume", revenue: "High LTV" },
    confidence: "96%",
    triggerCondition: "Successful Referrals >= 3",
    messageTitle: "You've unlocked Ambassador Status!",
    messageBody: "Thanks for sharing Medibank! You've been upgraded to Ambassador status. Your next referral will earn you double rewards."
  }
];

export const crossAgentFlow = [
  { agent: "Segmentation Agent", action: "Identified high-intent graduate cohort based on webinar logs" },
  { agent: "Conversion Agent", action: "Predicted 82% OVHC likelihood" },
  { agent: "Campaign Optimisation Agent", action: "Recommended WhatsApp outreach for highest open rate" },
  { agent: "Referral Agent", action: "Injected ambassador activation logic for post-purchase" }
];

export const performanceIntelligence = [
  { insight: "Graduate onboarding workflow increased OVHC exploration by 18%.", confidence: "94%", impact: "High" },
  { insight: "Referral ambassador sequence generated strongest engagement at Monash.", confidence: "89%", impact: "Medium" },
  { insight: "Push notifications outperform email for onboarding recovery by 2.4x.", confidence: "98%", impact: "High" }
];

export const optimisationRecommendations = [
  { title: "Shift onboarding communication to WhatsApp", why: "Email open rates for new arrivals have dropped below 15%.", projected: "+22% engagement", impact: "+$45K" },
  { title: "Add webinar CTA inside referral flows", why: "Users referring peers are 3x more likely to attend educational events.", projected: "+15% attendance", impact: "High LTV" }
];

export const approvalQueue = [
  { id: 1, name: "Graduate Referral Campaign", status: "Awaiting Approval", impact: "+$180K" },
  { id: 2, name: "Onboarding Recovery Flow", status: "Awaiting Review", impact: "Recover 1,200 users" }
];

export const actionSummaryStr = "Behaviour-driven intervention workflows targeting graduating students and referral ambassadors continue to generate the strongest projected conversion uplift opportunities. 2 high-impact workflows await human approval.";
