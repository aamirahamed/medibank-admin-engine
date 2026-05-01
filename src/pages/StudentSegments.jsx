import { useState } from 'react';
import { studentSegments } from '../data/mockData';
import { 
  AlertTriangle, 
  Search, 
  Filter,
  TrendingUp,
  X,
  Target,
  BarChart2,
  Calendar,
  Zap,
  ArrowRight,
  ShoppingCart,
  Bell,
  GraduationCap,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

// Reusable Sparkline component for the "Conversion Potential" stat
const Sparkline = ({ color }) => {
  const hexColor = color === 'critical' ? '#FF003C' : color === 'opportunity' ? '#FF8C00' : '#00D26A';
  return (
    <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '12px' }}>
      <path d="M0 12L8 8L16 14L24 6L32 10L40 2L48 6" stroke={hexColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0 12L8 8L16 14L24 6L32 10L40 2L48 6L48 16H0V12Z" fill={`url(#gradient-${color})`} opacity="0.2"/>
      <defs>
        <linearGradient id={`gradient-${color}`} x1="24" y1="2" x2="24" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor={hexColor}/>
          <stop offset="1" stopColor={hexColor} stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

const StudentSegments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSegment, setActiveSegment] = useState(null);

  const criticalSegments = studentSegments.filter(s => s.category === 'critical');
  const opportunitySegments = studentSegments.filter(s => s.category === 'opportunity');
  const growthSegments = studentSegments.filter(s => s.category === 'growth');

  const getIconForSegment = (id) => {
    switch(id) {
      case 1: return <ShoppingCart size={20} />;
      case 2: return <Bell size={20} />;
      case 3: return <GraduationCap size={20} />;
      case 4: return <Activity size={20} />;
      default: return <TrendingUp size={20} />;
    }
  };

  const renderSegmentCard = (segment) => {
    const isCritical = segment.category === 'critical';
    const isOpportunity = segment.category === 'opportunity';
    const isGrowth = segment.category === 'growth';
    
    const isTrendPositive = segment.trendDirection === 'positive';
    const TrendIcon = isTrendPositive ? ArrowUpRight : ArrowDownRight;

    return (
      <div 
        key={segment.id} 
        className={`s-card s-card-${segment.category}`}
        onClick={() => setActiveSegment(segment)}
      >
        {/* Top Header */}
        <div className="sc-header">
          <div className={`sc-icon-circle bg-${segment.category}`}>
            {getIconForSegment(segment.id)}
          </div>
          
          <div className="sc-title-block">
            <span className={`sc-tag tag-${segment.category}`}>
              {isCritical && <AlertTriangle size={10} />}
              {isOpportunity && <Target size={10} />}
              {isGrowth && <TrendingUp size={10} />}
              {segment.category}
            </span>
            <h3 className="sc-title">{segment.name}</h3>
            <p className="sc-desc">{segment.description}</p>
          </div>
          
          <div className={`sc-trend trend-${segment.category}`}>
            <div className="sc-trend-val"><TrendIcon size={14} /> {segment.trend}</div>
            <div className="sc-trend-context">vs last 7 days</div>
          </div>
        </div>

        {/* Middle Stats */}
        <div className="sc-stats">
          <div className="sc-stat-block">
            <span className="sc-stat-label">Total Users</span>
            <span className="sc-stat-val">{segment.count.toLocaleString()}</span>
          </div>
          <div className="sc-stat-block">
            <span className="sc-stat-label">{isCritical ? 'Value at Risk' : isOpportunity ? 'Est. Opportunity' : 'Impact'}</span>
            <span className="sc-stat-val">{segment.revenueOpp}</span>
          </div>
          <div className="sc-stat-block flex-row-end">
            <div>
              <span className="sc-stat-label">Conversion Potential</span>
              <span className="sc-stat-val">{segment.conversionPotential}</span>
            </div>
            <Sparkline color={segment.category} />
          </div>
        </div>

        {/* Context */}
        <div className="sc-context">
          <div className={`sc-dot dot-${segment.category}`}></div>
          {segment.behaviourContext}
        </div>

        {/* Footer */}
        <div className="sc-footer">
          <div className="sc-readiness">
            <div className="sc-readiness-labels">
              <span>{segment.readinessContext}</span>
              <span className="sc-readiness-pct">{segment.readinessScore}%</span>
            </div>
            <div className="sc-readiness-bar-bg">
              <div 
                className={`sc-readiness-bar-fill fill-${segment.category}`} 
                style={{ width: `${segment.readinessScore}%` }}
              ></div>
            </div>
          </div>
          <button className={`sc-btn btn-${segment.category}`}>
            {segment.action} <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="cockpit-container page-layer">
      <div className="cockpit-header flex-between">
        <div className="header-text">
          <h1>Student Segments</h1>
          <p>Conversion opportunity map and strategic cohort analysis.</p>
        </div>
        <button className="btn-primary-action red-btn">Create Custom Segment <span style={{fontSize: '18px', fontWeight: '300', marginLeft: '4px'}}>+</span></button>
      </div>

      <div className="toolbar flex-between">
        <div className="search-bar">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search segments..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="btn-filter">
          <Filter size={16} /> Filter
        </button>
      </div>

      <div className="segments-layout">
        {/* CRITICAL */}
        <section className="segment-group">
          <div className="group-header">
            <AlertTriangle size={18} className="text-critical" />
            <h2>Immediate Action Needed</h2>
            <span className="group-count text-muted">{criticalSegments.length} segments</span>
            <div className="group-line line-critical"></div>
          </div>
          <div className="segments-grid">
            {criticalSegments.map(renderSegmentCard)}
          </div>
        </section>

        {/* OPPORTUNITY */}
        <section className="segment-group">
          <div className="group-header">
            <Target size={18} className="text-opportunity" />
            <h2>Conversion Opportunities</h2>
            <span className="group-count text-muted">{opportunitySegments.length} segments</span>
            <div className="group-line line-opportunity"></div>
          </div>
          <div className="segments-grid">
            {opportunitySegments.map(renderSegmentCard)}
          </div>
        </section>

        {/* GROWTH */}
        <section className="segment-group">
          <div className="group-header">
            <TrendingUp size={18} className="text-growth" />
            <h2>Growth Segments</h2>
            <span className="group-count text-muted">{growthSegments.length} segments</span>
            <div className="group-line line-growth"></div>
          </div>
          <div className="segments-grid">
            {growthSegments.map(renderSegmentCard)}
          </div>
        </section>
      </div>

      {/* Slide-over Panel for Drill-Down */}
      {activeSegment && (
        <>
          <div className="panel-overlay" onClick={() => setActiveSegment(null)}></div>
          <div className="slide-over-panel">
            <div className="panel-top flex-between">
              <div>
                <span className={`s-tag tag-${activeSegment.category} mb-8`}>
                  {activeSegment.category.toUpperCase()}
                </span>
                <h2>{activeSegment.name}</h2>
              </div>
              <button className="close-btn" onClick={() => setActiveSegment(null)}>
                <X size={24} />
              </button>
            </div>

            <div className="panel-scroll">
              <div className="p-metrics-grid">
                <div className="p-metric-box">
                  <span className="pm-label">Users</span>
                  <span className="pm-val">{activeSegment.count.toLocaleString()}</span>
                </div>
                <div className="p-metric-box">
                  <span className="pm-label">Impact</span>
                  <span className={`pm-val text-${activeSegment.category}`}>
                    {activeSegment.revenueOpp}
                  </span>
                </div>
                <div className="p-metric-box">
                  <span className="pm-label">Health</span>
                  <span className="pm-val">{activeSegment.readinessScore}%</span>
                </div>
              </div>

              <div className="p-section">
                <h3 className="flex-center gap-sm"><BarChart2 size={16} /> Deep Insights</h3>
                <ul className="p-list">
                  {activeSegment.drillDown.insights.map((insight, idx) => (
                    <li key={idx}>{insight}</li>
                  ))}
                </ul>
              </div>

              <div className="p-section">
                <h3 className="flex-center gap-sm"><Zap size={16} className="text-warning"/> Suggested Actions</h3>
                <div className="action-suggestions">
                  {activeSegment.drillDown.suggestedActions.map((action, idx) => (
                    <div key={idx} className="action-row flex-between">
                      <span>{action.title}</span>
                      <span className={`impact-badge ${action.impact.toLowerCase()}`}>
                        {action.impact} Impact
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-section">
                <h3 className="flex-center gap-sm"><Calendar size={16} /> Campaign History</h3>
                <div className="history-list">
                  {activeSegment.drillDown.campaignHistory.map((camp, idx) => (
                    <div key={idx} className="history-row flex-between">
                      <div>
                        <strong>{camp.name}</strong>
                        <div className="text-muted text-sm">{camp.date}</div>
                      </div>
                      <div className="text-success font-medium">{camp.conversion} conv.</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="panel-footer">
              <button className={`sc-btn btn-${activeSegment.category}`} style={{width: '100%'}}>
                {activeSegment.action} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </>
      )}

      <style>{`
        /* Colors from Image Reference */
        :root {
          --bg-darker: #0B0B10;
          --card-bg: #111216;
          --c-critical: #FF003C;
          --c-opportunity: #FF8C00;
          --c-growth: #00D26A;
          
          --c-critical-dim: rgba(255, 0, 60, 0.1);
          --c-opportunity-dim: rgba(255, 140, 0, 0.1);
          --c-growth-dim: rgba(0, 210, 106, 0.1);
        }

        .page-layer {
          background-color: var(--bg-darker);
          min-height: 100vh;
        }

        /* Utilities */
        .w-full { width: 100%; }
        .mb-8 { margin-bottom: 8px; }
        .gap-sm { gap: 6px; }
        .text-sm { font-size: 12px; }
        .text-muted { color: #8A8F98; }
        .text-critical { color: var(--c-critical); }
        .text-opportunity { color: var(--c-opportunity); }
        .text-growth { color: var(--c-growth); }
        .relative { position: relative; }
        
        .header-text h1 { font-size: 28px; font-weight: 600; color: white; margin-bottom: 6px; }
        .header-text p { color: #8A8F98; font-size: 14px; }

        .red-btn {
          background: #E60028;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .toolbar { margin-top: 32px; margin-bottom: 40px; }
        .search-bar { position: relative; width: 340px; }
        .search-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: #8A8F98; }
        .search-bar input {
          width: 100%; padding: 10px 16px 10px 40px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px; color: white; outline: none; transition: all 0.2s;
          font-size: 14px;
        }

        .btn-filter {
          display: flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          color: white; padding: 10px 16px; border-radius: 8px;
          font-size: 14px; font-weight: 500; cursor: pointer;
        }

        /* Group Headers */
        .segments-layout { display: flex; flex-direction: column; gap: 48px; }
        .group-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .group-header h2 { font-size: 16px; font-weight: 600; color: white; margin: 0; }
        .group-count { font-size: 12px; }
        .group-line { flex: 1; height: 1px; margin-left: 8px; }
        .line-critical { background: linear-gradient(90deg, rgba(255,0,60,0.5), transparent); }
        .line-opportunity { background: linear-gradient(90deg, rgba(255,140,0,0.5), transparent); }
        .line-growth { background: linear-gradient(90deg, rgba(0,210,106,0.5), transparent); }

        .segments-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(480px, 1fr)); gap: 24px;
        }

        /* ----- EXACT IMAGE CARD DESIGN ----- */
        .s-card {
          background: var(--card-bg);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          padding: 24px;
        }
        
        .s-card:hover { transform: translateY(-2px); }

        /* Priority Colors & Glows */
        .s-card-critical { border-color: rgba(255, 0, 60, 0.3); box-shadow: 0 0 20px rgba(255, 0, 60, 0.1); }
        .s-card-critical::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 40px 40px, rgba(255, 0, 60, 0.1) 0%, transparent 40%);
          pointer-events: none;
        }
        
        .s-card-opportunity { border-color: rgba(255, 140, 0, 0.3); box-shadow: 0 0 20px rgba(255, 140, 0, 0.1); }
        .s-card-opportunity::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 40px 40px, rgba(255, 140, 0, 0.1) 0%, transparent 40%);
          pointer-events: none;
        }
        
        .s-card-growth { border-color: rgba(0, 210, 106, 0.3); box-shadow: 0 0 20px rgba(0, 210, 106, 0.1); }
        .s-card-growth::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 40px 40px, rgba(0, 210, 106, 0.1) 0%, transparent 40%);
          pointer-events: none;
        }

        /* Card Header */
        .sc-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; position: relative; z-index: 2; }
        
        .sc-icon-circle {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .bg-critical { background: var(--c-critical-dim); color: var(--c-critical); box-shadow: 0 0 15px rgba(255,0,60,0.2); }
        .bg-opportunity { background: var(--c-opportunity-dim); color: var(--c-opportunity); box-shadow: 0 0 15px rgba(255,140,0,0.2); }
        .bg-growth { background: var(--c-growth-dim); color: var(--c-growth); box-shadow: 0 0 15px rgba(0,210,106,0.2); }

        .sc-title-block { flex: 1; }
        .sc-tag {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 10px; font-weight: 700; text-transform: uppercase;
          padding: 2px 6px; border-radius: 4px; margin-bottom: 8px; letter-spacing: 0.5px;
        }
        .tag-critical { background: var(--c-critical); color: white; }
        .tag-opportunity { background: var(--c-opportunity); color: black; }
        .tag-growth { background: var(--c-growth); color: black; }

        .sc-title { font-size: 18px; font-weight: 600; color: white; margin-bottom: 4px; letter-spacing: -0.3px; }
        .sc-desc { font-size: 13px; color: #8A8F98; line-height: 1.4; }

        .sc-trend { display: flex; flex-direction: column; align-items: flex-end; }
        .sc-trend-val { display: flex; align-items: center; gap: 2px; font-size: 16px; font-weight: 600; }
        .sc-trend-context { font-size: 11px; color: #8A8F98; margin-top: 2px; }
        .trend-critical { color: var(--c-critical); }
        .trend-opportunity { color: var(--c-opportunity); }
        .trend-growth { color: var(--c-growth); }

        /* Card Middle Stats */
        .sc-stats {
          display: flex; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 20px 0; margin-bottom: 16px; position: relative; z-index: 2;
        }
        .sc-stat-block { flex: 1; display: flex; flex-direction: column; gap: 6px; border-right: 1px solid rgba(255,255,255,0.06); padding: 0 16px; }
        .sc-stat-block:first-child { padding-left: 0; }
        .sc-stat-block:last-child { border-right: none; padding-right: 0; flex: 1.2; }
        .flex-row-end { display: flex; flex-direction: row; align-items: flex-end; justify-content: space-between; }
        
        .sc-stat-label { font-size: 12px; color: #8A8F98; font-weight: 500; }
        .sc-stat-val { font-size: 20px; font-weight: 600; color: white; letter-spacing: -0.5px; }

        /* Context */
        .sc-context { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #D1D5DB; margin-bottom: 24px; position: relative; z-index: 2; }
        .sc-dot { width: 6px; height: 6px; border-radius: 50%; }
        .dot-critical { background: var(--c-critical); box-shadow: 0 0 5px var(--c-critical); }
        .dot-opportunity { background: var(--c-opportunity); box-shadow: 0 0 5px var(--c-opportunity); }
        .dot-growth { background: var(--c-growth); box-shadow: 0 0 5px var(--c-growth); }

        /* Footer */
        .sc-footer { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 2; }
        .sc-readiness { flex: 1; margin-right: 32px; }
        .sc-readiness-labels { display: flex; justify-content: space-between; font-size: 12px; color: #8A8F98; margin-bottom: 6px; }
        .sc-readiness-pct { font-weight: 600; color: white; }
        
        .sc-readiness-bar-bg { width: 100%; height: 4px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden; }
        .sc-readiness-bar-fill { height: 100%; border-radius: 2px; }
        .fill-critical { background: var(--c-critical); box-shadow: 0 0 8px var(--c-critical); }
        .fill-opportunity { background: var(--c-opportunity); box-shadow: 0 0 8px var(--c-opportunity); }
        .fill-growth { background: var(--c-growth); box-shadow: 0 0 8px var(--c-growth); }

        .sc-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 20px; border-radius: 6px; border: none;
          font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;
        }
        .btn-critical { background: var(--c-critical); color: white; }
        .btn-critical:hover { background: #E60036; box-shadow: 0 0 15px rgba(255,0,60,0.4); }
        .btn-opportunity { background: var(--c-opportunity); color: black; }
        .btn-opportunity:hover { background: #FFA033; box-shadow: 0 0 15px rgba(255,140,0,0.4); }
        .btn-growth { background: var(--c-growth); color: black; }
        .btn-growth:hover { background: #1AD87B; box-shadow: 0 0 15px rgba(0,210,106,0.4); }

        /* Slide-over Panel (Reused from before) */
        .panel-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); z-index: 40;
          animation: fadeIn 0.2s ease;
        }
        .slide-over-panel {
          position: fixed; top: 0; right: 0; bottom: 0; width: 520px; max-width: 100%;
          background: #111216; border-left: 1px solid rgba(255,255,255,0.08);
          z-index: 50; display: flex; flex-direction: column;
          animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -20px 0 60px rgba(0,0,0,0.6);
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

        .panel-top { padding: 32px; border-bottom: 1px solid rgba(255,255,255,0.06); background: #0A0A0A; }
        .panel-top h2 { font-size: 24px; font-weight: 700; margin: 0; color: #FFFFFF; }
        .close-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #D1D5DB; cursor: pointer; padding: 8px; border-radius: 50%; transition: all 0.2s; }
        .close-btn:hover { background: rgba(255,255,255,0.1); color: white; transform: rotate(90deg); }

        .panel-scroll { flex: 1; overflow-y: auto; padding: 32px; display: flex; flex-direction: column; gap: 40px; }
        
        .p-metrics-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
        .p-metric-box {
          background: rgba(255,255,255,0.02); padding: 16px; border-radius: 12px;
          display: flex; flex-direction: column; gap: 6px; text-align: center;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .pm-label { font-size: 12px; color: #8A8F98; text-transform: uppercase; font-weight: 600; }
        .pm-val { font-size: 22px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px; }

        .p-section h3 { font-size: 16px; margin-bottom: 16px; color: #FFFFFF; justify-content: flex-start; }
        .p-list { margin: 0; padding-left: 20px; color: #D1D5DB; font-size: 14px; line-height: 1.6; }
        .p-list li { margin-bottom: 12px; }

        .action-suggestions { display: flex; flex-direction: column; gap: 12px; }
        .action-row {
          padding: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px; font-size: 14px; font-weight: 500; color: #FFFFFF;
        }

        .history-list { display: flex; flex-direction: column; }
        .history-row { padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; }
        .history-row:last-child { border-bottom: none; }

        .panel-footer { padding: 24px 32px; border-top: 1px solid rgba(255,255,255,0.06); background: #0A0A0A; }

      `}</style>
    </div>
  );
};

export default StudentSegments;
