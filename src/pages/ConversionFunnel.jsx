import { funnelData } from '../data/mockData';
import { ResponsiveContainer, FunnelChart, Funnel, LabelList, Tooltip } from 'recharts';
import { TrendingUp, Users } from 'lucide-react';

const ConversionFunnel = () => {
  return (
    <div className="page-container">
      <div className="page-header flex-between">
        <div>
          <h1>Conversion Funnel</h1>
          <p>Track the OSHC to OVHC transition journey.</p>
        </div>
        <button className="btn btn-secondary">Download Report</button>
      </div>

      <div className="funnel-container glass-panel">
        <div className="funnel-stats flex-between">
          <div className="f-stat">
            <span className="label">Total Eligible</span>
            <span className="value">10,000</span>
          </div>
          <div className="f-stat">
            <span className="label">Total Converted</span>
            <span className="value text-success">1,420</span>
          </div>
          <div className="f-stat">
            <span className="label">Overall Conversion</span>
            <span className="value text-success">14.2%</span>
          </div>
        </div>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={400}>
            <FunnelChart>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  borderColor: 'var(--border-color)',
                  borderRadius: '8px',
                  color: 'white'
                }} 
              />
              <Funnel
                dataKey="value"
                data={funnelData}
                isAnimationActive
                fill="var(--accent-blue)"
              >
                <LabelList position="right" fill="var(--text-primary)" stroke="none" dataKey="name" />
                <LabelList position="center" fill="#fff" stroke="none" dataKey="value" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
      </div>

      <style>{`
        .funnel-container {
          padding: 32px;
          margin-top: 24px;
        }
        .funnel-stats {
          margin-bottom: 40px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border-light);
        }
        .f-stat {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .f-stat .label {
          color: var(--text-secondary);
          font-size: 14px;
        }
        .f-stat .value {
          font-size: 32px;
          font-weight: 700;
        }
        .text-success {
          color: var(--success);
        }
        .chart-wrapper {
          display: flex;
          justify-content: center;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default ConversionFunnel;
