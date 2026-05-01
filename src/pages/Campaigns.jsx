import { activeCampaigns } from '../data/mockData';
import { Megaphone, MessageSquare, Smartphone, Mail, Plus } from 'lucide-react';

const Campaigns = () => {
  const getIcon = (channel) => {
    switch(channel) {
      case 'In-App': return <Smartphone size={16} />;
      case 'Push': return <MessageSquare size={16} />;
      case 'Email': return <Mail size={16} />;
      default: return <Megaphone size={16} />;
    }
  };

  return (
    <div className="page-container">
      <div className="page-header flex-between">
        <div>
          <h1>Campaigns & Communications</h1>
          <p>Conversion-focused messaging system.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          New Campaign
        </button>
      </div>

      <div className="campaigns-grid">
        <div className="campaign-stats-panel glass-panel">
          <h3>Overall Performance</h3>
          <div className="stat-group">
            <div className="stat">
              <span className="label">Total Sent (30d)</span>
              <span className="value">45,210</span>
            </div>
            <div className="stat">
              <span className="label">Avg. Open Rate</span>
              <span className="value">42.8%</span>
            </div>
            <div className="stat">
              <span className="label">Avg. Conversion</span>
              <span className="value text-success">11.9%</span>
            </div>
          </div>
        </div>

        <div className="campaigns-list glass-panel">
          <h3>Active Campaigns</h3>
          <div className="table-header">
            <span>Name</span>
            <span>Channel</span>
            <span>Conversion</span>
            <span>Status</span>
          </div>
          {activeCampaigns.map(camp => (
            <div key={camp.id} className="table-row">
              <span className="campaign-name">{camp.name}</span>
              <span className="channel flex-center">
                {getIcon(camp.channel)}
                {camp.channel}
              </span>
              <span className="conv-rate text-success">{camp.conversion}</span>
              <span className="status-badge active">{camp.status}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .campaigns-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 24px;
        }
        .campaign-stats-panel {
          padding: 24px;
          height: fit-content;
        }
        .campaign-stats-panel h3, .campaigns-list h3 {
          font-size: 18px;
          margin-bottom: 20px;
        }
        .stat-group {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .stat {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .stat .label {
          font-size: 13px;
          color: var(--text-secondary);
        }
        .stat .value {
          font-size: 28px;
          font-weight: 700;
        }
        .text-success {
          color: var(--success);
        }
        .campaigns-list {
          padding: 24px;
        }
        .table-header, .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          align-items: center;
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
        }
        .table-header {
          font-size: 12px;
          text-transform: uppercase;
          color: var(--text-tertiary);
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .table-row:last-child {
          border-bottom: none;
        }
        .campaign-name {
          font-weight: 500;
          font-size: 15px;
        }
        .channel {
          justify-content: flex-start;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 14px;
        }
        .conv-rate {
          font-weight: 600;
        }
        .status-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 600;
          text-align: center;
          width: fit-content;
        }
        .status-badge.active {
          background: var(--success-bg);
          color: var(--success);
        }
      `}</style>
    </div>
  );
};

export default Campaigns;
