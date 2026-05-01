import { useState } from 'react';
import { 
  Plus, X, ChevronRight, ChevronLeft, 
  Users, Zap, Target, Send, MessageSquare, Activity,
  Smartphone, Bell, Mail, Gift, CheckCircle2, ArrowRight,
  Clock, Calendar, Trash2
} from 'lucide-react';

const STEPS = [
  { id: 1, label: 'Audience', icon: Users },
  { id: 2, label: 'Trigger', icon: Zap },
  { id: 3, label: 'Action', icon: Target },
  { id: 4, label: 'Delivery', icon: Send },
  { id: 5, label: 'Experience', icon: MessageSquare },
  { id: 6, label: 'Impact', icon: Activity },
];

const AUDIENCE_OPTIONS = [
  { id: 'grad', name: 'Graduating in 60 Days', size: '2,100' },
  { id: 'risk', name: 'Low Engagement, At Risk', size: '840' },
  { id: 'explore', name: 'High Engagement, Not Converted', size: '3,450' },
];

const ACTION_CARDS = [
  { id: 'in_app', name: 'In-App Nudge', icon: Smartphone, desc: 'Show a modal inside the app.' },
  { id: 'push', name: 'Push Notification', icon: Bell, desc: 'Send a direct OS notification.' },
  { id: 'email', name: 'Email Sequence', icon: Mail, desc: 'Trigger an automated email.' },
  { id: 'reward', name: 'Offer Reward', icon: Gift, desc: 'Grant bonus health points.' },
];

// Logic Builder Configuration
const SUBJECT_OPTIONS = [
  { id: 'user_activity', label: 'User Activity' },
  { id: 'page_views', label: 'Page Views' },
  { id: 'time_to_expiry', label: 'Time to Expiry' }
];

const OPERATORS = {
  user_activity: [{ id: 'has_been', label: 'has been' }],
  page_views: [{ id: 'includes', label: 'includes' }, { id: 'excludes', label: 'does not include' }],
  time_to_expiry: [{ id: 'less_than', label: 'is less than' }, { id: 'exactly', label: 'is exactly' }]
};

const VALUES = {
  user_activity: [
    { id: 'inactive_7', label: 'Inactive for 7+ days' },
    { id: 'inactive_14', label: 'Inactive for 14+ days' },
    { id: 'active_weekly', label: 'Active weekly' }
  ],
  page_views: [
    { id: 'pricing', label: 'Pricing Page' },
    { id: 'checkout', label: 'Checkout Flow' },
    { id: 'benefits', label: 'Benefits Overview' }
  ],
  time_to_expiry: [
    { id: '60_days', label: '60 Days' },
    { id: '30_days', label: '30 Days' },
    { id: '7_days', label: '7 Days' }
  ]
};

export default function ActionStudio() {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [activeRules, setActiveRules] = useState([
    { id: 1, name: 'Graduation Prep Nudge', status: 'Active', audience: 'Graduating in 60 Days', trigger: 'Time-based expiry', action: 'In-App Nudge' },
    { id: 2, name: 'Re-engagement 14 Day', status: 'Draft', audience: 'Low Engagement, At Risk', trigger: 'Inactive 14+ days', action: 'Push Notification' }
  ]);

  const handleRuleActivated = (newRule) => {
    setActiveRules([...activeRules, { ...newRule, id: Date.now(), status: 'Active' }]);
    setIsBuilderOpen(false);
  };

  return (
    <div className="page-layer">
      {!isBuilderOpen ? (
        <div className="cockpit-container">
          <div className="cockpit-header flex-between">
            <div className="header-text">
              <h1>Action Studio</h1>
              <p>Design behavioural interventions and automated rules.</p>
            </div>
            <button className="btn-primary-action red-btn" onClick={() => setIsBuilderOpen(true)}>
              <Plus size={16} /> Create Rule
            </button>
          </div>

          <div className="dashboard-grid mt-32">
            <div className="dashboard-panel premium-glass">
              <h3 className="panel-title mb-16">Your Rules</h3>
              <div className="rules-list">
                {activeRules.map(rule => (
                  <div key={rule.id} className="rule-list-item elevated-card flex-between">
                    <div>
                      <div className="flex-center gap-sm mb-4">
                        <span className={`status-dot ${rule.status === 'Active' ? 'bg-success' : 'bg-muted'}`}></span>
                        <h4 className="text-bright font-medium">{rule.name}</h4>
                      </div>
                      <p className="text-muted text-sm">Target: {rule.audience} • Trigger: {rule.trigger}</p>
                    </div>
                    <div className="text-right">
                      <span className="action-tag">{rule.action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <RuleBuilderModal 
          onClose={() => setIsBuilderOpen(false)} 
          onComplete={handleRuleActivated}
        />
      )}

      <style>{`
        .page-layer { background-color: #050505; min-height: 100vh; padding-bottom: 40px; color: #EDEDED; }
        .cockpit-container { max-width: 1200px; margin: 0 auto; padding: 40px; }
        .flex-between { display: flex; justify-content: space-between; align-items: center; }
        .flex-center { display: flex; align-items: center; }
        .gap-md { gap: 16px; }
        .gap-sm { gap: 8px; }
        .mb-4 { margin-bottom: 4px; }
        .mb-16 { margin-bottom: 16px; }
        .mb-24 { margin-bottom: 24px; }
        .mb-32 { margin-bottom: 32px; }
        .mb-40 { margin-bottom: 40px; }
        .mt-8 { margin-top: 8px; }
        .mt-32 { margin-top: 32px; }
        .text-bright { color: #FFF; }
        .text-muted { color: #8A8F98; }
        .text-sm { font-size: 13px; }
        .font-medium { font-weight: 500; }
        
        .header-text h1 { font-size: 28px; font-weight: 600; color: white; margin-bottom: 6px; }
        .header-text p { color: #8A8F98; font-size: 14px; }
        
        .red-btn { background: #E60028; color: white; border: none; padding: 10px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; }
        .red-btn:hover { background: #FF1A43; }
        
        .premium-glass { background: #111216; border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 24px; }
        .elevated-card { background: #16181C; border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.05); }
        
        .rules-list { display: flex; flex-direction: column; gap: 16px; }
        .status-dot { width: 8px; height: 8px; border-radius: 50%; }
        .bg-success { background: #10B981; box-shadow: 0 0 8px #10B981; }
        .bg-muted { background: #8A8F98; }
        
        .action-tag { background: rgba(255,255,255,0.05); padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; color: #D1D5DB; }
      `}</style>
    </div>
  );
}

// ----------------------------------------------------
// RULE BUILDER MODAL COMPONENT
// ----------------------------------------------------
function RuleBuilderModal({ onClose, onComplete }) {
  const [step, setStep] = useState(2); // Starting at 2 to see the triggers immediately
  const [config, setConfig] = useState({
    audience: null,
    conditions: [
      { id: Date.now(), subject: 'user_activity', operator: 'has_been', value: 'inactive_7' }
    ],
    action: null,
    channel: 'in_app',
    timing: 'immediate',
    messageTitle: 'Your OVHC Options',
    messageBody: 'Your OSHC cover expires soon. Explore graduate health plans today.'
  });

  const handleNext = () => { if (step < 6) setStep(step + 1); };
  const handlePrev = () => { if (step > 1) setStep(step - 1); };
  
  const handleActivate = () => {
    onComplete({
      name: 'Custom Conversion Rule',
      audience: AUDIENCE_OPTIONS.find(a => a.id === config.audience)?.name || 'Custom Audience',
      trigger: config.conditions[0] ? VALUES[config.conditions[0].subject]?.find(v=>v.id===config.conditions[0].value)?.label || 'Custom Trigger' : 'Custom Trigger',
      action: ACTION_CARDS.find(a => a.id === config.action)?.name || 'Custom Action'
    });
  };

  const addCondition = () => {
    setConfig({
      ...config,
      conditions: [...config.conditions, { id: Date.now(), subject: 'page_views', operator: 'includes', value: 'pricing' }]
    });
  };

  const updateCondition = (id, field, value) => {
    const updatedConditions = config.conditions.map(c => {
      if (c.id === id) {
        const newCondition = { ...c, [field]: value };
        // Reset operator and value if subject changes
        if (field === 'subject') {
          newCondition.operator = OPERATORS[value][0].id;
          newCondition.value = VALUES[value][0].id;
        }
        return newCondition;
      }
      return c;
    });
    setConfig({ ...config, conditions: updatedConditions });
  };

  const removeCondition = (id) => {
    setConfig({
      ...config,
      conditions: config.conditions.filter(c => c.id !== id)
    });
  };

  const selectedAudienceObj = AUDIENCE_OPTIONS.find(a => a.id === config.audience);

  return (
    <div className="builder-takeover">
      <div className="builder-header flex-between">
        <div className="flex-center gap-md">
          <button className="icon-btn" onClick={onClose}><X size={20} /></button>
          <div className="builder-title">
            <span className="text-muted text-sm font-medium" style={{display:'block', marginBottom:'2px', letterSpacing:'0.5px'}}>ACTION STUDIO</span>
            <h2>Create New Rule</h2>
          </div>
        </div>
        
        {/* Horizontal Stepper */}
        <div className="stepper">
          {STEPS.map((s, i) => (
            <div key={s.id} className={`stepper-item ${step === s.id ? 'active' : step > s.id ? 'completed' : ''}`}>
              <div className="step-circle">{step > s.id ? <CheckCircle2 size={14} /> : s.id}</div>
              <span className="step-label">{s.label}</span>
              {i < STEPS.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="header-actions">
          <button className="btn-secondary">Save Draft</button>
        </div>
      </div>

      <div className="builder-content">
        <div className="builder-card premium-glass">
          
          {/* STEP 1: AUDIENCE */}
          {step === 1 && (
            <div className="step-container fade-in">
              <h2 className="step-title">Define Audience (WHO)</h2>
              <p className="step-desc">Select the segment of users this rule will target.</p>
              
              <div className="audience-selector">
                <label className="input-label">Select Segment</label>
                <div className="segment-grid">
                  {AUDIENCE_OPTIONS.map(opt => (
                    <div 
                      key={opt.id} 
                      className={`selectable-card ${config.audience === opt.id ? 'selected' : ''}`}
                      onClick={() => setConfig({...config, audience: opt.id})}
                    >
                      <h4>{opt.name}</h4>
                      <p className="text-muted text-sm mt-8">Est. Users: {opt.size}</p>
                    </div>
                  ))}
                </div>
              </div>

              {selectedAudienceObj && (
                <div className="impact-toast mt-32">
                  <Users size={18} className="text-accent" />
                  <span>Targeting: <strong>{selectedAudienceObj.size}</strong> users based on current data.</span>
                </div>
              )}
            </div>
          )}

          {/* STEP 2: TRIGGER (Upgraded Logic Builder) */}
          {step === 2 && (
            <div className="step-container fade-in">
              <h2 className="step-title">Define Trigger (WHEN)</h2>
              <p className="step-desc">Set the conditions that will trigger this intervention.</p>
              
              <div className="logic-builder">
                {config.conditions.map((condition, index) => (
                  <div key={condition.id} className="logic-row">
                    <div className={`logic-operator-badge ${index === 0 ? 'bg-primary' : 'bg-secondary'}`}>
                      {index === 0 ? 'IF' : 'AND'}
                    </div>
                    
                    <div className="logic-block-container">
                      {/* Subject Dropdown */}
                      <select 
                        className="logic-select"
                        value={condition.subject}
                        onChange={(e) => updateCondition(condition.id, 'subject', e.target.value)}
                      >
                        {SUBJECT_OPTIONS.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                      </select>

                      {/* Operator Dropdown */}
                      <select 
                        className="logic-select operator-select"
                        value={condition.operator}
                        onChange={(e) => updateCondition(condition.id, 'operator', e.target.value)}
                      >
                        {OPERATORS[condition.subject]?.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                      </select>

                      {/* Value Dropdown */}
                      <select 
                        className="logic-select value-select"
                        value={condition.value}
                        onChange={(e) => updateCondition(condition.id, 'value', e.target.value)}
                      >
                        {VALUES[condition.subject]?.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                      </select>

                      {/* Remove Button */}
                      {index > 0 && (
                        <button className="btn-remove-condition" onClick={() => removeCondition(condition.id)}>
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                
                <button className="btn-add-condition" onClick={addCondition}>
                  <Plus size={16} /> Add AND condition
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: ACTION */}
          {step === 3 && (
            <div className="step-container fade-in">
              <h2 className="step-title">Define Action (WHAT)</h2>
              <p className="step-desc">Choose the type of intervention to trigger.</p>
              
              <div className="action-grid">
                {ACTION_CARDS.map(act => (
                  <div 
                    key={act.id} 
                    className={`selectable-card action-card ${config.action === act.id ? 'selected' : ''}`}
                    onClick={() => setConfig({...config, action: act.id})}
                  >
                    <div className={`action-icon-circle ${config.action === act.id ? 'active-icon' : ''}`}>
                      <act.icon size={20} />
                    </div>
                    <h4>{act.name}</h4>
                    <p className="text-muted text-sm mt-8">{act.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: DELIVERY */}
          {step === 4 && (
            <div className="step-container fade-in">
              <h2 className="step-title">Channel & Timing (HOW)</h2>
              <p className="step-desc">Configure where and when the user receives this.</p>
              
              <div className="delivery-form">
                <div className="form-group mb-32">
                  <label className="input-label">Channel Priority</label>
                  <div className="channel-toggles">
                    {['in_app', 'push', 'email'].map(ch => (
                      <button 
                        key={ch}
                        className={`channel-toggle ${config.channel === ch ? 'selected' : ''}`}
                        onClick={() => setConfig({...config, channel: ch})}
                      >
                        {ch === 'in_app' ? 'In-App' : ch === 'push' ? 'Push OS' : 'Email'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="input-label">Timing</label>
                  <div className="timing-container flex-center gap-sm">
                    <Clock size={18} className="text-muted" />
                    <select 
                      className="premium-select full-width"
                      value={config.timing}
                      onChange={(e) => setConfig({...config, timing: e.target.value})}
                    >
                      <option value="immediate">Trigger immediately</option>
                      <option value="delay_24h">Delay 24 hours after trigger</option>
                      <option value="next_session">Next app session</option>
                    </select>
                  </div>
                  <p className="text-sm text-muted mt-8">Frequency Cap: 1 per user per 14 days.</p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: EXPERIENCE */}
          {step === 5 && (
            <div className="step-container fade-in split-view">
              <div className="split-left">
                <h2 className="step-title">Message Builder</h2>
                <p className="step-desc mb-24">Craft the copy for your intervention.</p>
                
                <div className="form-group mb-24">
                  <label className="input-label">Title</label>
                  <input 
                    type="text" 
                    className="premium-input full-width" 
                    value={config.messageTitle}
                    onChange={(e) => setConfig({...config, messageTitle: e.target.value})}
                  />
                </div>
                
                <div className="form-group">
                  <label className="input-label flex-between">
                    Message Body
                    <span className="text-accent text-sm" style={{cursor:'pointer', fontWeight: 600}}>Insert Variable {}</span>
                  </label>
                  <textarea 
                    className="premium-textarea full-width" 
                    rows="4"
                    value={config.messageBody}
                    onChange={(e) => setConfig({...config, messageBody: e.target.value})}
                  ></textarea>
                </div>
              </div>
              
              <div className="split-right flex-center justify-center">
                <div className="phone-mockup">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    {/* Mock Notification */}
                    <div className="mock-notification">
                      <div className="mn-header flex-between">
                        <div className="flex-center gap-sm">
                          <div className="mn-app-icon">M</div>
                          <span>Medibank</span>
                        </div>
                        <span>now</span>
                      </div>
                      <h4 className="mn-title">{config.messageTitle}</h4>
                      <p className="mn-body">{config.messageBody}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: IMPACT */}
          {step === 6 && (
            <div className="step-container fade-in">
              <h2 className="step-title">Preview & Impact (WHY)</h2>
              <p className="step-desc mb-32">Review the strategic impact before activating.</p>
              
              <div className="impact-grid mb-40">
                <div className="impact-card">
                  <span className="ic-label">Est. Audience Reach</span>
                  <span className="ic-val text-bright">{selectedAudienceObj?.size || '0'} users</span>
                </div>
                <div className="impact-card highlight-card">
                  <span className="ic-label">Expected Conversion Lift</span>
                  <span className="ic-val text-success">+3.2%</span>
                </div>
                <div className="impact-card">
                  <span className="ic-label">Churn Risk Mitigation</span>
                  <span className="ic-val text-accent">Medium</span>
                </div>
              </div>

              <div className="rule-summary-box">
                <h3 className="rs-title mb-16">Rule Logic Summary</h3>
                <div className="rs-statement">
                  <span className="rs-keyword">IF</span> user is in segment <strong>"{selectedAudienceObj?.name || 'Custom'}"</strong>
                </div>
                {config.conditions.map((c, i) => (
                  <div key={c.id} className="rs-statement">
                    <span className="rs-keyword">{i === 0 ? 'AND' : 'AND'}</span> 
                    trigger condition <strong>{SUBJECT_OPTIONS.find(o=>o.id===c.subject)?.label}</strong> is <strong>{VALUES[c.subject]?.find(v=>v.id===c.value)?.label}</strong>
                  </div>
                ))}
                <div className="rs-statement mt-16">
                  <span className="rs-keyword bg-success" style={{background:'#10B981'}}>THEN</span> deliver <strong>{config.action?.replace('_', ' ')}</strong> via <strong>{config.channel}</strong> ({config.timing})
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      <div className="builder-footer flex-between">
        <button 
          className="btn-secondary" 
          onClick={handlePrev}
          style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
        >
          <ChevronLeft size={16} /> Back
        </button>
        
        {step < 6 ? (
          <button 
            className="btn-primary-hero red-btn" 
            onClick={handleNext}
            disabled={(step === 1 && !config.audience) || (step === 3 && !config.action)}
          >
            Continue <ChevronRight size={16} />
          </button>
        ) : (
          <button className="btn-primary-hero red-btn glow-btn" onClick={handleActivate}>
            Activate Rule <ArrowRight size={16} />
          </button>
        )}
      </div>

      <style>{`
        /* FULL SCREEN MODAL */
        .builder-takeover {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: #0A0A0A; z-index: 100;
          display: flex; flex-direction: column;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          color: #EDEDED;
        }
        @keyframes slideUp { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        /* HEADER & STEPPER */
        .builder-header {
          padding: 24px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); background: #111216;
        }
        .icon-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #FFF; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .icon-btn:hover { background: rgba(255,255,255,0.1); }
        .builder-title h2 { font-size: 20px; font-weight: 600; margin: 0; color: #FFF; }
        
        .stepper { display: flex; align-items: center; gap: 12px; }
        .stepper-item { display: flex; align-items: center; gap: 8px; opacity: 0.5; transition: all 0.3s; }
        .stepper-item.active { opacity: 1; }
        .stepper-item.completed { opacity: 1; }
        .stepper-item.active .step-circle { background: #E60028; border-color: #E60028; color: white; box-shadow: 0 0 10px rgba(230,0,40,0.4); }
        .stepper-item.completed .step-circle { background: #10B981; border-color: #10B981; color: white; }
        
        .step-circle { width: 24px; height: 24px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; }
        .step-label { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .step-connector { width: 32px; height: 1px; background: rgba(255,255,255,0.1); margin-left: 8px; }

        .btn-secondary { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: white; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s; }
        .btn-secondary:hover { background: rgba(255,255,255,0.05); }

        /* CONTENT AREA */
        .builder-content { flex: 1; overflow-y: auto; display: flex; justify-content: center; padding: 40px; background: #050505; }
        .builder-card { width: 100%; max-width: 840px; min-height: 500px; display: flex; flex-direction: column; }
        .fade-in { animation: fadeIn 0.4s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .step-title { font-size: 28px; font-weight: 700; color: #FFF; margin-bottom: 8px; letter-spacing: -0.5px; }
        .step-desc { font-size: 15px; color: #8A8F98; margin-bottom: 40px; }

        /* COMMON UI ELEMENTS */
        .input-label { display: block; font-size: 13px; font-weight: 600; color: #8A8F98; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
        .premium-select, .premium-input, .premium-textarea {
          background: #111216; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;
          color: white; padding: 14px 16px; font-size: 15px; outline: none; transition: border-color 0.2s;
        }
        .premium-select:focus, .premium-input:focus, .premium-textarea:focus { border-color: #3B82F6; box-shadow: 0 0 0 2px rgba(59,130,246,0.2); }
        .full-width { width: 100%; }
        
        .selectable-card {
          background: #0A0A0A; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px;
          padding: 20px; cursor: pointer; transition: all 0.2s;
        }
        .selectable-card:hover { border-color: rgba(255,255,255,0.2); transform: translateY(-2px); }
        .selectable-card.selected { border-color: #3B82F6; background: rgba(59,130,246,0.05); box-shadow: inset 0 0 0 1px #3B82F6; }

        /* STEP 1: AUDIENCE */
        .segment-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .impact-toast { background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.2); padding: 16px; border-radius: 8px; display: flex; align-items: center; gap: 12px; font-size: 14px; }
        
        /* STEP 2: UPGRADED LOGIC BUILDER */
        .logic-builder { display: flex; flex-direction: column; gap: 24px; }
        .logic-row { display: flex; align-items: stretch; gap: 16px; }
        
        .logic-operator-badge {
          display: flex; align-items: center; justify-content: center;
          width: 54px; border-radius: 8px; font-weight: 700; font-size: 13px; letter-spacing: 0.5px;
        }
        .bg-primary { background: #E60028; color: white; }
        .bg-secondary { background: rgba(255,255,255,0.08); color: #8A8F98; border: 1px solid rgba(255,255,255,0.05); }

        .logic-block-container {
          flex: 1; display: flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 12px;
        }

        .logic-select {
          background: #0A0A0A; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
          color: white; padding: 12px 16px; font-size: 14px; font-weight: 500; outline: none; cursor: pointer;
        }
        .logic-select:hover { border-color: rgba(255,255,255,0.2); }
        .operator-select { color: #8A8F98; background: transparent; border: none; padding: 12px 8px; }
        .value-select { flex: 1; border-color: #3B82F6; background: rgba(59,130,246,0.05); }

        .btn-remove-condition {
          background: transparent; border: none; color: #EF4444; padding: 12px; cursor: pointer;
          border-radius: 8px; transition: all 0.2s;
        }
        .btn-remove-condition:hover { background: rgba(239, 68, 68, 0.1); }

        .btn-add-condition {
          background: transparent; border: 1px dashed rgba(255,255,255,0.2); color: #8A8F98; 
          padding: 16px; border-radius: 12px; font-weight: 600; cursor: pointer; 
          display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s; 
          width: 100%; font-size: 14px;
        }
        .btn-add-condition:hover { border-color: rgba(255,255,255,0.4); color: white; background: rgba(255,255,255,0.02); }

        /* STEP 3: ACTION */
        .action-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .action-icon-circle { width: 40px; height: 40px; background: rgba(255,255,255,0.05); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: #8A8F98; }
        .selected .active-icon { background: rgba(59,130,246,0.2); color: #3B82F6; }

        /* STEP 4: DELIVERY */
        .channel-toggles { display: flex; gap: 12px; }
        .channel-toggle { flex: 1; padding: 16px; background: #0A0A0A; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: white; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .channel-toggle.selected { background: #3B82F6; border-color: #3B82F6; }
        
        .timing-container { background: #0A0A0A; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 0 16px; }
        .timing-container select { border: none; background: transparent; }

        /* STEP 5: SPLIT VIEW */
        .split-view { display: flex; gap: 40px; height: 100%; }
        .split-left { flex: 1; }
        .split-right { width: 300px; display: flex; justify-content: center; align-items: center; }
        
        .phone-mockup { width: 280px; height: 400px; border: 8px solid #1A1C20; border-radius: 36px; background: #000; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
        .phone-notch { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 120px; height: 24px; background: #1A1C20; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; z-index: 10; }
        .phone-screen { padding: 40px 16px 16px; height: 100%; display: flex; flex-direction: column; background: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop') center/cover; }
        
        .mock-notification { background: rgba(20,20,20,0.85); backdrop-filter: blur(10px); padding: 12px 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
        .mn-header { font-size: 11px; color: #8A8F98; margin-bottom: 8px; }
        .mn-app-icon { width: 16px; height: 16px; background: #E60028; border-radius: 4px; color: white; font-size: 10px; display: flex; align-items: center; justify-content: center; font-weight: 700; }
        .mn-title { font-size: 14px; font-weight: 600; color: white; margin-bottom: 4px; }
        .mn-body { font-size: 13px; color: #D1D5DB; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

        /* STEP 6: IMPACT */
        .impact-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
        .impact-card { background: #0A0A0A; border: 1px solid rgba(255,255,255,0.06); padding: 20px; border-radius: 12px; display: flex; flex-direction: column; gap: 8px; }
        .highlight-card { border-color: rgba(16,185,129,0.3); background: rgba(16,185,129,0.05); }
        .ic-label { font-size: 12px; color: #8A8F98; text-transform: uppercase; font-weight: 600; }
        .ic-val { font-size: 24px; font-weight: 700; }
        .text-success { color: #10B981; }
        .text-accent { color: #3B82F6; }
        
        .rule-summary-box { background: rgba(255,255,255,0.03); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.06); }
        .rs-title { font-size: 16px; color: white; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; }
        .rs-statement { font-size: 15px; color: #D1D5DB; line-height: 1.6; margin-bottom: 12px; display: flex; align-items: center; gap: 12px; }
        .rs-keyword { background: #E60028; color: white; font-size: 11px; font-weight: 700; padding: 4px 8px; border-radius: 4px; letter-spacing: 0.5px; }

        /* FOOTER */
        .builder-footer { padding: 24px 40px; border-top: 1px solid rgba(255,255,255,0.06); background: #111216; }
        .btn-primary-hero { display: flex; align-items: center; gap: 8px; padding: 14px 24px; font-size: 15px; font-weight: 600; border-radius: 8px; transition: all 0.2s; border: none; cursor: pointer; }
        .btn-primary-hero:disabled { opacity: 0.5; cursor: not-allowed; }
        .glow-btn { box-shadow: 0 0 20px rgba(230,0,40,0.4); }
        .glow-btn:hover { box-shadow: 0 0 30px rgba(230,0,40,0.6); transform: translateY(-2px); }
        
      `}</style>
    </div>
  );
}
