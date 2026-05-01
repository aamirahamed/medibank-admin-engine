import { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  AlertCircle, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  Target,
  BarChart2,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { 
  metrics, 
  activeCampaigns, 
  todaysPriorities,
  nextBestActions,
  behaviourInsights,
  momentTracker
} from '../data/mockData';

const CommandCentre = () => {
  const [toastMessage, setToastMessage] = useState('');

  const triggerAction = (actionName) => {
    setToastMessage(`Action triggered: ${actionName}`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="cockpit-container">
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle2 size={18} />
          {toastMessage}
        </div>
      )}

      <div className="cockpit-header flex-between">
        <div className="header-text">
          <h1>Command Centre</h1>
          <p>Real-time conversion cockpit and decision engine.</p>
        </div>
      </div>

      {/* 1. Today's Priorities - High Contrast Hero */}
      <section className="priorities-section">
        <div className="priorities-grid">
          {todaysPriorities.map(priority => (
            <div key={priority.id} className={`priority-card elevated-card ${priority.type}`}>
              <div className="p-card-content">
                <div className="p-header">
                  <div className="p-indicator"></div>
                  <span className="p-label text-uppercase">{priority.type}</span>
                </div>
                <h3 className="p-title">{priority.title}</h3>
                <p className="p-insight">{priority.insight}</p>
              </div>
              <div className="p-action">
                <button 
                  className={`btn-primary-action ${priority.type === 'urgent' ? 'btn-red' : ''}`}
                  onClick={() => triggerAction(priority.action)}
                >
                  {priority.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Upgraded KPI Cards - Depth & Scannability */}
      <section className="kpi-section mt-48">
        <div className="kpi-grid">
          <div className="kpi-card elevated-card">
            <div className="kpi-top">
              <span className="kpi-label">Graduating (&lt;60 days)</span>
              <div className="icon-box warning-box"><GraduationCap size={18} /></div>
            </div>
            <div className="kpi-main">
              <span className="kpi-number">{metrics.graduatingSoon.toLocaleString()}</span>
            </div>
            <div className="kpi-bottom">
              <span className="kpi-context text-warning">High conversion opportunity</span>
              <button className="kpi-cta text-warning" onClick={() => triggerAction('Target Graduating Cohort')}>Target Now</button>
            </div>
          </div>

          <div className="kpi-card elevated-card">
            <div className="kpi-top">
              <span className="kpi-label">At-Risk Users</span>
              <div className="icon-box danger-box"><AlertCircle size={18} /></div>
            </div>
            <div className="kpi-main">
              <span className="kpi-number">{metrics.atRisk}</span>
            </div>
            <div className="kpi-bottom">
              <span className="kpi-context text-danger">Engagement dropped recently</span>
              <button className="kpi-cta text-danger" onClick={() => triggerAction('Re-engage At-Risk')}>Re-engage</button>
            </div>
          </div>

          <div className="kpi-card elevated-card">
            <div className="kpi-top">
              <span className="kpi-label">Conversion Rate</span>
              <div className="icon-box success-box"><TrendingUp size={18} /></div>
            </div>
            <div className="kpi-main">
              <span className="kpi-number">{metrics.conversionRate}%</span>
            </div>
            <div className="kpi-bottom">
              <span className="kpi-context text-success">Tracking above target (+0.8%)</span>
            </div>
          </div>

          <div className="kpi-card elevated-card">
            <div className="kpi-top">
              <span className="kpi-label">Total OSHC Users</span>
              <div className="icon-box neutral-box"><Users size={18} /></div>
            </div>
            <div className="kpi-main">
              <span className="kpi-number">{metrics.totalOshc.toLocaleString()}</span>
            </div>
            <div className="kpi-bottom">
              <span className="kpi-context text-muted">Stable user base</span>
            </div>
          </div>
        </div>
      </section>

      <div className="split-layout mt-48">
        {/* Left Column - HERO NEXT BEST ACTIONS */}
        <div className="column-main">
          <section className="nba-section">
            <div className="section-head">
              <div className="head-title">
                <Sparkles size={20} className="text-accent" />
                <h2>Next Best Actions</h2>
              </div>
              <span className="ai-badge">AI Recommended</span>
            </div>
            
            <div className="nba-list">
              {nextBestActions.map(action => (
                <div key={action.id} className="nba-hero-card elevated-card">
                  <div className="nba-card-top">
                    <span className={`nba-priority-tag ${action.priority.toLowerCase()}`}>
                      {action.priority} Priority
                    </span>
                    <div className="nba-impact-badge">
                      Impact: <strong>{action.impact}</strong>
                    </div>
                  </div>
                  
                  <h3 className="nba-card-title">{action.title}</h3>
                  <p className="nba-target-text">Targeting: <span className="text-bright">{action.target}</span></p>
                  
                  <div className="nba-reasoning-box">
                    <p>{action.reasoning}</p>
                  </div>
                  
                  <div className="nba-card-bottom">
                    <button className="btn-primary-hero" onClick={() => triggerAction(action.actionText)}>
                      {action.actionText} <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upgraded Campaigns */}
          <section className="campaigns-section mt-48">
            <div className="section-head">
              <div className="head-title">
                <Target size={20} className="text-muted" />
                <h2>Campaign Performance</h2>
              </div>
            </div>
            <div className="campaign-table elevated-card">
              <div className="ct-header">
                <div className="ct-col">Campaign Name</div>
                <div className="ct-col text-right">Conv. Rate</div>
                <div className="ct-col text-right">Uplift</div>
                <div className="ct-col text-right">Est. Revenue</div>
              </div>
              <div className="ct-body">
                {activeCampaigns.map(camp => (
                  <div key={camp.id} className="ct-row">
                    <div className="ct-col">
                      <strong className="c-name">{camp.name}</strong>
                      <span className="c-channel">{camp.channel}</span>
                    </div>
                    <div className="ct-col text-right c-metric">{camp.conversion}</div>
                    <div className="ct-col text-right c-uplift text-success">{camp.uplift}</div>
                    <div className="ct-col text-right c-revenue text-success">{camp.revenue}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - LIVE TRACKER & BEHAVIOUR */}
        <div className="column-side">
          <section className="live-tracker-section">
            <div className="section-head">
              <div className="head-title">
                <Clock size={20} className="text-muted" />
                <h2>Live Conversion Tracker</h2>
              </div>
              <div className="live-indicator">
                <span className="pulse-dot"></span> Live
              </div>
            </div>
            
            <div className="tracker-card elevated-card">
              <div className="tracker-funnel">
                <div className="tf-stage">
                  <span className="tf-number">{momentTracker.exploringPlans}</span>
                  <span className="tf-label">Exploring Plans</span>
                </div>
                <div className="tf-connector">
                  <div className="tf-line"></div>
                  <div className="tf-arrow"></div>
                </div>
                <div className="tf-stage">
                  <span className="tf-number text-accent">{momentTracker.inCheckout}</span>
                  <span className="tf-label">In Checkout</span>
                </div>
              </div>
              
              <div className="tracker-alert-box">
                <AlertCircle size={16} className="text-warning" />
                <div className="alert-content">
                  <span className="alert-value">{momentTracker.recentDropoffs} drop-offs</span> in the last hour.
                </div>
                <button className="text-link text-warning" onClick={() => triggerAction('Retarget Drop-offs')}>Retarget</button>
              </div>
            </div>
          </section>

          <section className="behaviour-section mt-48">
            <div className="section-head">
              <div className="head-title">
                <BarChart2 size={20} className="text-muted" />
                <h2>Behaviour Shifts (24h)</h2>
              </div>
            </div>
            
            <div className="behaviour-list elevated-card">
              {behaviourInsights.map(insight => (
                <div key={insight.id} className="b-item">
                  <div className="b-item-info">
                    <span className="b-metric">{insight.metric}</span>
                    <span className="b-context">{insight.context}</span>
                  </div>
                  <div className={`b-trend ${insight.trend.startsWith('+') ? 'trend-up' : 'trend-down'}`}>
                    {insight.trend}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style>{`
        /* 
          LINEAR / STRIPE INSPIRED DARK THEME
          High contrast, deep blacks, subtle gradients, crisp typography
        */
        
        .cockpit-container {
          --bg-dark: #0A0A0A;
          --card-bg: #111214;
          --card-border: rgba(255, 255, 255, 0.08);
          --card-border-hover: rgba(255, 255, 255, 0.15);
          
          --text-bright: #FFFFFF;
          --text-main: #EDEDED;
          --text-muted: #8A8F98;
          
          --medibank-red: #E60028;
          --medibank-red-hover: #FF1A43;
          
          --color-success: #10B981;
          --color-warning: #F5A623;
          --color-danger: #EF4444;
          --color-accent: #3B82F6;

          color: var(--text-main);
          padding-bottom: 64px;
        }

        .mt-48 { margin-top: 48px; }
        .text-uppercase { text-transform: uppercase; letter-spacing: 1px; }
        .text-bright { color: var(--text-bright); font-weight: 500; }
        .text-muted { color: var(--text-muted); }
        .text-warning { color: var(--color-warning); }
        .text-danger { color: var(--color-danger); }
        .text-success { color: var(--color-success); }
        .text-accent { color: var(--color-accent); }

        /* Typography */
        h1, h2, h3, h4 { color: var(--text-bright); letter-spacing: -0.02em; }
        
        .cockpit-header { margin-bottom: 40px; }
        .header-text h1 { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
        .header-text p { font-size: 15px; color: var(--text-muted); }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .head-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .head-title h2 {
          font-size: 18px;
          font-weight: 600;
        }

        /* Elevated Cards (Linear Style) */
        .elevated-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05);
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .elevated-card:hover {
          border-color: var(--card-border-hover);
          box-shadow: 0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* Buttons */
        .btn-primary-action {
          background: var(--text-bright);
          color: var(--bg-dark);
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-primary-action:hover { background: #E2E8F0; transform: translateY(-1px); }
        .btn-primary-action.btn-red {
          background: var(--medibank-red);
          color: white;
        }
        .btn-primary-action.btn-red:hover {
          background: var(--medibank-red-hover);
          box-shadow: 0 4px 12px rgba(230, 0, 40, 0.3);
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: var(--medibank-red);
          color: white;
          border: none;
          padding: 14px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(230, 0, 40, 0.2);
        }
        .btn-primary-hero:hover {
          background: var(--medibank-red-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(230, 0, 40, 0.4);
        }

        .text-link {
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
        }
        .text-link:hover { text-decoration: underline; text-underline-offset: 4px; }

        /* 1. Priorities Grid */
        .priorities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }
        .priority-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          overflow: hidden;
        }
        .priority-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
        }
        .priority-card.urgent::before { background: var(--color-danger); }
        .priority-card.warning::before { background: var(--color-warning); }
        .priority-card.opportunity::before { background: var(--color-success); }
        
        .p-header { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
        .p-indicator { width: 8px; height: 8px; border-radius: 50%; }
        .urgent .p-indicator { background: var(--color-danger); box-shadow: 0 0 8px var(--color-danger); }
        .warning .p-indicator { background: var(--color-warning); box-shadow: 0 0 8px var(--color-warning); }
        .opportunity .p-indicator { background: var(--color-success); box-shadow: 0 0 8px var(--color-success); }
        
        .p-label { font-size: 11px; font-weight: 700; color: var(--text-muted); }
        .p-title { font-size: 18px; margin-bottom: 6px; line-height: 1.3; }
        .p-insight { font-size: 14px; color: var(--text-muted); line-height: 1.5; }
        .p-action { margin-top: auto; }

        /* 2. KPI Cards */
        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }
        .kpi-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
        }
        .kpi-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .kpi-label { font-size: 14px; font-weight: 500; color: var(--text-muted); }
        
        .icon-box {
          width: 32px; height: 32px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        }
        .warning-box { background: rgba(245, 166, 35, 0.1); color: var(--color-warning); }
        .danger-box { background: rgba(239, 68, 68, 0.1); color: var(--color-danger); }
        .success-box { background: rgba(16, 185, 129, 0.1); color: var(--color-success); }
        .neutral-box { background: rgba(59, 130, 246, 0.1); color: var(--color-accent); }

        .kpi-main { margin-bottom: 24px; }
        .kpi-number { font-size: 36px; font-weight: 700; letter-spacing: -1px; color: var(--text-bright); }
        
        .kpi-bottom {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06);
        }
        .kpi-context { font-size: 13px; font-weight: 500; }

        /* Layout Split */
        .split-layout {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 40px;
        }

        /* Hero Next Best Actions */
        .ai-badge {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(230, 0, 40, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: var(--text-bright);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .nba-list { display: flex; flex-direction: column; gap: 24px; }
        .nba-hero-card {
          padding: 32px;
          background: linear-gradient(180deg, rgba(22, 24, 29, 0.8) 0%, rgba(17, 18, 20, 0.8) 100%);
        }
        
        .nba-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .nba-priority-tag {
          font-size: 12px; font-weight: 700; text-transform: uppercase;
          padding: 4px 10px; border-radius: 6px;
        }
        .nba-priority-tag.high { background: rgba(239, 68, 68, 0.15); color: #FF6B6B; }
        .nba-priority-tag.medium { background: rgba(245, 166, 35, 0.15); color: #F5A623; }
        .nba-priority-tag.low { background: rgba(16, 185, 129, 0.15); color: #10B981; }

        .nba-impact-badge {
          font-size: 13px; color: var(--color-success); font-weight: 500;
          background: rgba(16, 185, 129, 0.1); padding: 4px 10px; border-radius: 6px;
        }

        .nba-card-title { font-size: 22px; font-weight: 600; margin-bottom: 8px; }
        .nba-target-text { font-size: 15px; color: var(--text-muted); margin-bottom: 24px; }
        
        .nba-reasoning-box {
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.04);
          padding: 16px;
          border-radius: 10px;
          margin-bottom: 24px;
        }
        .nba-reasoning-box p { font-size: 14px; color: var(--text-main); line-height: 1.6; }

        /* Campaign Table */
        .campaign-table { padding: 12px 24px; }
        .ct-header {
          display: grid; grid-template-columns: 2.5fr 1fr 1fr 1fr;
          padding: 16px 0; border-bottom: 1px solid var(--card-border);
          font-size: 12px; font-weight: 600; color: var(--text-muted); text-transform: uppercase;
        }
        .ct-row {
          display: grid; grid-template-columns: 2.5fr 1fr 1fr 1fr;
          padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
          align-items: center; transition: background 0.2s;
        }
        .ct-row:hover { background: rgba(255,255,255,0.02); }
        .ct-row:last-child { border-bottom: none; }
        .ct-col { display: flex; flex-direction: column; justify-content: center; }
        .text-right { text-align: right; align-items: flex-end; }
        
        .c-name { font-size: 15px; color: var(--text-bright); margin-bottom: 4px; }
        .c-channel { font-size: 13px; color: var(--text-muted); }
        .c-metric { font-size: 15px; font-weight: 500; }
        .c-uplift { font-size: 15px; font-weight: 600; }
        .c-revenue { font-size: 15px; font-weight: 700; }

        /* Live Tracker */
        .live-indicator {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 600; color: var(--color-success);
          background: rgba(16, 185, 129, 0.1); padding: 4px 10px; border-radius: 6px;
        }
        .pulse-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--color-success);
          box-shadow: 0 0 8px var(--color-success); animation: pulse 2s infinite;
        }

        .tracker-card { padding: 32px; }
        .tracker-funnel {
          display: flex; align-items: center; justify-content: space-between;
          padding: 32px 0 40px;
        }
        .tf-stage { text-align: center; flex: 1; }
        .tf-number { display: block; font-size: 48px; font-weight: 700; color: var(--text-bright); letter-spacing: -2px; margin-bottom: 8px; }
        .tf-label { font-size: 14px; font-weight: 500; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
        
        .tf-connector { flex: 1; display: flex; align-items: center; position: relative; padding: 0 20px; }
        .tf-line { height: 2px; width: 100%; background: linear-gradient(90deg, rgba(255,255,255,0.1), var(--color-accent)); opacity: 0.6; }
        .tf-arrow {
          position: absolute; right: 20px; width: 8px; height: 8px;
          border-top: 2px solid var(--color-accent); border-right: 2px solid var(--color-accent);
          transform: rotate(45deg);
        }

        .tracker-alert-box {
          display: flex; align-items: center; gap: 12px;
          background: rgba(245, 166, 35, 0.1); border: 1px solid rgba(245, 166, 35, 0.2);
          padding: 16px 20px; border-radius: 10px;
        }
        .alert-content { flex: 1; font-size: 14px; color: var(--text-main); }
        .alert-value { font-weight: 600; color: var(--color-warning); }

        /* Behaviour Shifts */
        .behaviour-list { padding: 8px 24px; }
        .b-item {
          display: flex; justify-content: space-between; align-items: center;
          padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .b-item:last-child { border-bottom: none; }
        .b-item-info { display: flex; flex-direction: column; gap: 6px; }
        .b-metric { font-size: 16px; font-weight: 500; color: var(--text-bright); }
        .b-context { font-size: 14px; color: var(--text-muted); }
        .b-trend {
          font-size: 15px; font-weight: 600; padding: 6px 12px; border-radius: 6px;
        }
        .trend-up { background: rgba(16, 185, 129, 0.1); color: var(--color-success); }
        .trend-down { background: rgba(239, 68, 68, 0.1); color: var(--color-danger); }

      `}</style>
    </div>
  );
};

export default CommandCentre;
