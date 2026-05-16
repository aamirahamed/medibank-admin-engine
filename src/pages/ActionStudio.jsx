import { useState } from 'react';
import { 
  Bot, Sparkles, TrendingUp, AlertCircle, ArrowRight, Activity, Network, Zap, 
  Users, Crosshair, ChevronRight, BarChart3, CheckCircle2, ShieldAlert, Target,
  GitMerge, Settings, Clock, Mail, MessageSquare, Smartphone, Bell, ChevronDown, X
} from 'lucide-react';
import { 
  actionHero,
  aiWorkflows,
  crossAgentFlow,
  performanceIntelligence,
  optimisationRecommendations,
  approvalQueue,
  actionSummaryStr
} from '../data/mockData';

const ActionStudio = () => {
  const [toastMessage, setToastMessage] = useState('');
  const [activeWorkflow, setActiveWorkflow] = useState(null);

  const triggerAction = (actionName) => {
    setToastMessage(`Action triggered: ${actionName}`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="cockpit-container page-layer">
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle2 size={18} />
          {toastMessage}
        </div>
      )}

      <div className="cockpit-header flex-between">
        <div className="header-text">
          <h1>Action Studio</h1>
          <p>AI-assisted operational decision and intervention workspace.</p>
        </div>
        <div className="live-status-badge">
          <span className="pulse-dot-accent"></span>
          Intervention Engine Active
        </div>
      </div>

      {/* 1. AI OPERATIONAL RECOMMENDATIONS HERO */}
      <section className="action-hero-section">
        <div className="hero-glow-bg"></div>
        <div className="ah-header">
          <div className="ah-title-group">
            <Sparkles size={24} className="text-warning" />
            <h2>{actionHero.title}</h2>
          </div>
        </div>
        
        <div className="ah-content">
          <p className="ah-action-text">"{actionHero.action}"</p>
          
          <div className="ah-metrics">
            <div className="ah-metric-box opp-box">
              <span className="ah-label">Est. Revenue Impact</span>
              <span className="ah-value text-success">{actionHero.revenue}</span>
            </div>
            <div className="ah-metric-box opp-box">
              <span className="ah-label">Conversion Uplift</span>
              <span className="ah-value text-success">{actionHero.uplift}</span>
            </div>
            <div className="ah-metric-box">
              <span className="ah-label">Audience Size</span>
              <span className="ah-value">{actionHero.size}</span>
            </div>
            <div className="ah-metric-box">
              <span className="ah-label">AI Confidence</span>
              <span className="ah-value text-warning">{actionHero.confidence}</span>
            </div>
          </div>

          <div className="ah-agents">
            <span className="text-muted text-sm font-semibold uppercase tracking-wider mb-8 block">Contributing Agents</span>
            <div className="agent-tags">
              {actionHero.agents.map((ag, i) => (
                <span key={i} className="agent-tag bg-warning-dim text-warning"><Bot size={12}/> {ag}</span>
              ))}
            </div>
          </div>
          
          <div className="ah-actions mt-32">
            <button className="btn-primary-action btn-warning-gradient" onClick={() => triggerAction('Approve & Launch')}>
              <Zap size={16} /> Approve Recommendation
            </button>
            <button className="btn-outline" onClick={() => triggerAction('Review Workflow')}>Review Workflow</button>
            <button className="btn-outline" onClick={() => triggerAction('View Reasoning')}>View Reasoning</button>
          </div>
        </div>
      </section>

      <div className="split-layout mt-48">
        {/* LEFT COLUMN: INTERVENTIONS & REASONING */}
        <div className="column-main">
          
          {/* 2. AI-RECOMMENDED WORKFLOWS SECTION */}
          <section className="recommended-workflows-section">
            <div className="section-head">
              <div className="head-title">
                <Target size={20} className="text-accent" />
                <h2>AI-Suggested Interventions</h2>
              </div>
              <span className="ai-badge">Awaiting Human Review</span>
            </div>

            <div className="workflows-list">
              {aiWorkflows.map(wf => (
                <div key={wf.id} className="workflow-card elevated-card">
                  <div className="wf-header">
                    <h3 className="wf-name">{wf.name}</h3>
                    <div className="wf-confidence"><Bot size={14}/> Confidence: <span className="text-accent">{wf.confidence}</span></div>
                  </div>

                  <div className="wf-why-box">
                    <span className="wf-section-label">Why This Was Recommended:</span>
                    <p>{wf.why}</p>
                  </div>

                  <div className="wf-grid">
                    <div className="wf-grid-item">
                      <span className="wf-label"><Users size={14}/> Audience</span>
                      <span className="wf-val">{wf.audience}</span>
                    </div>
                    <div className="wf-grid-item">
                      <span className="wf-label"><Smartphone size={14}/> Channels</span>
                      <span className="wf-val">{wf.channels}</span>
                    </div>
                    <div className="wf-grid-item">
                      <span className="wf-label"><Clock size={14}/> Timing</span>
                      <span className="wf-val">{wf.timing}</span>
                    </div>
                    <div className="wf-grid-item border-l-success pl-16">
                      <span className="wf-label text-success"><TrendingUp size={14}/> Business Impact</span>
                      <span className="wf-val text-success font-semibold">{wf.impact.revenue} <span className="text-muted text-sm font-normal ml-8">{wf.impact.uplift}</span></span>
                    </div>
                  </div>

                  <div className="wf-agents-row mt-24">
                    <span className="wf-label inline-block mr-12"><Network size={14}/> Generated By:</span>
                    {wf.agents.map((ag, i) => <span key={i} className="agent-tag text-muted"><Bot size={12}/> {ag}</span>)}
                  </div>

                  <div className="wf-footer">
                    <button className="btn-primary-action" onClick={() => setActiveWorkflow(wf)}>
                      Review Workflow <ArrowRight size={14} />
                    </button>
                    <button className="btn-outline-small" onClick={() => setActiveWorkflow(wf)}>Modify Before Launch</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. CROSS-AGENT COLLABORATION FLOW */}
          <section className="collaboration-flow-section mt-48">
             <div className="section-head">
              <div className="head-title">
                <GitMerge size={20} className="text-warning" />
                <h2>Cross-Agent Orchestration Flow</h2>
              </div>
            </div>
            <div className="flow-container elevated-card">
              <div className="flow-path">
                {crossAgentFlow.map((step, idx) => (
                  <div key={idx} className="flow-step">
                    <div className="fs-icon"><Bot size={18} className="text-warning"/></div>
                    <div className="fs-content">
                      <span className="fs-agent">{step.agent}</span>
                      <p className="fs-action">{step.action}</p>
                    </div>
                    {idx < crossAgentFlow.length - 1 && <div className="fs-connector"><ChevronDown size={20} className="text-muted"/></div>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: GOVERNANCE & INTELLIGENCE */}
        <div className="column-side">
          
          {/* 4. OPERATIONAL IMPACT PREVIEW */}
          <section className="impact-preview-section">
            <div className="section-head">
              <div className="head-title">
                <Activity size={20} className="text-success" />
                <h2>Projected Impact Preview</h2>
              </div>
            </div>
            <div className="impact-dashboard elevated-card">
              <div className="id-metric border-b">
                <span className="id-label">Total Est. Revenue Opportunity</span>
                <span className="id-value text-success">+$420K</span>
              </div>
              <div className="id-metric border-b">
                <span className="id-label">Average Conversion Uplift</span>
                <span className="id-value text-accent">+2.8%</span>
              </div>
              <div className="id-metric">
                <span className="id-label">Total Students Affected</span>
                <span className="id-value">12,650</span>
              </div>
            </div>
          </section>

          {/* 8. HUMAN APPROVAL GOVERNANCE PANEL */}
          <section className="governance-panel-section mt-48">
            <div className="section-head">
              <div className="head-title">
                <ShieldAlert size={20} className="text-danger" />
                <h2>Human Approval Queue</h2>
              </div>
            </div>
            <div className="governance-list">
              {approvalQueue.map((item, idx) => (
                <div key={idx} className="gov-card elevated-card border-l-danger">
                  <div className="flex-between mb-8">
                    <span className="gov-title">{item.name}</span>
                    <span className="status-badge bg-danger-dim text-danger">{item.status}</span>
                  </div>
                  <div className="flex-between align-end">
                    <span className="gov-impact text-success font-semibold">{item.impact}</span>
                    <button className="btn-outline-small" onClick={() => triggerAction('Review & Approve')}>Review & Approve</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. LIVE WORKFLOW PERFORMANCE INTELLIGENCE */}
          <section className="performance-intelligence-section mt-48">
            <div className="section-head">
              <div className="head-title">
                <Activity size={20} className="text-accent" />
                <h2>Live Performance Insights</h2>
              </div>
            </div>
            <div className="pi-list">
              {performanceIntelligence.map((pi, idx) => (
                <div key={idx} className="pi-card elevated-card">
                  <p className="pi-insight">"{pi.insight}"</p>
                  <div className="flex-between mt-12">
                    <span className="pi-meta"><Bot size={12}/> Conf: {pi.confidence}</span>
                    <span className={`pi-impact ${pi.impact === 'High' ? 'text-success' : 'text-warning'}`}>{pi.impact} Impact</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. RECOMMENDED OPTIMISATIONS PANEL */}
          <section className="optimisation-section mt-48">
             <div className="section-head">
              <div className="head-title">
                <Settings size={20} className="text-warning" />
                <h2>Proactive Optimisations</h2>
              </div>
            </div>
            <div className="opt-list">
              {optimisationRecommendations.map((opt, idx) => (
                <div key={idx} className="opt-card elevated-card">
                  <h4 className="opt-title">{opt.title}</h4>
                  <p className="opt-why">{opt.why}</p>
                  <div className="opt-metrics">
                    <span className="opt-proj text-success">{opt.projected}</span>
                    <button className="btn-text-action text-accent" onClick={() => triggerAction('Apply Tweak')}>Apply Tweak <ChevronRight size={14}/></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* 9. EXECUTIVE ACTION SUMMARY */}
      <section className="executive-summary-section mt-48 elevated-card">
        <div className="es-icon">
          <BarChart3 size={24} className="text-warning" />
        </div>
        <div className="es-content">
          <span className="es-label">Strategic Action Summary · Generated by Insight Narrator</span>
          <p className="es-text">"{actionSummaryStr}"</p>
        </div>
      </section>

      {activeWorkflow && (
        <WorkflowReviewModal 
          workflow={activeWorkflow} 
          onClose={() => setActiveWorkflow(null)} 
          onApprove={() => {
            triggerAction(`Activated: ${activeWorkflow.name}`);
            setActiveWorkflow(null);
          }} 
        />
      )}

      <style>{`
        /* 
          DEEP DARK PREMIUM THEME
          Apple/Stripe/Linear inspired for AI operations
        */
        
        .cockpit-container {
          --bg-dark: #070709;
          --card-bg: #101114;
          --card-border: rgba(255, 255, 255, 0.05);
          --card-border-hover: rgba(255, 255, 255, 0.12);
          
          --text-bright: #FFFFFF;
          --text-main: #E2E8F0;
          --text-muted: #8B949E;
          
          --color-success: #10B981;
          --color-warning: #F5A623;
          --color-danger: #EF4444;
          --color-accent: #8A2BE2; /* Intelligence Purple */

          background-color: var(--bg-dark);
          color: var(--text-main);
          padding-bottom: 80px;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .mt-12 { margin-top: 12px; }
        .mt-24 { margin-top: 24px; }
        .mt-32 { margin-top: 32px; }
        .mt-48 { margin-top: 48px; }
        .mb-8 { margin-bottom: 8px; }
        .ml-8 { margin-left: 8px; }
        .mr-12 { margin-right: 12px; }
        .pl-16 { padding-left: 16px; }

        .text-bright { color: var(--text-bright); font-weight: 500; }
        .text-muted { color: var(--text-muted); }
        .text-warning { color: var(--color-warning); }
        .text-danger { color: var(--color-danger); }
        .text-success { color: var(--color-success); }
        .text-accent { color: var(--color-accent); }
        .font-semibold { font-weight: 600; }
        .font-normal { font-weight: 400; }
        .uppercase { text-transform: uppercase; }
        .tracking-wider { letter-spacing: 0.05em; }
        .block { display: block; }
        .inline-block { display: inline-block; }
        .text-sm { font-size: 12px; }

        .bg-warning-dim { background: rgba(245, 166, 35, 0.1); border: 1px solid rgba(245, 166, 35, 0.2); }
        .bg-danger-dim { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); }

        h1, h2, h3, h4 { color: var(--text-bright); letter-spacing: -0.02em; margin:0; }
        
        .cockpit-header { margin-bottom: 40px; }
        .header-text h1 { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
        .header-text p { font-size: 15px; color: var(--text-muted); }
        
        .flex-between { display: flex; justify-content: space-between; align-items: center; }
        .flex-center { display: flex; align-items: center; }
        .align-end { align-items: flex-end; }

        .live-status-badge {
          display: flex; align-items: center; gap: 8px;
          background: rgba(245, 166, 35, 0.1);
          color: var(--color-warning);
          padding: 6px 12px; border-radius: 20px;
          font-size: 13px; font-weight: 600;
          border: 1px solid rgba(245, 166, 35, 0.2);
        }
        .pulse-dot-accent {
          width: 8px; height: 8px; border-radius: 50%; background: var(--color-warning);
          box-shadow: 0 0 10px var(--color-warning); animation: pulseWarning 2s infinite;
        }

        .section-head {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 24px; padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .head-title { display: flex; align-items: center; gap: 10px; }
        .head-title h2 { font-size: 18px; font-weight: 600; }

        .elevated-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03);
          transition: all 0.2s ease;
        }
        .elevated-card:hover {
          border-color: var(--card-border-hover);
          box-shadow: 0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        /* 1. Hero */
        .action-hero-section {
          position: relative; padding: 40px; border-radius: 16px;
          background: linear-gradient(180deg, #1A130D 0%, #0D0B0A 100%);
          border: 1px solid rgba(245, 166, 35, 0.2);
          overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .hero-glow-bg {
          position: absolute; top: -50%; right: -10%; width: 100%; height: 200%;
          background: radial-gradient(circle at top right, rgba(245, 166, 35, 0.15), transparent 60%);
          pointer-events: none; z-index: 0;
        }
        .ah-header, .ah-content { position: relative; z-index: 1; }
        .ah-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
        .ah-title-group { display: flex; align-items: center; gap: 12px; }
        .ah-title-group h2 { font-size: 24px; font-weight: 600; }
        
        .ah-action-text { font-size: 28px; line-height: 1.3; color: var(--text-bright); margin-bottom: 32px; font-weight: 700; max-width: 85%; letter-spacing: -0.5px; }
        
        .ah-metrics { display: flex; gap: 24px; margin-bottom: 32px; }
        .ah-metric-box {
          background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05);
          padding: 16px 24px; border-radius: 10px; display: flex; flex-direction: column; gap: 6px;
        }
        .opp-box { background: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.2); }
        .ah-label { font-size: 12px; text-transform: uppercase; color: var(--text-muted); font-weight: 600;}
        .ah-value { font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
        
        .ah-actions { display: flex; gap: 16px; }

        .btn-primary-action {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: var(--text-bright); color: var(--bg-dark);
          border: none; padding: 12px 24px; border-radius: 8px;
          font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;
        }
        .btn-primary-action:hover { background: #E2E8F0; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(255,255,255,0.1); }
        
        .btn-warning-gradient { background: linear-gradient(135deg, #F5A623 0%, #D48806 100%); color: #000; box-shadow: 0 4px 15px rgba(245, 166, 35, 0.2); }
        .btn-warning-gradient:hover { background: linear-gradient(135deg, #F5A623 0%, #D48806 100%); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(245, 166, 35, 0.4); }

        .btn-outline {
          background: transparent; color: var(--text-bright);
          border: 1px solid rgba(255,255,255,0.2); padding: 12px 24px; border-radius: 8px;
          font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.05); }

        .btn-outline-small {
          background: transparent; color: var(--text-bright);
          border: 1px solid rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 6px;
          font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;
        }
        .btn-outline-small:hover { background: rgba(255,255,255,0.05); }

        .btn-text-action { background: none; border: none; padding: 0; font-size: 13px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 4px; }
        .btn-text-action:hover { opacity: 0.8; }

        /* Layout Split */
        .split-layout { display: grid; grid-template-columns: 1.8fr 1fr; gap: 40px; }

        /* 2. Workflows */
        .ai-badge {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-main); padding: 4px 10px; border-radius: 6px;
          font-size: 12px; font-weight: 600;
        }
        
        .workflows-list { display: flex; flex-direction: column; gap: 24px; }
        .workflow-card { padding: 32px; display: flex; flex-direction: column; gap: 20px; border-top: 3px solid var(--color-accent); }

        .wf-header { display: flex; justify-content: space-between; align-items: flex-start; }
        .wf-name { font-size: 20px; font-weight: 700; color: var(--text-bright); }
        .wf-confidence { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; background: rgba(138,43,226,0.1); padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(138,43,226,0.2); }

        .wf-why-box { background: rgba(255,255,255,0.02); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); }
        .wf-section-label { font-size: 12px; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 8px; display: block; }
        .wf-why-box p { font-size: 15px; color: var(--text-bright); margin: 0; line-height: 1.5; font-style: italic; }

        .wf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 8px; }
        .wf-grid-item { display: flex; flex-direction: column; gap: 6px; }
        .wf-label { font-size: 12px; color: var(--text-muted); font-weight: 600; display: flex; align-items: center; gap: 6px; text-transform: uppercase; }
        .wf-val { font-size: 14px; font-weight: 500; color: var(--text-main); }
        .border-l-success { border-left: 2px solid var(--color-success); }

        .agent-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .agent-tag { background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 20px; font-size: 12px; display: flex; align-items: center; gap: 4px; font-weight: 500; }

        .wf-footer { display: flex; gap: 16px; margin-top: 16px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.05); }

        /* 5. Cross Agent Flow */
        .flow-container { padding: 32px; }
        .flow-path { display: flex; flex-direction: column; }
        .flow-step { display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; }
        .fs-icon { width: 40px; height: 40px; background: rgba(245,166,35,0.1); border: 1px solid rgba(245,166,35,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 2; margin-bottom: 12px; }
        .fs-content { margin-bottom: 24px; }
        .fs-agent { font-size: 13px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; display: block; }
        .fs-action { font-size: 15px; color: var(--text-bright); line-height: 1.4; margin: 0; }
        .fs-connector { display: flex; justify-content: center; align-items: center; margin-bottom: 24px; position: relative; }
        .fs-connector::after { content: ''; position: absolute; top: -20px; bottom: 20px; width: 1px; background: dashed 1px rgba(255,255,255,0.1); z-index: 1; }

        /* 4. Impact Preview */
        .impact-dashboard { display: flex; flex-direction: column; }
        .id-metric { padding: 24px; display: flex; flex-direction: column; gap: 8px; }
        .border-b { border-bottom: 1px solid rgba(255,255,255,0.05); }
        .id-label { font-size: 13px; color: var(--text-muted); font-weight: 600; text-transform: uppercase; }
        .id-value { font-size: 28px; font-weight: 700; letter-spacing: -0.5px; }

        /* 8. Governance */
        .governance-list { display: flex; flex-direction: column; gap: 16px; }
        .gov-card { padding: 20px; }
        .border-l-danger { border-left: 3px solid var(--color-danger); }
        .gov-title { font-size: 15px; font-weight: 600; color: var(--text-bright); }
        .status-badge { font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; }
        .gov-impact { font-size: 16px; }

        /* 6. Performance Intelligence */
        .pi-list { display: flex; flex-direction: column; gap: 16px; }
        .pi-card { padding: 20px; border-left: 2px solid var(--color-accent); }
        .pi-insight { font-size: 14px; line-height: 1.5; color: var(--text-bright); margin: 0; }
        .pi-meta { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--text-muted); }
        .pi-impact { font-size: 12px; font-weight: 600; }

        /* 7. Optimisations */
        .opt-list { display: flex; flex-direction: column; gap: 16px; }
        .opt-card { padding: 20px; background: rgba(255,255,255,0.02); }
        .opt-title { font-size: 14px; font-weight: 600; color: var(--text-bright); margin-bottom: 6px; }
        .opt-why { font-size: 13px; color: var(--text-muted); line-height: 1.4; margin-bottom: 16px; }
        .opt-metrics { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 12px; }
        .opt-proj { font-size: 13px; font-weight: 600; }

        /* 9. Executive Summary */
        .executive-summary-section {
          padding: 32px; display: flex; gap: 24px; align-items: flex-start;
          background: linear-gradient(90deg, rgba(245, 166, 35, 0.05) 0%, transparent 100%);
          border-left: 2px solid var(--color-warning);
        }
        .es-content { display: flex; flex-direction: column; gap: 8px; }
        .es-label { font-size: 12px; text-transform: uppercase; font-weight: 600; color: var(--text-muted); letter-spacing: 0.5px; }
        .es-text { font-size: 18px; font-weight: 400; line-height: 1.6; color: var(--text-bright); font-style: italic; margin: 0; }

        .toast-notification {
          position: fixed; bottom: 30px; right: 30px; z-index: 100;
          background: var(--text-bright); color: var(--bg-dark);
          padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 600;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          animation: slideUp 0.3s ease forwards;
        }

        @keyframes pulseWarning {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(245, 166, 35, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(245, 166, 35, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(245, 166, 35, 0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* WORKFLOW REVIEW MODAL */
        .builder-takeover {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: #050505; z-index: 1000;
          display: flex; flex-direction: column;
          animation: slideUpModal 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          color: #EDEDED;
        }
        @keyframes slideUpModal { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        .builder-header { padding: 24px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); background: #111216; }
        .icon-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #FFF; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .icon-btn:hover { background: rgba(255,255,255,0.1); }
        .builder-title h2 { font-size: 20px; font-weight: 600; margin: 0; color: #FFF; }
        .gap-md { gap: 16px; }
        .mb-4 { margin-bottom: 4px; }
        .mb-16 { margin-bottom: 16px; }
        .border-muted { border-color: rgba(255,255,255,0.1); }
        .border-l { border-left-width: 1px; border-left-style: solid; }

        .header-metric { display: flex; flex-direction: column; }
        .hm-label { font-size: 11px; text-transform: uppercase; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; }
        .hm-val { font-size: 18px; font-weight: 700; }

        .builder-content { flex: 1; overflow-y: auto; display: flex; justify-content: center; padding: 40px; background: #050505; }
        .builder-canvas { width: 100%; max-width: 760px; display: flex; flex-direction: column; align-items: center; }

        .ib-block { width: 100%; background: #111216; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
        .ib-header h3 { font-size: 16px; font-weight: 600; color: #FFF; }
        .ib-body { margin-top: 16px; }

        .ai-reasoning-panel { background: rgba(138,43,226,0.08); border-left: 2px solid var(--color-accent); padding: 12px 16px; border-radius: 6px; display: flex; gap: 12px; font-size: 14px; }

        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .input-label { font-size: 12px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
        .premium-input, .premium-textarea { background: #0A0A0A; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; padding: 12px 16px; font-size: 14px; outline: none; transition: border-color 0.2s; }
        .premium-input:focus, .premium-textarea:focus { border-color: var(--color-accent); box-shadow: 0 0 0 2px rgba(138,43,226,0.2); }
        .font-mono { font-family: monospace; }
        .full-width { width: 100%; }

        .connector-line { width: 2px; height: 32px; background: rgba(255,255,255,0.1); margin: 0; }

        .channel-toggles { display: flex; gap: 12px; }
        .channel-toggle { flex: 1; padding: 16px; background: #0A0A0A; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: white; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .channel-toggle.selected { background: var(--color-accent); border-color: var(--color-accent); }

        .split-block { display: flex; gap: 32px; }
        .sb-left { flex: 1; display: flex; flex-direction: column; }
        .sb-right { width: 280px; display: flex; justify-content: center; }

        .phone-mockup { width: 260px; height: 380px; border: 8px solid #1A1C20; border-radius: 36px; background: #000; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
        .phone-notch { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 120px; height: 24px; background: #1A1C20; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; z-index: 10; }
        .phone-screen { padding: 40px 16px 16px; height: 100%; display: flex; flex-direction: column; background: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop') center/cover; }
        
        .mock-notification { background: rgba(20,20,20,0.85); backdrop-filter: blur(10px); padding: 12px 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
        .mn-header { font-size: 11px; color: #8A8F98; margin-bottom: 8px; }
        .mn-app-icon { width: 16px; height: 16px; background: #E60028; border-radius: 4px; color: white; font-size: 10px; display: flex; align-items: center; justify-content: center; font-weight: 700; }
        .mn-title { font-size: 14px; font-weight: 600; color: white; margin-bottom: 4px; }
        .mn-body { font-size: 13px; color: #D1D5DB; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

        .builder-footer { padding: 24px 40px; border-top: 1px solid rgba(255,255,255,0.06); background: #111216; }
        .btn-secondary { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: white; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s; font-size: 14px; }
        .btn-secondary:hover { background: rgba(255,255,255,0.05); }

      `}</style>
    </div>
  );
};

function WorkflowReviewModal({ workflow, onClose, onApprove }) {
  const [config, setConfig] = useState({
    audience: workflow.audience,
    trigger: workflow.triggerCondition,
    channels: workflow.channels,
    title: workflow.messageTitle,
    body: workflow.messageBody
  });

  return (
    <div className="builder-takeover">
      <div className="builder-header flex-between">
        <div className="flex-center gap-md">
          <button className="icon-btn" onClick={onClose}><X size={20} /></button>
          <div className="builder-title">
            <span className="text-muted text-sm font-medium uppercase tracking-wider block mb-4">Review Intervention</span>
            <h2>{workflow.name}</h2>
          </div>
        </div>
        <div className="header-actions flex-center gap-md">
          <div className="header-metric">
            <span className="hm-label">Est. Impact</span>
            <span className="hm-val text-success">{workflow.impact.revenue || workflow.impact.uplift}</span>
          </div>
          <div className="header-metric border-l pl-16 border-muted">
            <span className="hm-label">AI Confidence</span>
            <span className="hm-val text-accent">{workflow.confidence}</span>
          </div>
        </div>
      </div>

      <div className="builder-content">
        <div className="builder-canvas">
          
          {/* Block 1: Audience & Trigger */}
          <div className="ib-block">
            <div className="ib-header flex-between">
              <div className="flex-center gap-sm">
                <Users size={18} className="text-muted"/> <h3>Audience & Trigger</h3>
              </div>
            </div>
            <div className="ib-body">
              <div className="ai-reasoning-panel mb-16">
                <Bot size={14} className="text-accent" />
                <p><strong>AI Reasoning:</strong> {workflow.why}</p>
              </div>
              
              <div className="form-group mb-16">
                <label className="input-label">Target Audience</label>
                <input type="text" className="premium-input full-width" value={config.audience} onChange={e => setConfig({...config, audience: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="input-label">Trigger Logic</label>
                <input type="text" className="premium-input full-width font-mono text-sm" value={config.trigger} onChange={e => setConfig({...config, trigger: e.target.value})} />
              </div>
            </div>
          </div>

          <div className="connector-line"></div>

          {/* Block 2: Channel */}
          <div className="ib-block">
            <div className="ib-header flex-between">
              <div className="flex-center gap-sm">
                <Network size={18} className="text-muted"/> <h3>Delivery Channel</h3>
              </div>
            </div>
            <div className="ib-body">
              <div className="channel-toggles">
                {['WhatsApp', 'Push Notification', 'Email + In-App'].map(ch => (
                  <button 
                    key={ch}
                    className={`channel-toggle ${config.channels.includes(ch) ? 'selected' : ''}`}
                    onClick={() => setConfig({...config, channels: ch})}
                  >
                    {ch}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="connector-line"></div>

          {/* Block 3: Message Editor */}
          <div className="ib-block split-block">
            <div className="sb-left">
              <div className="ib-header mb-16">
                <div className="flex-center gap-sm">
                  <MessageSquare size={18} className="text-muted"/> <h3>Intervention Content</h3>
                </div>
              </div>
              <div className="form-group mb-16">
                <label className="input-label">Notification Title</label>
                <input type="text" className="premium-input full-width" value={config.title} onChange={e => setConfig({...config, title: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="input-label">Message Body</label>
                <textarea rows="4" className="premium-textarea full-width" value={config.body} onChange={e => setConfig({...config, body: e.target.value})}></textarea>
              </div>
            </div>
            
            <div className="sb-right">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="mock-notification">
                    <div className="mn-header flex-between">
                      <div className="flex-center gap-sm">
                        <div className="mn-app-icon">M</div>
                        <span>Medibank</span>
                      </div>
                      <span>now</span>
                    </div>
                    <h4 className="mn-title">{config.title}</h4>
                    <p className="mn-body">{config.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="builder-footer flex-between">
        <button className="btn-secondary" onClick={onClose}>Cancel</button>
        <div className="flex-center gap-md">
          <button className="btn-secondary text-warning">Save Tweaks</button>
          <button className="btn-primary-action btn-warning-gradient" onClick={onApprove}>
            <Zap size={16} /> Approve & Launch Intervention
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActionStudio;
